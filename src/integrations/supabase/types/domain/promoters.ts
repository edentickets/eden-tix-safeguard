import { Database } from '../database.types';

export type PromoterRow = Database['public']['Tables']['promoters']['Row'];
export type PromoterSaleRow = Database['public']['Tables']['promoter_sales']['Row'];
export type PromoterPayoutRow = Database['public']['Tables']['promoter_payouts']['Row'];
export type PromoterReferralLinkRow = Database['public']['Tables']['promoter_referral_links']['Row'];
export type GuestListRow = Database['public']['Tables']['guest_lists']['Row'];
export type GuestListEntryRow = Database['public']['Tables']['guest_list_entries']['Row'];

export interface PromoterDomainTypes {
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
    guest_lists: {
      Row: GuestListRow;
    };
    guest_list_entries: {
      Row: GuestListEntryRow;
    };
  };
}