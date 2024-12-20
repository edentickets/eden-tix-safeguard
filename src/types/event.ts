export interface Event {
  id: string;
  creator_id: string;
  title: string;
  description?: string;
  location: string;
  start_date: string;
  end_date: string;
  image_url?: string;
  promo_banner_url?: string;
  total_tickets: number;
  available_tickets: number;
  price: number;
  created_at?: string;
  updated_at?: string;
  rating?: number;
  reviews?: number;
  organizer?: string;
  ticket_tiers?: Array<{
    id: string;
    title: string;
    description?: string;
    price: number;
    total_tickets: number;
    available_tickets: number;
  }>;
  highlights?: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
}

// Helper function to format dates for display
export const formatEventDate = (start_date: string, end_date: string): string => {
  const startDate = new Date(start_date);
  const endDate = new Date(end_date);
  
  const formatOptions: Intl.DateTimeFormatOptions = { 
    month: 'long', 
    day: 'numeric', 
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  };
  
  if (startDate.toDateString() === endDate.toDateString()) {
    return startDate.toLocaleDateString('en-US', formatOptions);
  }
  
  return `${startDate.toLocaleDateString('en-US', formatOptions)} - ${endDate.toLocaleDateString('en-US', formatOptions)}`;
};