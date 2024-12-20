import { Database } from "../database.types";

export type TicketRow = Database["public"]["Tables"]["tickets"]["Row"];
export type TicketInsert = Database["public"]["Tables"]["tickets"]["Insert"];
export type TicketUpdate = Database["public"]["Tables"]["tickets"]["Update"];