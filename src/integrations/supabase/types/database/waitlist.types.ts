import { Database } from "../database.types";

export type WaitlistEntryRow = Database["public"]["Tables"]["waitlist_entries"]["Row"];

export interface WaitlistTypes {
  waitlist_entries: {
    Row: WaitlistEntryRow;
  };
}