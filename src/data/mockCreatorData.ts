import { Event } from "@/types/event";

export interface Creator {
  id: string;
  full_name: string;
  avatar_url: string;
  creator_tagline: string;
  is_verified: boolean;
  verification_date: string;
  category: string;
  location: string;
  followers: string;
  rating: number;
  reviewCount: number;
  bio: string;
  banner: string;
  socialLinks: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
  };
}

export const mockCreator: Creator = {
  id: "1",
  full_name: "Rolling Loud",
  avatar_url: "/placeholder.svg",
  creator_tagline: "We Create Unforgettable Moments",
  is_verified: true,
  verification_date: new Date().toISOString(),
  category: "Music Festivals & Concerts",
  location: "Miami, FL",
  followers: "125K",
  rating: 4.8,
  reviewCount: 2456,
  bio: "Rolling Loud is the largest hip-hop festival in the world, bringing together the biggest names in rap music for an unforgettable experience.",
  banner: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3",
  socialLinks: {
    instagram: "https://instagram.com/rollingloud",
    twitter: "https://twitter.com/rollingloud",
    facebook: "https://facebook.com/rollingloud"
  }
};

export const mockEvents: Event[] = [
  {
    id: "1",
    creator_id: "1",
    title: "Rolling Loud Miami 2024",
    description: "The world's largest hip-hop festival returns to Miami",
    location: "Hard Rock Stadium, Miami Gardens, FL",
    start_date: "2024-07-19T16:00:00Z",
    end_date: "2024-07-21T04:00:00Z",
    image_url: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3",
    total_tickets: 55000,
    available_tickets: 5000,
    price: 349.99
  },
  {
    id: "2",
    creator_id: "1",
    title: "Rolling Loud California 2024",
    description: "Experience the best of hip-hop on the West Coast",
    location: "Hollywood Park Grounds, Inglewood, CA",
    start_date: "2024-03-15T17:00:00Z",
    end_date: "2024-03-17T05:00:00Z",
    image_url: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7",
    total_tickets: 45000,
    available_tickets: 2000,
    price: 329.99
  }
];