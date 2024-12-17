import { Navbar } from "@/components/Navbar";
import { ExploreHero } from "@/components/explore/ExploreHero";
import { EventGrid } from "@/components/explore/EventGrid";
import { CategorySection } from "@/components/explore/CategorySection";
import { Event } from "@/types/event";

const mockEvents: Event[] = [
  {
    id: "1",
    title: "Rolling Loud Miami 2025",
    date: "July 19-21, 2025",
    location: "Hard Rock Stadium, Miami, FL",
    imageUrl: "https://source.unsplash.com/random/800x600/?concert",
    price: 299.99,
    availableTickets: 150,
    description: "The biggest music festival of the summer featuring top artists from around the world.",
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
    title: "Art Basel Afterparty",
    date: "December 3, 2025",
    location: "Wynwood, Miami",
    imageUrl: "https://source.unsplash.com/random/800x600/?party",
    price: 149.99,
    availableTickets: 200,
    description: "The most exclusive afterparty during Art Basel Miami.",
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
    title: "Rawayana World Tour",
    date: "August 5, 2025",
    location: "FTX Arena, Miami",
    imageUrl: "https://source.unsplash.com/random/800x600/?music",
    price: 59.99,
    availableTickets: 500,
    description: "Rawayana brings their electrifying world tour to Miami.",
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