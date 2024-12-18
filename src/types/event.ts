export interface Event {
  id: string;
  creator_id: string;
  title: string;
  description?: string;
  location: string;
  start_date: string;
  end_date: string;
  image_url?: string;
  total_tickets: number;
  available_tickets: number;
  price: number;
  created_at?: string;
  updated_at?: string;
  rating?: number;
  reviews?: number;
}