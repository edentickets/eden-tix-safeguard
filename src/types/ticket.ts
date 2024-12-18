export interface Ticket {
  id: string;
  event_id: string;
  owner_id: string;
  status: 'active' | 'used' | 'expired' | 'cancelled';
  purchase_price: number;
  created_at?: string;
  updated_at?: string;
  current_qr_code?: string;
  qr_code_updated_at?: string;
  last_checked_in_at?: string;
}