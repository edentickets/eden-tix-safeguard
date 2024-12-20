import { EventsListHeader } from "./events/EventsListHeader";
import { EventItem } from "./events/EventItem";

const events = [
  {
    id: "123e4567-e89b-12d3-a456-426614174000",
    name: "Rolling Loud Miami 2025",
    date: "July 19-21, 2025",
    venue: "Hard Rock Stadium, Miami",
    ticketsSold: 8500,
    totalTickets: 10000,
    revenue: 2550000,
  },
  {
    id: "987fcdeb-51a2-43d7-9b56-254415174000",
    name: "Art Basel Afterparty",
    date: "Dec 3, 2025",
    venue: "Wynwood Art District",
    ticketsSold: 1200,
    totalTickets: 1500,
    revenue: 180000,
  },
];

export function EventsList() {
  return (
    <div>
      <EventsListHeader />
      <div className="space-y-4">
        {events.map((event, index) => (
          <EventItem 
            key={event.id} 
            event={event} 
            index={index} 
          />
        ))}
      </div>
    </div>
  );
}