import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface PromoterPayout {
  id: string;
  promoter_id: string;
  amount: number;
  status: string;
  payout_method?: string;
  payout_details?: Record<string, any>;
  stripe_payout_id?: string;
  created_at?: string;
  updated_at?: string;
}

export const usePromoterPayouts = (promoterId?: string) => {
  return useQuery({
    queryKey: ["promoter-payouts", promoterId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("promoter_payouts")
        .select("*")
        .eq("promoter_id", promoterId)
        .order("created_at", { ascending: false });

      if (error) throw error;
      return data as PromoterPayout[];
    },
    enabled: !!promoterId,
  });
};

export const usePayoutMetrics = (promoterId?: string) => {
  return useQuery({
    queryKey: ["payout-metrics", promoterId],
    queryFn: async () => {
      // Get total paid out
      const { data: payouts, error: payoutsError } = await supabase
        .from("promoter_payouts")
        .select("amount")
        .eq("promoter_id", promoterId)
        .eq("status", "completed");

      if (payoutsError) throw payoutsError;

      // Get pending amount
      const { data: pendingPayouts, error: pendingError } = await supabase
        .from("promoter_payouts")
        .select("amount")
        .eq("promoter_id", promoterId)
        .eq("status", "pending");

      if (pendingError) throw pendingError;

      // Get available balance (from promoter_sales)
      const { data: sales, error: salesError } = await supabase
        .from("promoter_sales")
        .select("commission_amount")
        .eq("promoter_id", promoterId)
        .is("paid_at", null);

      if (salesError) throw salesError;

      const totalPaidOut = payouts?.reduce((sum, p) => sum + p.amount, 0) || 0;
      const pendingAmount = pendingPayouts?.reduce((sum, p) => sum + p.amount, 0) || 0;
      const availableBalance = sales?.reduce((sum, s) => sum + s.commission_amount, 0) || 0;

      return {
        totalPaidOut,
        pendingAmount,
        availableBalance,
      };
    },
    enabled: !!promoterId,
  });
};