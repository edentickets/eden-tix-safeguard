import { Database } from "../database.types";

export type TicketRow = Database["public"]["Tables"]["tickets"]["Row"];
export type TicketInsert = Database["public"]["Tables"]["tickets"]["Insert"];
export type TicketUpdate = Database["public"]["Tables"]["tickets"]["Update"];

export type TicketTierRow = Database["public"]["Tables"]["ticket_tiers"]["Row"];
export type TicketTierInsert = Database["public"]["Tables"]["ticket_tiers"]["Insert"];
export type TicketTierUpdate = Database["public"]["Tables"]["ticket_tiers"]["Update"];

export type TicketTransferRow = Database["public"]["Tables"]["ticket_transfers"]["Row"];

export interface TicketTypes {
  tickets: {
    Row: TicketRow;
    Insert: TicketInsert;
    Update: TicketUpdate;
  };
  ticket_tiers: {
    Row: TicketTierRow;
    Insert: TicketTierInsert;
    Update: TicketTierUpdate;
  };
  ticket_transfers: {
    Row: TicketTransferRow;
  };
}