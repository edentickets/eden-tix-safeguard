import { Database } from "../database.types";
import { ProfileRow } from "./profiles.types";
import { TicketRow } from "./tickets.types";

export type EventAttendeeRow = Database["public"]["Tables"]["event_attendees"]["Row"];
export type EventAttendeeInsert = Database["public"]["Tables"]["event_attendees"]["Insert"];
export type EventAttendeeUpdate = Database["public"]["Tables"]["event_attendees"]["Update"];

export interface EventAttendee extends EventAttendeeRow {
  profile?: ProfileRow;
  ticket?: TicketRow;
}