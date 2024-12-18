import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useSession } from "@supabase/auth-helpers-react";

export const useProfile = (userId?: string) => {
  const session = useSession();
  const currentUserId = session?.user?.id;
  const targetUserId = userId || currentUserId;

  return useQuery({
    queryKey: ['profile', targetUserId],
    queryFn: async () => {
      if (!targetUserId) throw new Error('User ID is required');

      const { data, error } = await supabase
        .from('profiles')
        .select(`
          *,
          events:events(*)
        `)
        .eq('id', targetUserId)
        .maybeSingle();

      if (error) throw error;
      if (!data) throw new Error('Profile not found');
      return data;
    },
    enabled: !!targetUserId,
  });
};