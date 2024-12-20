import { EventCard } from "./EventCard";

const events = [
  {
    id: 1,
    title: "Summer Music Festival 2024",
    date: "Aug 15-17, 2024",
    location: "Central Park, NY",
    status: "On Sale",
    soldTickets: 2500,
    totalTickets: 5000,
    revenue: 125000,
  },
  {
    id: 2,
    title: "Tech Conference 2024",
    date: "Sep 5-7, 2024",
    location: "Convention Center, SF",
    status: "Draft",
    soldTickets: 0,
    totalTickets: 1000,
    revenue: 0,
  },
  {
    id: 3,
    title: "New Year's Eve Party",
    date: "Dec 31, 2024",
    location: "Grand Hotel, Miami",
    status: "Scheduled",
    soldTickets: 150,
    totalTickets: 500,
    revenue: 15000,
  },
];

export function EventsList() {
  return (
    <div className="grid gap-4">
      {events.map((event, index) => (
        <EventCard key={event.id} event={event} index={index} />
      ))}
    </div>
  );
}