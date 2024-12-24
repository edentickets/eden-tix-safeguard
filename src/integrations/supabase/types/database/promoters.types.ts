import { Database } from "../database.types";

export type PromoterRow = Database["public"]["Tables"]["promoters"]["Row"];
export type PromoterSaleRow = Database["public"]["Tables"]["promoter_sales"]["Row"];
export type PromoterPayoutRow = Database["public"]["Tables"]["promoter_payouts"]["Row"];
export type PromoterReferralLinkRow = Database["public"]["Tables"]["promoter_referral_links"]["Row"];

export interface PromoterTypes {
  Tables: {
    promoters: {
      Row: PromoterRow;
    };
    promoter_sales: {
      Row: PromoterSaleRow;
    };
    promoter_payouts: {
      Row: PromoterPayoutRow;
    };
    promoter_referral_links: {
      Row: PromoterReferralLinkRow;
    };
  };
}