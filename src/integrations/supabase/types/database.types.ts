import { Json } from './helpers.types';

interface Tables {
  profiles: {
    Row: {
      id: string;
      created_at: string | null;
      updated_at: string | null;
      username: string | null;
      full_name: string | null;
      avatar_url: string | null;
      is_creator: boolean | null;
      creator_bio: string | null;
      creator_tagline: string | null;
      social_links: Json | null;
      onboarding_completed: boolean | null;
      is_verified: boolean | null;
      verification_date: string | null;
      loyalty_points: number | null;
      analytics_consent: boolean | null;
      preferred_payment_method: string | null;
    };
    Insert: {
      id: string;
      created_at?: string | null;
      updated_at?: string | null;
      username?: string | null;
      full_name?: string | null;
      avatar_url?: string | null;
      is_creator?: boolean | null;
      creator_bio?: string | null;
      creator_tagline?: string | null;
      social_links?: Json | null;
      onboarding_completed?: boolean | null;
      is_verified?: boolean | null;
      verification_date?: string | null;
      loyalty_points?: number | null;
      analytics_consent?: boolean | null;
      preferred_payment_method?: string | null;
    };
    Update: {
      id?: string;
      created_at?: string | null;
      updated_at?: string | null;
      username?: string | null;
      full_name?: string | null;
      avatar_url?: string | null;
      is_creator?: boolean | null;
      creator_bio?: string | null;
      creator_tagline?: string | null;
      social_links?: Json | null;
      onboarding_completed?: boolean | null;
      is_verified?: boolean | null;
      verification_date?: string | null;
      loyalty_points?: number | null;
      analytics_consent?: boolean | null;
      preferred_payment_method?: string | null;
    };
  };
  referrals: {
    Row: {
      id: string;
      referrer_id: string;
      referred_id: string;
      reward_points: number | null;
      status: string;
      created_at: string | null;
      updated_at: string | null;
    };
    Insert: {
      id?: string;
      referrer_id: string;
      referred_id: string;
      reward_points?: number | null;
      status?: string;
      created_at?: string | null;
      updated_at?: string | null;
    };
    Update: {
      id?: string;
      referrer_id?: string;
      referred_id?: string;
      reward_points?: number | null;
      status?: string;
      created_at?: string | null;
      updated_at?: string | null;
    };
  };
  ticket_tiers: {
    Row: {
      id: string;
      event_id: string;
      title: string;
      description: string | null;
      price: number;
      total_tickets: number;
      available_tickets: number;
      group_discount_threshold: number | null;
      group_discount_percentage: number | null;
      created_at: string | null;
      updated_at: string | null;
    };
    Insert: {
      id?: string;
      event_id: string;
      title: string;
      description?: string | null;
      price: number;
      total_tickets: number;
      available_tickets: number;
      group_discount_threshold?: number | null;
      group_discount_percentage?: number | null;
      created_at?: string | null;
      updated_at?: string | null;
    };
    Update: {
      id?: string;
      event_id?: string;
      title?: string;
      description?: string | null;
      price?: number;
      total_tickets?: number;
      available_tickets?: number;
      group_discount_threshold?: number | null;
      group_discount_percentage?: number | null;
      created_at?: string | null;
      updated_at?: string | null;
    };
  };
  ticket_transfers: {
    Row: {
      id: string;
      ticket_id: string | null;
      from_user_id: string | null;
      to_user_id: string | null;
      price: number | null;
      transfer_type: string;
      created_at: string | null;
      updated_at: string | null;
    };
    Insert: {
      id?: string;
      ticket_id?: string | null;
      from_user_id?: string | null;
      to_user_id?: string | null;
      price?: number | null;
      transfer_type: string;
      created_at?: string | null;
      updated_at?: string | null;
    };
    Update: {
      id?: string;
      ticket_id?: string | null;
      from_user_id?: string | null;
      to_user_id?: string | null;
      price?: number | null;
      transfer_type?: string;
      created_at?: string | null;
      updated_at?: string | null;
    };
  };
  promoters: {
    Row: {
      id: string;
      profile_id: string;
      creator_id: string;
      commission_rate: number;
      created_at: string | null;
      updated_at: string | null;
    };
    Insert: {
      id?: string;
      profile_id: string;
      creator_id: string;
      commission_rate?: number;
      created_at?: string | null;
      updated_at?: string | null;
    };
    Update: {
      id?: string;
      profile_id?: string;
      creator_id?: string;
      commission_rate?: number;
      created_at?: string | null;
      updated_at?: string | null;
    };
  };
  promoter_sales: {
    Row: {
      commission_amount: number;
      created_at: string | null;
      id: string;
      paid_at: string | null;
      promoter_id: string;
      ticket_id: string;
      updated_at: string | null;
    };
    Insert: {
      commission_amount: number;
      created_at?: string | null;
      id?: string;
      paid_at?: string | null;
      promoter_id: string;
      ticket_id: string;
      updated_at?: string | null;
    };
    Update: {
      commission_amount?: number;
      created_at?: string | null;
      id?: string;
      paid_at?: string | null;
      promoter_id?: string;
      ticket_id?: string;
      updated_at?: string | null;
    };
  };
  promoter_payouts: {
    Row: {
      amount: number;
      created_at: string | null;
      id: string;
      payout_details: Json | null;
      payout_method: string | null;
      promoter_id: string;
      status: string;
      stripe_payout_id: string | null;
      updated_at: string | null;
    };
    Insert: {
      amount: number;
      created_at?: string | null;
      id?: string;
      payout_details?: Json | null;
      payout_method?: string | null;
      promoter_id: string;
      status?: string;
      stripe_payout_id?: string | null;
      updated_at?: string | null;
    };
    Update: {
      amount?: number;
      created_at?: string | null;
      id?: string;
      payout_details?: Json | null;
      payout_method?: string | null;
      promoter_id?: string;
      status?: string;
      stripe_payout_id?: string | null;
      updated_at?: string | null;
    };
  };
  promoter_referral_links: {
    Row: {
      created_at: string | null;
      event_id: string;
      id: string;
      promoter_id: string;
      unique_code: string;
      updated_at: string | null;
    };
    Insert: {
      created_at?: string | null;
      event_id: string;
      id?: string;
      promoter_id: string;
      unique_code: string;
      updated_at?: string | null;
    };
    Update: {
      created_at?: string | null;
      event_id?: string;
      id?: string;
      promoter_id?: string;
      unique_code?: string;
      updated_at?: string | null;
    };
  };
  email_campaigns: {
    Row: {
      click_count: number | null;
      content: string;
      created_at: string | null;
      creator_id: string;
      event_id: string;
      id: string;
      open_count: number | null;
      recipient_count: number | null;
      sent_at: string | null;
      status: string;
      subject: string;
      updated_at: string | null;
    };
    Insert: {
      click_count?: number | null;
      content: string;
      created_at?: string | null;
      creator_id: string;
      event_id: string;
      id?: string;
      open_count?: number | null;
      recipient_count?: number | null;
      sent_at?: string | null;
      status?: string;
      subject: string;
      updated_at?: string | null;
    };
    Update: {
      click_count?: number | null;
      content?: string;
      created_at?: string | null;
      creator_id?: string;
      event_id?: string;
      id?: string;
      open_count?: number | null;
      recipient_count?: number | null;
      sent_at?: string | null;
      status?: string;
      subject?: string;
      updated_at?: string | null;
    };
  };
  email_preferences: {
    Row: {
      created_at: string | null;
      event_reminders: boolean | null;
      id: string;
      marketing_emails: boolean | null;
      profile_id: string;
      purchase_confirmations: boolean | null;
      updated_at: string | null;
    };
    Insert: {
      created_at?: string | null;
      event_reminders?: boolean | null;
      id?: string;
      marketing_emails?: boolean | null;
      profile_id: string;
      purchase_confirmations?: boolean | null;
      updated_at?: string | null;
    };
    Update: {
      created_at?: string | null;
      event_reminders?: boolean | null;
      id?: string;
      marketing_emails?: boolean | null;
      profile_id?: string;
      purchase_confirmations?: boolean | null;
      updated_at?: string | null;
    };
  };
  event_attendees: {
    Row: {
      created_at: string | null;
      event_id: string;
      id: string;
      profile_id: string;
      status: string;
      ticket_id: string | null;
      updated_at: string | null;
    };
    Insert: {
      created_at?: string | null;
      event_id: string;
      id?: string;
      profile_id: string;
      status?: string;
      ticket_id?: string | null;
      updated_at?: string | null;
    };
    Update: {
      created_at?: string | null;
      event_id?: string;
      id?: string;
      profile_id?: string;
      status?: string;
      ticket_id?: string | null;
      updated_at?: string | null;
    };
  };
  event_categories: {
    Row: {
      created_at: string | null;
      description: string | null;
      id: string;
      name: string;
      slug: string;
      updated_at: string | null;
    };
    Insert: {
      created_at?: string | null;
      description?: string | null;
      id?: string;
      name: string;
      slug: string;
      updated_at?: string | null;
    };
    Update: {
      created_at?: string | null;
      description?: string | null;
      id?: string;
      name?: string;
      slug?: string;
      updated_at?: string | null;
    };
  };
  event_category_mappings: {
    Row: {
      category_id: string;
      event_id: string;
    };
    Insert: {
      category_id: string;
      event_id: string;
    };
    Update: {
      category_id?: string;
      event_id?: string;
    };
  };
  events: {
    Row: {
      available_tickets: number;
      background_color: string | null;
      created_at: string | null;
      creator_id: string | null;
      description: string | null;
      end_date: string;
      heading_color: string | null;
      id: string;
      image_url: string | null;
      location: string;
      price: number;
      primary_color: string | null;
      promo_banner_url: string | null;
      secondary_color: string | null;
      start_date: string;
      text_color: string | null;
      title: string;
      total_tickets: number;
      updated_at: string | null;
    };
    Insert: {
      available_tickets: number;
      background_color?: string | null;
      created_at?: string | null;
      creator_id?: string | null;
      description?: string | null;
      end_date: string;
      heading_color?: string | null;
      id?: string;
      image_url?: string | null;
      location: string;
      price: number;
      primary_color?: string | null;
      promo_banner_url?: string | null;
      secondary_color?: string | null;
      start_date: string;
      text_color?: string | null;
      title: string;
      total_tickets: number;
      updated_at?: string | null;
    };
    Update: {
      available_tickets?: number;
      background_color?: string | null;
      created_at?: string | null;
      creator_id?: string | null;
      description?: string | null;
      end_date?: string;
      heading_color?: string | null;
      id?: string;
      image_url?: string | null;
      location?: string;
      price?: number;
      primary_color?: string | null;
      promo_banner_url?: string | null;
      secondary_color?: string | null;
      start_date?: string;
      text_color?: string | null;
      title?: string;
      total_tickets?: number;
      updated_at?: string | null;
    };
  };
  guest_list_entries: {
    Row: {
      checked_in_at: string | null;
      created_at: string | null;
      guest_email: string;
      guest_list_id: string;
      guest_name: string;
      id: string;
      status: string;
      updated_at: string | null;
    };
    Insert: {
      checked_in_at?: string | null;
      created_at?: string | null;
      guest_email: string;
      guest_list_id: string;
      guest_name: string;
      id?: string;
      status?: string;
      updated_at?: string | null;
    };
    Update: {
      checked_in_at?: string | null;
      created_at?: string | null;
      guest_email?: string;
      guest_list_id?: string;
      guest_name?: string;
      id?: string;
      status?: string;
      updated_at?: string | null;
    };
  };
  guest_lists: {
    Row: {
      created_at: string | null;
      event_id: string;
      id: string;
      max_guests: number;
      promoter_id: string;
      updated_at: string | null;
    };
    Insert: {
      created_at?: string | null;
      event_id: string;
      id?: string;
      max_guests?: number;
      promoter_id: string;
      updated_at?: string | null;
    };
    Update: {
      created_at?: string | null;
      event_id?: string;
      id?: string;
      max_guests?: number;
      promoter_id?: string;
      updated_at?: string | null;
    };
  };
  loyalty_transactions: {
    Row: {
      created_at: string | null;
      description: string | null;
      id: string;
      points: number;
      profile_id: string | null;
      transaction_type: string;
    };
    Insert: {
      created_at?: string | null;
      description?: string | null;
      id?: string;
      points: number;
      profile_id?: string | null;
      transaction_type: string;
    };
    Update: {
      created_at?: string | null;
      description?: string | null;
      id?: string;
      points?: number;
      profile_id?: string | null;
      transaction_type?: string;
    };
  };
  messages: {
    Row: {
      created_at: string | null;
      event_title: string;
      from_user_id: string | null;
      id: string;
      message: string;
      to_user_id: string | null;
      updated_at: string | null;
    };
    Insert: {
      created_at?: string | null;
      event_title: string;
      from_user_id?: string | null;
      id?: string;
      message: string;
      to_user_id?: string | null;
      updated_at?: string | null;
    };
    Update: {
      created_at?: string | null;
      event_title?: string;
      from_user_id?: string | null;
      id?: string;
      message?: string;
      to_user_id?: string | null;
      updated_at?: string | null;
    };
  };
  payment_plans: {
    Row: {
      created_at: string | null;
      description: string | null;
      id: string;
      initial_payment_percentage: number;
      installments: number;
      name: string;
      ticket_tier_id: string;
      updated_at: string | null;
    };
    Insert: {
      created_at?: string | null;
      description?: string | null;
      id?: string;
      initial_payment_percentage?: number;
      installments?: number;
      name: string;
      ticket_tier_id: string;
      updated_at?: string | null;
    };
    Update: {
      created_at?: string | null;
      description?: string | null;
      id?: string;
      initial_payment_percentage?: number;
      installments?: number;
      name?: string;
      ticket_tier_id: string;
      updated_at?: string | null;
    };
  };
  tickets: {
    Row: {
      created_at: string | null;
      current_qr_code: string | null;
      event_id: string | null;
      gift_message: string | null;
      gift_recipient_email: string | null;
      gift_sent_at: string | null;
      id: string;
      is_gift: boolean | null;
      last_checked_in_at: string | null;
      owner_id: string | null;
      payment_intent_id: string | null;
      payment_method: string | null;
      payment_status: string | null;
      purchase_price: number;
      qr_code: string | null;
      qr_code_updated_at: string | null;
      resale_enabled: boolean | null;
      resale_price: number | null;
      status: string;
      updated_at: string | null;
    };
    Insert: {
      created_at?: string | null;
      current_qr_code?: string | null;
      event_id?: string | null;
      gift_message?: string | null;
      gift_recipient_email?: string | null;
      gift_sent_at?: string | null;
      id?: string;
      is_gift?: boolean | null;
      last_checked_in_at?: string | null;
      owner_id?: string | null;
      payment_intent_id?: string | null;
      payment_method?: string | null;
      payment_status?: string | null;
      purchase_price: number;
      qr_code?: string | null;
      qr_code_updated_at?: string | null;
      resale_enabled?: boolean | null;
      resale_price?: number | null;
      status: string;
      updated_at?: string | null;
    };
    Update: {
      created_at?: string | null;
      current_qr_code?: string | null;
      event_id?: string | null;
      gift_message?: string | null;
      gift_recipient_email?: string | null;
      gift_sent_at?: string | null;
      id?: string;
      is_gift?: boolean | null;
      last_checked_in_at?: string | null;
      owner_id?: string | null;
      payment_intent_id?: string | null;
      payment_method?: string | null;
      payment_status?: string | null;
      purchase_price?: number;
      qr_code?: string | null;
      qr_code_updated_at?: string | null;
      resale_enabled?: boolean | null;
      resale_price?: number | null;
      status?: string;
      updated_at?: string | null;
    };
  };
  waitlist_entries: {
    Row: {
      created_at: string | null;
      email: string;
      event_id: string;
      id: string;
      notification_sent: boolean | null;
      quantity: number;
      status: string;
      ticket_tier_id: string;
      updated_at: string | null;
      user_id: string;
    };
    Insert: {
      created_at?: string | null;
      email: string;
      event_id: string;
      id?: string;
      notification_sent?: boolean | null;
      quantity?: number;
      status?: string;
      ticket_tier_id: string;
      updated_at?: string | null;
      user_id: string;
    };
    Update: {
      created_at?: string | null;
      email?: string;
      event_id?: string;
      id?: string;
      notification_sent?: boolean | null;
      quantity?: number;
      status?: string;
      ticket_tier_id?: string;
      updated_at?: string | null;
      user_id?: string;
    };
  };
}

interface Views {
  [key: string]: {
    Row: Record<string, unknown>;
  };
}

interface Enums {
  ticket_status: "active" | "used" | "expired" | "cancelled";
}

export interface Database {
  public: {
    Tables: Tables;
    Views: Views;
    Enums: Enums;
  };
}

// Re-export types for each domain
export * from './database/auth.types';
export * from './database/events.types';
export * from './database/tickets.types';
export * from './database/promoters.types';
export * from './database/loyalty.types';
export * from './database/messaging.types';
export * from './database/waitlist.types';
export * from './database/payment.types';
