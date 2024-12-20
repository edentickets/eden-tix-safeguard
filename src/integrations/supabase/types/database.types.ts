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
      events: {
        Row: {
          available_tickets: number
          created_at: string | null
          creator_id: string | null
          description: string | null
          end_date: string
          id: string
          image_url: string | null
          promo_banner_url: string | null
          location: string
          price: number
          start_date: string
          title: string
          total_tickets: number
          updated_at: string | null
        }
        Insert: {
          available_tickets: number
          created_at?: string | null
          creator_id?: string | null
          description?: string | null
          end_date: string
          id?: string
          image_url?: string | null
          promo_banner_url?: string | null
          location: string
          price: number
          start_date: string
          title: string
          total_tickets: number
          updated_at?: string | null
        }
        Update: {
          available_tickets?: number
          created_at?: string | null
          creator_id?: string | null
          description?: string | null
          end_date?: string
          id?: string
          image_url?: string | null
          promo_banner_url?: string | null
          location?: string
          price?: number
          start_date?: string
          title?: string
          total_tickets?: number
          updated_at?: string | null
        }
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
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string | null
          creator_bio: string | null
          creator_tagline: string | null
          full_name: string | null
          id: string
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
          id: string
          is_creator?: boolean | null
          social_links?: Json | null
          updated_at?: string | null
          username?: string | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string | null
          creator_bio?: string | null
          creator_tagline?: string | null
          full_name?: string | null
          id?: string
          is_creator?: boolean | null
          social_links?: Json | null
          updated_at?: string | null
          username?: string | null
        }
        Relationships: []
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
      ticket_tiers: {
        Row: {
          available_tickets: number
          created_at: string | null
          description: string | null
          event_id: string
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
      tickets: {
        Row: {
          created_at: string | null
          current_qr_code: string | null
          event_id: string | null
          id: string
          last_checked_in_at: string | null
          owner_id: string | null
          purchase_price: number
          qr_code: string | null
          qr_code_updated_at: string | null
          status: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          current_qr_code?: string | null
          event_id?: string | null
          id?: string
          last_checked_in_at?: string | null
          owner_id?: string | null
          purchase_price: number
          qr_code?: string | null
          qr_code_updated_at?: string | null
          status: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          current_qr_code?: string | null
          event_id?: string | null
          id?: string
          last_checked_in_at?: string | null
          owner_id?: string | null
          purchase_price?: number
          qr_code?: string | null
          qr_code_updated_at?: string | null
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
