import { Database } from "../database.types";

export interface EventTypes {
  events: Database['public']['Tables']['events'];
  event_categories: Database['public']['Tables']['event_categories'];
  event_category_mappings: Database['public']['Tables']['event_category_mappings'];
  event_attendees: Database['public']['Tables']['event_attendees'];
}

export type EventRow = Database['public']['Tables']['events']['Row'];
export type EventInsert = Database['public']['Tables']['events']['Insert'];
export type EventUpdate = Database['public']['Tables']['events']['Update'];

export type EventCategoryRow = Database['public']['Tables']['event_categories']['Row'];
export type EventCategoryMappingRow = Database['public']['Tables']['event_category_mappings']['Row'];
export type EventAttendeeRow = Database['public']['Tables']['event_attendees']['Row'];