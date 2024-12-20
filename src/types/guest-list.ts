export interface GuestListEntry {
  id: string;
  guest_list_id: string;
  guest_name: string;
  guest_email: string;
  status: 'pending' | 'approved' | 'checked_in';
  checked_in_at?: string;
  created_at?: string;
  updated_at?: string;
}

export interface GuestList {
  id: string;
  event_id: string;
  promoter_id: string;
  max_guests: number;
  created_at?: string;
  updated_at?: string;
  entries?: GuestListEntry[];
}