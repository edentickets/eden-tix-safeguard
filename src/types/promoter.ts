export interface Promoter {
  id: string;
  profile_id: string;
  creator_id: string;
  commission_rate: number;
  created_at?: string;
  updated_at?: string;
  profile?: {
    full_name: string;
    avatar_url: string;
    username: string;
  };
}

export interface PromoterSale {
  id: string;
  promoter_id: string;
  ticket_id: string;
  commission_amount: number;
  paid_at?: string;
  created_at?: string;
  updated_at?: string;
}

export interface PromoterReferralLink {
  id: string;
  promoter_id: string;
  event_id: string;
  unique_code: string;
  created_at?: string;
  updated_at?: string;
  event?: {
    title: string;
  };
}