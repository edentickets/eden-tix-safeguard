export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      events: EventsTable
      event_categories: EventCategoriesTable
      event_category_mappings: EventCategoryMappingsTable
      event_attendees: EventAttendeesTable
      tickets: TicketsTable
      ticket_tiers: TicketTiersTable
      ticket_transfers: TicketTransfersTable
      profiles: ProfilesTable
      messages: MessagesTable
      promoters: PromotersTable
      promoter_sales: PromoterSalesTable
      promoter_payouts: PromoterPayoutsTable
      promoter_referral_links: PromoterReferralLinksTable
      guest_lists: GuestListsTable
      guest_list_entries: GuestListEntriesTable
      email_campaigns: EmailCampaignsTable
      email_preferences: EmailPreferencesTable
      payment_plans: PaymentPlansTable
      loyalty_transactions: LoyaltyTransactionsTable
      referrals: ReferralsTable
      waitlist_entries: WaitlistEntriesTable
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      decrement: {
        Args: { x: number }
        Returns: number
      }
    }
    Enums: {
      ticket_status: "active" | "used" | "expired" | "cancelled"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

// Table interfaces moved to separate files to reduce complexity
interface EventsTable {
  Row: {
    id: string
    creator_id: string | null
    title: string
    description: string | null
    location: string
    start_date: string
    end_date: string
    image_url: string | null
    total_tickets: number
    available_tickets: number
    price: number
    created_at: string | null
    updated_at: string | null
    promo_banner_url: string | null
    primary_color: string | null
    secondary_color: string | null
    background_color: string | null
    text_color: string | null
    heading_color: string | null
  }
  Insert: {
    creator_id?: string | null
    title: string
    description?: string | null
    location: string
    start_date: string
    end_date: string
    image_url?: string | null
    total_tickets: number
    available_tickets: number
    price: number
    created_at?: string | null
    updated_at?: string | null
    promo_banner_url?: string | null
    primary_color?: string | null
    secondary_color?: string | null
    background_color?: string | null
    text_color?: string | null
    heading_color?: string | null
  }
  Update: {
    creator_id?: string | null
    title?: string
    description?: string | null
    location?: string
    start_date?: string
    end_date?: string
    image_url?: string | null
    total_tickets?: number
    available_tickets?: number
    price?: number
    created_at?: string | null
    updated_at?: string | null
    promo_banner_url?: string | null
    primary_color?: string | null
    secondary_color?: string | null
    background_color?: string | null
    text_color?: string | null
    heading_color?: string | null
  }
}

interface EventCategoriesTable {
  Row: {
    id: string
    name: string
    description: string | null
    created_at: string | null
    updated_at: string | null
  }
  Insert: {
    name: string
    description?: string | null
    created_at?: string | null
    updated_at?: string | null
  }
  Update: {
    name?: string
    description?: string | null
    created_at?: string | null
    updated_at?: string | null
  }
}

interface EventCategoryMappingsTable {
  Row: {
    category_id: string
    event_id: string
  }
  Insert: {
    category_id: string
    event_id: string
  }
  Update: {
    category_id?: string
    event_id?: string
  }
}

interface EventAttendeesTable {
  Row: {
    id: string
    event_id: string
    profile_id: string
    ticket_id: string | null
    status: string
    created_at: string | null
    updated_at: string | null
  }
  Insert: {
    event_id: string
    profile_id: string
    ticket_id?: string | null
    status?: string
    created_at?: string | null
    updated_at?: string | null
  }
  Update: {
    event_id?: string
    profile_id?: string
    ticket_id?: string | null
    status?: string
    created_at?: string | null
    updated_at?: string | null
  }
}

interface TicketsTable {
  Row: {
    id: string
    event_id: string | null
    owner_id: string | null
    purchase_price: number
    payment_status: string | null
    payment_method: string | null
    created_at: string | null
    updated_at: string | null
    status: string
    current_qr_code: string | null
    qr_code_updated_at: string | null
    last_checked_in_at: string | null
    is_gift: boolean | null
    gift_message: string | null
    gift_recipient_email: string | null
    gift_sent_at: string | null
    payment_intent_id: string | null
    resale_enabled: boolean | null
    resale_price: number | null
  }
  Insert: {
    event_id?: string | null
    owner_id?: string | null
    purchase_price: number
    payment_status?: string | null
    payment_method?: string | null
    created_at?: string | null
    updated_at?: string | null
    status: string
    current_qr_code?: string | null
    qr_code_updated_at?: string | null
    last_checked_in_at?: string | null
    is_gift?: boolean | null
    gift_message?: string | null
    gift_recipient_email?: string | null
    gift_sent_at?: string | null
    payment_intent_id?: string | null
    resale_enabled?: boolean | null
    resale_price?: number | null
  }
  Update: {
    event_id?: string | null
    owner_id?: string | null
    purchase_price?: number
    payment_status?: string | null
    payment_method?: string | null
    created_at?: string | null
    updated_at?: string | null
    status?: string
    current_qr_code?: string | null
    qr_code_updated_at?: string | null
    last_checked_in_at?: string | null
    is_gift?: boolean | null
    gift_message?: string | null
    gift_recipient_email?: string | null
    gift_sent_at?: string | null
    payment_intent_id?: string | null
    resale_enabled?: boolean | null
    resale_price?: number | null
  }
}

interface TicketTiersTable {
  Row: {
    id: string
    event_id: string
    title: string
    description: string | null
    price: number
    total_tickets: number
    available_tickets: number
    created_at: string | null
    updated_at: string | null
  }
  Insert: {
    event_id: string
    title: string
    description?: string | null
    price: number
    total_tickets: number
    available_tickets: number
    created_at?: string | null
    updated_at?: string | null
  }
  Update: {
    event_id?: string
    title?: string
    description?: string | null
    price?: number
    total_tickets?: number
    available_tickets?: number
    created_at?: string | null
    updated_at?: string | null
  }
}

interface TicketTransfersTable {
  Row: {
    id: string
    from_user_id: string | null
    to_user_id: string | null
    ticket_id: string | null
    price: number | null
    transfer_type: string
    created_at: string | null
    updated_at: string | null
  }
  Insert: {
    from_user_id?: string | null
    to_user_id?: string | null
    ticket_id?: string | null
    price?: number | null
    transfer_type: string
    created_at?: string | null
    updated_at?: string | null
  }
  Update: {
    from_user_id?: string | null
    to_user_id?: string | null
    ticket_id?: string | null
    price?: number | null
    transfer_type?: string
    created_at?: string | null
    updated_at?: string | null
  }
}

interface ProfilesTable {
  Row: {
    id: string
    avatar_url: string | null
    created_at: string | null
    creator_bio: string | null
    creator_tagline: string | null
    full_name: string | null
    is_creator: boolean | null
    social_links: Json | null
    updated_at: string | null
    username: string | null
  }
  Insert: {
    avatar_url?: string | null
    created_at?: string | null
    creator_bio?: string | null
    creator_tagline?: string | null
    full_name?: string | null
    is_creator?: boolean | null
    social_links?: Json | null
    updated_at?: string | null
    username: string
  }
  Update: {
    avatar_url?: string | null
    created_at?: string | null
    creator_bio?: string | null
    creator_tagline?: string | null
    full_name?: string | null
    is_creator?: boolean | null
    social_links?: Json | null
    updated_at?: string | null
    username?: string
  }
}

interface MessagesTable {
  Row: {
    id: string
    event_title: string
    from_user_id: string | null
    to_user_id: string | null
    message: string
    created_at: string | null
    updated_at: string | null
  }
  Insert: {
    event_title: string
    from_user_id?: string | null
    to_user_id?: string | null
    message: string
    created_at?: string | null
    updated_at?: string | null
  }
  Update: {
    event_title?: string
    from_user_id?: string | null
    to_user_id?: string | null
    message?: string
    created_at?: string | null
    updated_at?: string | null
  }
}

interface PromotersTable {
  Row: {
    id: string
    commission_rate: number
    created_at: string | null
    creator_id: string | null
    profile_id: string | null
    updated_at: string | null
  }
  Insert: {
    commission_rate?: number
    created_at?: string | null
    creator_id: string
    profile_id: string
    updated_at?: string | null
  }
  Update: {
    commission_rate?: number
    created_at?: string | null
    creator_id?: string
    profile_id?: string
    updated_at?: string | null
  }
}

interface PromoterSalesTable {
  Row: {
    id: string
    promoter_id: string
    ticket_id: string
    commission_amount: number
    created_at: string | null
    paid_at: string | null
    updated_at: string | null
  }
  Insert: {
    promoter_id: string
    ticket_id: string
    commission_amount: number
    created_at?: string | null
    paid_at?: string | null
    updated_at?: string | null
  }
  Update: {
    promoter_id?: string
    ticket_id?: string
    commission_amount?: number
    created_at?: string | null
    paid_at?: string | null
    updated_at?: string | null
  }
}

interface PromoterPayoutsTable {
  Row: {
    id: string
    promoter_id: string
    amount: number
    status: string
    payout_method?: string | null
    payout_details?: Json | null
    stripe_payout_id?: string | null
    created_at: string | null
    updated_at: string | null
  }
  Insert: {
    promoter_id: string
    amount: number
    status?: string
    payout_method?: string | null
    payout_details?: Json | null
    stripe_payout_id?: string | null
    created_at?: string | null
    updated_at?: string | null
  }
  Update: {
    promoter_id?: string
    amount?: number
    status?: string
    payout_method?: string | null
    payout_details?: Json | null
    stripe_payout_id?: string | null
    created_at?: string | null
    updated_at?: string | null
  }
}

interface PromoterReferralLinksTable {
  Row: {
    id: string
    promoter_id: string
    event_id: string
    unique_code: string
    created_at: string | null
    updated_at: string | null
  }
  Insert: {
    promoter_id: string
    event_id: string
    unique_code: string
    created_at?: string | null
    updated_at?: string | null
  }
  Update: {
    promoter_id?: string
    event_id?: string
    unique_code?: string
    created_at?: string | null
    updated_at?: string | null
  }
}

interface GuestListsTable {
  Row: {
    id: string
    event_id: string
    promoter_id: string
    max_guests: number
    created_at: string | null
    updated_at: string | null
  }
  Insert: {
    event_id: string
    promoter_id: string
    max_guests: number
    created_at?: string | null
    updated_at?: string | null
  }
  Update: {
    event_id?: string
    promoter_id?: string
    max_guests?: number
    created_at?: string | null
    updated_at?: string | null
  }
}

interface GuestListEntriesTable {
  Row: {
    id: string
    guest_list_id: string
    guest_name: string
    guest_email: string
    checked_in_at: string | null
    status: string
    created_at: string | null
    updated_at: string | null
  }
  Insert: {
    guest_list_id: string
    guest_name: string
    guest_email: string
    checked_in_at?: string | null
    status?: string
    created_at?: string | null
    updated_at?: string | null
  }
  Update: {
    guest_list_id?: string
    guest_name?: string
    guest_email?: string
    checked_in_at?: string | null
    status?: string
    created_at?: string | null
    updated_at?: string | null
  }
}

interface EmailCampaignsTable {
  Row: {
    id: string
    creator_id: string
    event_id: string
    subject: string
    content: string
    status: string
    click_count: number | null
    open_count: number | null
    recipient_count: number | null
    sent_at: string | null
    created_at: string | null
    updated_at: string | null
  }
  Insert: {
    creator_id: string
    event_id: string
    subject: string
    content: string
    status?: string
    click_count?: number | null
    open_count?: number | null
    recipient_count?: number | null
    sent_at?: string | null
    created_at?: string | null
    updated_at?: string | null
  }
  Update: {
    creator_id?: string
    event_id?: string
    subject?: string
    content?: string
    status?: string
    click_count?: number | null
    open_count?: number | null
    recipient_count?: number | null
    sent_at?: string | null
    created_at?: string | null
    updated_at?: string | null
  }
}

interface EmailPreferencesTable {
  Row: {
    id: string
    profile_id: string
    event_reminders: boolean | null
    marketing_emails: boolean | null
    purchase_confirmations: boolean | null
    created_at: string | null
    updated_at: string | null
  }
  Insert: {
    profile_id: string
    event_reminders?: boolean | null
    marketing_emails?: boolean | null
    purchase_confirmations?: boolean | null
    created_at?: string | null
    updated_at?: string | null
  }
  Update: {
    profile_id?: string
    event_reminders?: boolean | null
    marketing_emails?: boolean | null
    purchase_confirmations?: boolean | null
    created_at?: string | null
    updated_at?: string | null
  }
}

interface PaymentPlansTable {
  Row: {
    id: string
    ticket_tier_id: string
    name: string
    description: string | null
    initial_payment_percentage: number
    installments: number
    created_at: string | null
    updated_at: string | null
  }
  Insert: {
    ticket_tier_id: string
    name: string
    description?: string | null
    initial_payment_percentage: number
    installments: number
    created_at?: string | null
    updated_at?: string | null
  }
  Update: {
    ticket_tier_id?: string
    name?: string
    description?: string | null
    initial_payment_percentage?: number
    installments?: number
    created_at?: string | null
    updated_at?: string | null
  }
}

interface LoyaltyTransactionsTable {
  Row: {
    id: string
    profile_id: string | null
    points: number
    description: string | null
    created_at: string | null
    transaction_type: string
  }
  Insert: {
    profile_id?: string | null
    points: number
    description?: string | null
    created_at?: string | null
    transaction_type: string
  }
  Update: {
    profile_id?: string | null
    points?: number
    description?: string | null
    created_at?: string | null
    transaction_type?: string
  }
}

interface ReferralsTable {
  Row: {
    id: string
    referrer_id: string
    referred_id: string
    status: string
    reward_points: number | null
    created_at: string | null
    updated_at: string | null
  }
  Insert: {
    referrer_id: string
    referred_id: string
    status?: string
    reward_points?: number | null
    created_at?: string | null
    updated_at?: string | null
  }
  Update: {
    referrer_id?: string
    referred_id?: string
    status?: string
    reward_points?: number | null
    created_at?: string | null
    updated_at?: string | null
  }
}

interface WaitlistEntriesTable {
  Row: {
    id: string
    event_id: string
    user_id: string
    email: string
    quantity: number
    status: string
    notification_sent: boolean | null
    created_at: string | null
    updated_at: string | null
  }
  Insert: {
    event_id: string
    user_id: string
    email: string
    quantity: number
    status?: string
    notification_sent?: boolean | null
    created_at?: string | null
    updated_at?: string | null
  }
  Update: {
    event_id?: string
    user_id?: string
    email?: string
    quantity?: number
    status?: string
    notification_sent?: boolean | null
    created_at?: string | null
    updated_at?: string | null
  }
}
