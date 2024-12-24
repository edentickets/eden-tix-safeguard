import { Database } from '../database.types';

export type EventRow = Database['public']['Tables']['events']['Row'];
export type EventInsert = Database['public']['Tables']['events']['Insert'];
export type EventUpdate = Database['public']['Tables']['events']['Update'];

export type EventCategoryRow = Database['public']['Tables']['event_categories']['Row'];
export type EventCategoryInsert = Database['public']['Tables']['event_categories']['Insert'];
export type EventCategoryUpdate = Database['public']['Tables']['event_categories']['Update'];

export type EventCategoryMappingRow = Database['public']['Tables']['event_category_mappings']['Row'];
export type EventAttendeesRow = Database['public']['Tables']['event_attendees']['Row'];