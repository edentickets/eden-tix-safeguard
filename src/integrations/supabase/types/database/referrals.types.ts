import { Database } from "../database.types";
import { ProfileRow } from "./profiles.types";

export type ReferralRow = Database["public"]["Tables"]["referrals"]["Row"];
export type ReferralInsert = Database["public"]["Tables"]["referrals"]["Insert"];
export type ReferralUpdate = Database["public"]["Tables"]["referrals"]["Update"];

export interface Referral extends ReferralRow {
  referrer?: ProfileRow;
  referred?: ProfileRow;
}