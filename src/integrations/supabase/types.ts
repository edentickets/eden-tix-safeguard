export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      email_campaigns: {
        Row: {
          click_count: number | null
          content: string
          created_at: string | null
          creator_id: string
          event_id: string
          id: string
          open_count: number | null
          recipient_count: number | null
          sent_at: string | null
          status: string
          subject: string
          updated_at: string | null
        }
        Insert: {
          click_count?: number | null
          content: string
          created_at?: string | null
          creator_id: string
          event_id: string
          id?: string
          open_count?: number | null
          recipient_count?: number | null
          sent_at?: string | null
          status?: string
          subject: string
          updated_at?: string | null
        }
        Update: {
          click_count?: number | null
          content?: string
          created_at?: string | null
          creator_id?: string
          event_id?: string
          id?: string
          open_count?: number | null
          recipient_count?: number | null
          sent_at?: string | null
          status?: string
          subject?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "email_campaigns_creator_id_fkey"
            columns: ["creator_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "email_campaigns_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
        ]
      }
      event_attendees: {
        Row: {
          created_at: string | null
          event_id: string
          id: string
          profile_id: string
          status: string
          ticket_id: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          event_id: string
          id?: string
          profile_id: string
          status?: string
          ticket_id?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          event_id?: string
          id?: string
          profile_id?: string
          status?: string
          ticket_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "event_attendees_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "event_attendees_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "event_attendees_ticket_id_fkey"
            columns: ["ticket_id"]
            isOneToOne: false
            referencedRelation: "tickets"
            referencedColumns: ["id"]
          },
        ]
      }
      event_categories: {
        Row: {
          created_at: string | null
          description: string | null
          id: string
          name: string
          slug: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: string
          name: string
          slug: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          name?: string
          slug?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      event_category_mappings: {
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
        Relationships: [
          {
            foreignKeyName: "event_category_mappings_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "event_categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "event_category_mappings_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
        ]
      }
      events: {
        Row: {
          available_tickets: number
          background_color: string | null
          created_at: string | null
          creator_id: string | null
          description: string | null
          end_date: string
          heading_color: string | null
          id: string
          image_url: string | null
          location: string
          price: number
          primary_color: string | null
          promo_banner_url: string | null
          secondary_color: string | null
          start_date: string
          text_color: string | null
          title: string
          total_tickets: number
          updated_at: string | null
        }
        Insert: {
          available_tickets: number
          background_color?: string | null
          created_at?: string | null
          creator_id?: string | null
          description?: string | null
          end_date: string
          heading_color?: string | null
          id?: string
          image_url?: string | null
          location: string
          price: number
          primary_color?: string | null
          promo_banner_url?: string | null
          secondary_color?: string | null
          start_date: string
          text_color?: string | null
          title: string
          total_tickets: number
          updated_at?: string | null
        }
        Update: {
          available_tickets?: number
          background_color?: string | null
          created_at?: string | null
          creator_id?: string | null
          description?: string | null
          end_date?: string
          heading_color?: string | null
          id?: string
          image_url?: string | null
          location?: string
          price?: number
          primary_color?: string | null
          promo_banner_url?: string | null
          secondary_color?: string | null
          start_date?: string
          text_color?: string | null
          title?: string
          total_tickets?: number
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "events_creator_id_fkey"
            columns: ["creator_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      guest_list_entries: {
        Row: {
          checked_in_at: string | null
          created_at: string | null
          guest_email: string
          guest_list_id: string
          guest_name: string
          id: string
          status: string
          updated_at: string | null
        }
        Insert: {
          checked_in_at?: string | null
          created_at?: string | null
          guest_email: string
          guest_list_id: string
          guest_name: string
          id?: string
          status?: string
          updated_at?: string | null
        }
        Update: {
          checked_in_at?: string | null
          created_at?: string | null
          guest_email?: string
          guest_list_id?: string
          guest_name?: string
          id?: string
          status?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "guest_list_entries_guest_list_id_fkey"
            columns: ["guest_list_id"]
            isOneToOne: false
            referencedRelation: "guest_lists"
            referencedColumns: ["id"]
          },
        ]
      }
      guest_lists: {
        Row: {
          created_at: string | null
          event_id: string
          id: string
          max_guests: number
          promoter_id: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          event_id: string
          id?: string
          max_guests?: number
          promoter_id: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          event_id?: string
          id?: string
          max_guests?: number
          promoter_id?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "guest_lists_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "guest_lists_promoter_id_fkey"
            columns: ["promoter_id"]
            isOneToOne: false
            referencedRelation: "promoters"
            referencedColumns: ["id"]
          },
        ]
      }
      loyalty_transactions: {
        Row: {
          created_at: string | null
          description: string | null
          id: string
          points: number
          profile_id: string | null
          transaction_type: string
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: string
          points: number
          profile_id?: string | null
          transaction_type: string
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          points?: number
          profile_id?: string | null
          transaction_type?: string
        }
        Relationships: [
          {
            foreignKeyName: "loyalty_transactions_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      messages: {
        Row: {
          created_at: string | null
          event_title: string
          from_user_id: string | null
          id: string
          message: string
          to_user_id: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          event_title: string
          from_user_id?: string | null
          id?: string
          message: string
          to_user_id?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          event_title?: string
          from_user_id?: string | null
          id?: string
          message?: string
          to_user_id?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      payment_plans: {
        Row: {
          created_at: string | null
          description: string | null
          id: string
          initial_payment_percentage: number
          installments: number
          name: string
          ticket_tier_id: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: string
          initial_payment_percentage?: number
          installments?: number
          name: string
          ticket_tier_id: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          initial_payment_percentage?: number
          installments?: number
          name?: string
          ticket_tier_id?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "payment_plans_ticket_tier_id_fkey"
            columns: ["ticket_tier_id"]
            isOneToOne: false
            referencedRelation: "ticket_tiers"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string | null
          creator_bio: string | null
          creator_tagline: string | null
          full_name: string | null
          id: string
          is_creator: boolean | null
          is_verified: boolean | null
          loyalty_points: number | null
          onboarding_completed: boolean | null
          social_links: Json | null
          updated_at: string | null
          username: string | null
          verification_date: string | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string | null
          creator_bio?: string | null
          creator_tagline?: string | null
          full_name?: string | null
          id: string
          is_creator?: boolean | null
          is_verified?: boolean | null
          loyalty_points?: number | null
          onboarding_completed?: boolean | null
          social_links?: Json | null
          updated_at?: string | null
          username?: string | null
          verification_date?: string | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string | null
          creator_bio?: string | null
          creator_tagline?: string | null
          full_name?: string | null
          id?: string
          is_creator?: boolean | null
          is_verified?: boolean | null
          loyalty_points?: number | null
          onboarding_completed?: boolean | null
          social_links?: Json | null
          updated_at?: string | null
          username?: string | null
          verification_date?: string | null
        }
        Relationships: []
      }
      promoter_payouts: {
        Row: {
          amount: number
          created_at: string | null
          id: string
          payout_details: Json | null
          payout_method: string | null
          promoter_id: string
          status: string
          stripe_payout_id: string | null
          updated_at: string | null
        }
        Insert: {
          amount: number
          created_at?: string | null
          id?: string
          payout_details?: Json | null
          payout_method?: string | null
          promoter_id: string
          status?: string
          stripe_payout_id?: string | null
          updated_at?: string | null
        }
        Update: {
          amount?: number
          created_at?: string | null
          id?: string
          payout_details?: Json | null
          payout_method?: string | null
          promoter_id?: string
          status?: string
          stripe_payout_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "promoter_payouts_promoter_id_fkey"
            columns: ["promoter_id"]
            isOneToOne: false
            referencedRelation: "promoters"
            referencedColumns: ["id"]
          },
        ]
      }
      promoter_referral_links: {
        Row: {
          created_at: string | null
          event_id: string
          id: string
          promoter_id: string
          unique_code: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          event_id: string
          id?: string
          promoter_id: string
          unique_code: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          event_id?: string
          id?: string
          promoter_id?: string
          unique_code?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "promoter_referral_links_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "promoter_referral_links_promoter_id_fkey"
            columns: ["promoter_id"]
            isOneToOne: false
            referencedRelation: "promoters"
            referencedColumns: ["id"]
          },
        ]
      }
      promoter_sales: {
        Row: {
          commission_amount: number
          created_at: string | null
          id: string
          paid_at: string | null
          promoter_id: string
          ticket_id: string
          updated_at: string | null
        }
        Insert: {
          commission_amount: number
          created_at?: string | null
          id?: string
          paid_at?: string | null
          promoter_id: string
          ticket_id: string
          updated_at?: string | null
        }
        Update: {
          commission_amount?: number
          created_at?: string | null
          id?: string
          paid_at?: string | null
          promoter_id?: string
          ticket_id?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "promoter_sales_promoter_id_fkey"
            columns: ["promoter_id"]
            isOneToOne: false
            referencedRelation: "promoters"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "promoter_sales_ticket_id_fkey"
            columns: ["ticket_id"]
            isOneToOne: false
            referencedRelation: "tickets"
            referencedColumns: ["id"]
          },
        ]
      }
      promoters: {
        Row: {
          commission_rate: number
          created_at: string | null
          creator_id: string
          id: string
          profile_id: string
          updated_at: string | null
        }
        Insert: {
          commission_rate?: number
          created_at?: string | null
          creator_id: string
          id?: string
          profile_id: string
          updated_at?: string | null
        }
        Update: {
          commission_rate?: number
          created_at?: string | null
          creator_id?: string
          id?: string
          profile_id?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "promoters_creator_id_fkey"
            columns: ["creator_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "promoters_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      referrals: {
        Row: {
          created_at: string | null
          id: string
          referred_id: string
          referrer_id: string
          reward_points: number | null
          status: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          referred_id: string
          referrer_id: string
          reward_points?: number | null
          status?: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          referred_id?: string
          referrer_id?: string
          reward_points?: number | null
          status?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "referrals_referred_id_fkey"
            columns: ["referred_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "referrals_referrer_id_fkey"
            columns: ["referrer_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      ticket_tiers: {
        Row: {
          available_tickets: number
          created_at: string | null
          description: string | null
          event_id: string
          group_discount_percentage: number | null
          group_discount_threshold: number | null
          id: string
          price: number
          title: string
          total_tickets: number
          updated_at: string | null
        }
        Insert: {
          available_tickets: number
          created_at?: string | null
          description?: string | null
          event_id: string
          group_discount_percentage?: number | null
          group_discount_threshold?: number | null
          id?: string
          price: number
          title: string
          total_tickets: number
          updated_at?: string | null
        }
        Update: {
          available_tickets?: number
          created_at?: string | null
          description?: string | null
          event_id?: string
          group_discount_percentage?: number | null
          group_discount_threshold?: number | null
          id?: string
          price?: number
          title?: string
          total_tickets?: number
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "ticket_tiers_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
        ]
      }
      ticket_transfers: {
        Row: {
          created_at: string | null
          from_user_id: string | null
          id: string
          price: number | null
          ticket_id: string | null
          to_user_id: string | null
          transfer_type: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          from_user_id?: string | null
          id?: string
          price?: number | null
          ticket_id?: string | null
          to_user_id?: string | null
          transfer_type: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          from_user_id?: string | null
          id?: string
          price?: number | null
          ticket_id?: string | null
          to_user_id?: string | null
          transfer_type?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "ticket_transfers_from_user_id_fkey"
            columns: ["from_user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ticket_transfers_ticket_id_fkey"
            columns: ["ticket_id"]
            isOneToOne: false
            referencedRelation: "tickets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ticket_transfers_to_user_id_fkey"
            columns: ["to_user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      tickets: {
        Row: {
          created_at: string | null
          current_qr_code: string | null
          event_id: string | null
          gift_message: string | null
          gift_recipient_email: string | null
          gift_sent_at: string | null
          id: string
          is_gift: boolean | null
          last_checked_in_at: string | null
          owner_id: string | null
          payment_intent_id: string | null
          payment_method: string | null
          payment_status: string | null
          purchase_price: number
          qr_code: string | null
          qr_code_updated_at: string | null
          resale_enabled: boolean | null
          resale_price: number | null
          status: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          current_qr_code?: string | null
          event_id?: string | null
          gift_message?: string | null
          gift_recipient_email?: string | null
          gift_sent_at?: string | null
          id?: string
          is_gift?: boolean | null
          last_checked_in_at?: string | null
          owner_id?: string | null
          payment_intent_id?: string | null
          payment_method?: string | null
          payment_status?: string | null
          purchase_price: number
          qr_code?: string | null
          qr_code_updated_at?: string | null
          resale_enabled?: boolean | null
          resale_price?: number | null
          status: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          current_qr_code?: string | null
          event_id?: string | null
          gift_message?: string | null
          gift_recipient_email?: string | null
          gift_sent_at?: string | null
          id?: string
          is_gift?: boolean | null
          last_checked_in_at?: string | null
          owner_id?: string | null
          payment_intent_id?: string | null
          payment_method?: string | null
          payment_status?: string | null
          purchase_price?: number
          qr_code?: string | null
          qr_code_updated_at?: string | null
          resale_enabled?: boolean | null
          resale_price?: number | null
          status?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "tickets_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tickets_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      waitlist_entries: {
        Row: {
          created_at: string | null
          email: string
          event_id: string
          id: string
          notification_sent: boolean | null
          quantity: number
          status: string
          ticket_tier_id: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          email: string
          event_id: string
          id?: string
          notification_sent?: boolean | null
          quantity?: number
          status?: string
          ticket_tier_id: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          email?: string
          event_id?: string
          id?: string
          notification_sent?: boolean | null
          quantity?: number
          status?: string
          ticket_tier_id?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "waitlist_entries_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "waitlist_entries_ticket_tier_id_fkey"
            columns: ["ticket_tier_id"]
            isOneToOne: false
            referencedRelation: "ticket_tiers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "waitlist_entries_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      decrement: {
        Args: {
          x: number
        }
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

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
