import { Navbar } from "@/components/Navbar";
import { ExploreHero } from "@/components/explore/ExploreHero";
import { EventGrid } from "@/components/explore/EventGrid";
import { CategorySection } from "@/components/explore/CategorySection";
import { Event } from "@/types/event";

const mockEvents: Event[] = [
  {
    id: "1",
    creator_id: "1",
    title: "Rolling Loud Miami 2025",
    description: "The biggest music festival of the summer featuring top artists from around the world.",
    location: "Hard Rock Stadium, Miami, FL",
    start_date: "2025-07-19T00:00:00Z",
    end_date: "2025-07-21T00:00:00Z",
    image_url: "https://source.unsplash.com/random/800x600/?concert",
    total_tickets: 1000,
    available_tickets: 150,
    price: 299.99,
    organizer: "Rolling Loud Events",
    rating: 4.8,
    reviews: 2347,
    highlights: [
      {
        icon: "🎵",
        title: "World-Class Lineup",
        description: "Multiple stages with continuous live music"
      },
      {
        icon: "🎪",
        title: "Festival Activities",
        description: "Interactive art installations and workshops"
      }
    ]
  },
  {
    id: "2",
    creator_id: "1",
    title: "Art Basel Afterparty",
    description: "The most exclusive afterparty during Art Basel Miami.",
    location: "Wynwood, Miami",
    start_date: "2025-12-03T20:00:00Z",
    end_date: "2025-12-04T04:00:00Z",
    image_url: "https://source.unsplash.com/random/800x600/?party",
    total_tickets: 500,
    available_tickets: 200,
    price: 149.99,
    organizer: "Miami Art Collective",
    rating: 4.9,
    reviews: 856,
    highlights: [
      {
        icon: "🎨",
        title: "Art Exhibitions",
        description: "Exclusive art showcases"
      },
      {
        icon: "🍷",
        title: "Premium Experience",
        description: "Open bar and catering"
      }
    ]
  },
  {
    id: "3",
    creator_id: "1",
    title: "Rawayana World Tour",
    description: "Rawayana brings their electrifying world tour to Miami.",
    location: "FTX Arena, Miami",
    start_date: "2025-08-05T19:00:00Z",
    end_date: "2025-08-05T23:00:00Z",
    image_url: "https://source.unsplash.com/random/800x600/?music",
    total_tickets: 2000,
    available_tickets: 500,
    price: 59.99,
    organizer: "Live Nation",
    rating: 4.7,
    reviews: 1243,
    highlights: [
      {
        icon: "🎸",
        title: "Live Performance",
        description: "Full band with special guests"
      },
      {
        icon: "🎉",
        title: "Meet & Greet",
        description: "VIP ticket holders only"
      }
    ]
  }
];

const Explore = () => {
  return (
    <div className="min-h-screen bg-eden-dark">
      <Navbar />
      <ExploreHero />
      <EventGrid title="Trending Now" events={mockEvents} />
      <CategorySection />
      <EventGrid title="Happening Near You" events={mockEvents} />
    </div>
  );
};

export default Explore;