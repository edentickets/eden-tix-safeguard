export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  imageUrl: string;
  price: number;
  availableTickets: number;
  description: string;
  organizer: string;
  rating: number;
  reviews: number;
  highlights: {
    icon: string;
    title: string;
    description: string;
  }[];
}