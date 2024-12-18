import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useSession } from "@supabase/auth-helpers-react";

export const useTickets = (eventId?: string) => {
  const session = useSession();
  const userId = session?.user?.id;

  return useQuery({
    queryKey: ['tickets', eventId, userId],
    queryFn: async () => {
      let query = supabase
        .from('tickets')
        .select(`
          *,
          event:events(*),
          owner:profiles(*)
        `);

      if (eventId) {
        query = query.eq('event_id', eventId);
      }

      if (userId) {
        query = query.eq('owner_id', userId);
      }

      const { data, error } = await query;

      if (error) throw error;
      return data;
    },
    enabled: !!(eventId || userId),
  });
};