import { Database } from '../database.types';

export type TicketRow = Database['public']['Tables']['tickets']['Row'];
export type TicketInsert = Database['public']['Tables']['tickets']['Insert'];
export type TicketUpdate = Database['public']['Tables']['tickets']['Update'];

export type TicketTierRow = Database['public']['Tables']['ticket_tiers']['Row'];
export type TicketTransferRow = Database['public']['Tables']['ticket_transfers']['Row'];
export type WaitlistEntryRow = Database['public']['Tables']['waitlist_entries']['Row'];