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
    creator_id: "1",
    title: "Rolling Loud Miami 2025",
    description: "The biggest hip-hop festival featuring today's hottest artists.",
    location: "Hard Rock Stadium, Miami, FL",
    start_date: "2025-07-19T00:00:00Z",
    end_date: "2025-07-21T00:00:00Z",
    image_url: "https://source.unsplash.com/random/1920x1080/?concert",
    total_tickets: 5000,
    available_tickets: 150,
    price: 299,
    organizer: "Rolling Loud Events",
    rating: 4.8,
    reviews: 2347,
    highlights: [
      {
        icon: "🔥",
        title: "World-Class Lineup",
        description: "Catch performances from today's hottest artists"
      },
      {
        icon: "🎧",
        title: "Immersive Experience",
        description: "Cutting-edge sound, lighting, and stage design"
      },
      {
        icon: "🍹",
        title: "Premium Add-Ons",
        description: "Exclusive lounges, free drinks, and artist meet-ups"
      },
      {
        icon: "📍",
        title: "Iconic Venue",
        description: "Experience music under the Miami skyline"
      }
    ]
  }
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