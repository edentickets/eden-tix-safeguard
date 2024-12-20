import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { PromoterReferralLink } from "@/types/promoter";

export const usePromoterReferralLinks = (promoterId?: string) => {
  return useQuery({
    queryKey: ["promoter-referral-links", promoterId],
    queryFn: async () => {
      if (!promoterId) return [];
      
      const { data, error } = await supabase
        .from("promoter_referral_links")
        .select(`
          *,
          event:events(title)
        `)
        .eq("promoter_id", promoterId);
      
      if (error) throw error;
      return data as PromoterReferralLink[];
    },
    enabled: !!promoterId,
  });
};