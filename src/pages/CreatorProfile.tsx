import { CreatorHeader } from "@/components/creator/CreatorHeader";
import { CreatorBio } from "@/components/creator/CreatorBio";
import { EventGrid } from "@/components/explore/EventGrid";
import { Event } from "@/types/event";

interface Creator {
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

const CreatorProfile = () => {
  // Mock creator data
  const creator: Creator = {
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
    reviewCount: 1250,
    bio: "Since 2015, we've been curating the biggest hip-hop festivals worldwide. Join us for an unforgettable experience with the hottest artists in the game.",
    banner: "/placeholder.svg",
    socialLinks: {
      instagram: "https://instagram.com/rollingloud",
      facebook: "https://facebook.com/rollingloud",
      twitter: "https://twitter.com/rollingloud"
    }
  };

  // Mock events data
  const events: Event[] = [
    {
      id: "1",
      creator_id: "1",
      title: "Rolling Loud Miami 2024",
      description: "The world's largest hip-hop festival returns to Miami",
      location: "Hard Rock Stadium, Miami Gardens",
      start_date: "2024-07-23T00:00:00Z",
      end_date: "2024-07-25T00:00:00Z",
      image_url: "/placeholder.svg",
      total_tickets: 5000,
      available_tickets: 2500,
      price: 349,
      organizer: "Rolling Loud",
      rating: 4.9,
      reviews: 856,
      highlights: [
        {
          icon: "music",
          title: "Live Performances",
          description: "Over 100 artists across 3 days"
        },
        {
          icon: "star",
          title: "VIP Experience",
          description: "Exclusive backstage access and premium viewing areas"
        },
        {
          icon: "food",
          title: "Food & Drinks",
          description: "Curated selection of local and international cuisine"
        }
      ]
    },
    {
      id: "2",
      creator_id: "1",
      title: "Rolling Loud California 2024",
      description: "Three days of non-stop hip-hop in Los Angeles",
      location: "Hollywood Park Grounds",
      start_date: "2024-03-15T00:00:00Z",
      end_date: "2024-03-17T00:00:00Z",
      image_url: "/placeholder.svg",
      total_tickets: 4000,
      available_tickets: 1800,
      price: 329,
      organizer: "Rolling Loud",
      rating: 4.8,
      reviews: 654,
      highlights: [
        {
          icon: "music",
          title: "West Coast Lineup",
          description: "Featuring the best of West Coast hip-hop"
        },
        {
          icon: "star",
          title: "Premium Experience",
          description: "Enhanced sound system and stage production"
        },
        {
          icon: "food",
          title: "LA Food Scene",
          description: "Best local food trucks and vendors"
        }
      ]
    },
    {
      id: "3",
      creator_id: "1",
      title: "Rolling Loud New York 2024",
      description: "The biggest hip-hop festival comes to the Big Apple",
      location: "Citi Field, Queens",
      start_date: "2024-09-20T00:00:00Z",
      end_date: "2024-09-22T00:00:00Z",
      image_url: "/placeholder.svg",
      total_tickets: 4500,
      available_tickets: 2000,
      price: 359,
      organizer: "Rolling Loud",
      rating: 4.7,
      reviews: 423,
      highlights: [
        {
          icon: "music",
          title: "East Coast Energy",
          description: "Showcasing New York's finest artists"
        },
        {
          icon: "star",
          title: "City Views",
          description: "Spectacular NYC skyline backdrop"
        },
        {
          icon: "food",
          title: "NYC Flavors",
          description: "Featuring iconic New York food vendors"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-eden-dark">
      {/* Hero Section */}
      <div className="relative h-[300px] lg:h-[400px]">
        <div 
          className="absolute inset-0 bg-gradient-secondary/30"
          style={{
            backgroundImage: `url(${creator.banner})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-eden-dark via-eden-dark/80 to-transparent" />
      </div>

      {/* Profile Content */}
      <div className="container relative -mt-32 z-10">
        <div className="space-y-8">
          <CreatorHeader creator={creator} />
          <CreatorBio bio={creator.bio} socialLinks={creator.socialLinks} />
          
          {/* Events Section */}
          <div className="mt-12">
            <EventGrid 
              title="Upcoming Events" 
              events={events}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorProfile;