import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { PromoterSale } from "@/types/promoter";

export const usePromoterSales = (promoterId?: string) => {
  return useQuery({
    queryKey: ["promoter-sales", promoterId],
    queryFn: async () => {
      if (!promoterId) return [];
      
      const { data, error } = await supabase
        .from("promoter_sales")
        .select("*")
        .eq("promoter_id", promoterId);
      
      if (error) throw error;
      return data as PromoterSale[];
    },
    enabled: !!promoterId,
  });
};