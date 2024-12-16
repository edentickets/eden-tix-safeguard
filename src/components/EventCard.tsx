import { Card } from "@/components/ui/card";
import { Event } from "@/types/event";
import { Link } from "react-router-dom";

export const EventCard = ({ event }: { event: Event }) => {
  return (
    <Link to={`/event/${event.id}`}>
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
        <div className="aspect-video relative overflow-hidden">
          <img
            src={event.imageUrl}
            alt={event.title}
            className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-eden-primary truncate">
            {event.title}
          </h3>
          <p className="text-sm text-gray-600 mt-1">{event.date}</p>
          <p className="text-sm text-gray-600">{event.location}</p>
          <div className="mt-2 flex justify-between items-center">
            <span className="text-lg font-bold text-eden-primary">
              ${event.price}
            </span>
            <span className="text-sm text-gray-500">
              {event.availableTickets} tickets left
            </span>
          </div>
        </div>
      </Card>
    </Link>
  );
};