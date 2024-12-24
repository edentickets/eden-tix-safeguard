import { Database } from "../database.types";

export type LoyaltyTransactionRow = Database["public"]["Tables"]["loyalty_transactions"]["Row"];
export type ReferralRow = Database["public"]["Tables"]["referrals"]["Row"];

export interface LoyaltyTypes {
  loyalty_transactions: {
    Row: LoyaltyTransactionRow;
  };
  referrals: {
    Row: ReferralRow;
  };
}