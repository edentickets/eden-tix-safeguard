import { useParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { EventHero } from "@/components/event/EventHero";
import { TicketTiers } from "@/components/event/TicketTiers";
import { EventHighlights } from "@/components/event/EventHighlights";
import { EventCTA } from "@/components/event/EventCTA";
import { Event } from "@/types/event";

const mockEvents: Event[] = [
  {
    id: "1",
    title: "Rolling Loud Miami 2025",
    date: "July 19-21, 2025",
    location: "Hard Rock Stadium, Miami, FL",
    imageUrl: "https://source.unsplash.com/random/1920x1080/?concert",
    price: 299,
    availableTickets: 150,
    description: "The biggest hip-hop festival featuring today's hottest artists.",
    organizer: "Rolling Loud Events",
    rating: 4.8,
    reviews: 2347,
    highlights: [
      {
        icon: "🔥",
        title: "World-Class Lineup",
        description: "Catch performances from today's hottest artists",
      },
      {
        icon: "🎧",
        title: "Immersive Experience",
        description: "Cutting-edge sound, lighting, and stage design",
      },
      {
        icon: "🍹",
        title: "Premium Add-Ons",
        description: "Exclusive lounges, free drinks, and artist meet-ups",
      },
      {
        icon: "📍",
        title: "Iconic Venue",
        description: "Experience music under the Miami skyline",
      },
    ],
  },
  {
    id: "2",
    title: "Tech Conference 2024",
    date: "August 20, 2024",
    location: "Convention Center, SF",
    imageUrl: "https://source.unsplash.com/random/800x600/?technology",
    price: 299.99,
    availableTickets: 75,
    description: "Join industry leaders for a day of innovation and networking.",
    organizer: "TechCon Events",
    rating: 4.9,
    reviews: 850,
    highlights: [
      {
        icon: "💻",
        title: "Expert Talks",
        description: "Keynotes from industry leaders"
      },
      {
        icon: "🤝",
        title: "Networking",
        description: "Dedicated networking sessions"
      },
      {
        icon: "🚀",
        title: "Innovation Hub",
        description: "Latest tech demos and exhibitions"
      }
    ]
  },
  {
    id: "3",
    title: "Food & Wine Festival",
    date: "September 5, 2024",
    location: "Waterfront Park, Miami",
    imageUrl: "https://source.unsplash.com/random/800x600/?food",
    price: 149.99,
    availableTickets: 200,
    description: "Experience the finest cuisine and wines from renowned chefs.",
    organizer: "Culinary Arts Society",
    rating: 4.7,
    reviews: 975,
    highlights: [
      {
        icon: "👨‍🍳",
        title: "Chef Demonstrations",
        description: "Live cooking shows by top chefs"
      },
      {
        icon: "🍷",
        title: "Wine Tasting",
        description: "Premium wine sampling sessions"
      },
      {
        icon: "🌟",
        title: "VIP Experience",
        description: "Exclusive dining experiences"
      }
    ]
  },
];

const EventDetails = () => {
  const { id } = useParams();
  const event = mockEvents.find((e) => e.id === id);

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <div className="min-h-screen bg-eden-dark">
      <Navbar />
      <EventHero event={event} />
      <TicketTiers />
      <EventHighlights event={event} />
      <EventCTA eventTitle={event.title} />
    </div>
  );
};

export default EventDetails;
