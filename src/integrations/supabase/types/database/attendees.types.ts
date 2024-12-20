import { Database } from "../database.types";

export type EventAttendeeRow = Database["public"]["Tables"]["event_attendees"]["Row"];
export type EventAttendeeInsert = Database["public"]["Tables"]["event_attendees"]["Insert"];
export type EventAttendeeUpdate = Database["public"]["Tables"]["event_attendees"]["Update"];

export interface EventAttendee extends EventAttendeeRow {
  profile?: Profile;
  ticket?: Ticket;
}