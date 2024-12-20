import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Promoter } from "@/types/promoter";

export const usePromoters = (creatorId?: string) => {
  return useQuery({
    queryKey: ["promoters", creatorId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("promoters")
        .select(`
          *,
          profile:profiles!promoters_profile_id_fkey(
            full_name,
            avatar_url,
            username
          )
        `)
        .eq("creator_id", creatorId);

      if (error) throw error;
      return data as (Promoter & { profile: NonNullable<Promoter["profile"]> })[];
    },
    enabled: !!creatorId,
  });
};