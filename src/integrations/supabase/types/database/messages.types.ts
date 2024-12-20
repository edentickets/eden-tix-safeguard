export interface Message {
  id: string;
  from_user_id: string | null;
  to_user_id: string | null;
  event_title: string;
  message: string;
  created_at: string | null;
  updated_at: string | null;
}