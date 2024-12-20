import { Card } from "@/components/ui/card";
import { Event } from "@/types/event";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import { formatDate } from "@/utils/date-utils";

export const EventCard = ({ event }: { event: Event }) => {
  return (
    <Link to={`/event/${event.id}`}>
      <Card className="glass-card overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] touch-pan-y">
        <div className="aspect-video relative overflow-hidden">
          <img
            src={event.image_url}
            alt={event.title}
            className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-eden-dark/80 to-transparent" />
        </div>
        <div className="p-4">
          <h3 className="text-base sm:text-lg font-semibold text-white truncate">
            {event.title}
          </h3>
          <p className="text-xs sm:text-sm text-gray-300 mt-1">
            {formatDate(event.start_date)}
          </p>
          <p className="text-xs sm:text-sm text-gray-300">{event.location}</p>
          
          {event.rating && event.reviews && (
            <div className="flex items-center gap-1 mt-2">
              <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-eden-secondary text-eden-secondary" />
              <span className="text-eden-secondary font-medium text-xs sm:text-sm">
                {event.rating}
              </span>
              <span className="text-gray-400 text-xs sm:text-sm">
                ({event.reviews} reviews)
              </span>
            </div>
          )}

          <div className="mt-2 flex justify-between items-center">
            <span className="text-base sm:text-lg font-bold text-eden-secondary">
              ${event.price}
            </span>
            <span className="text-xs sm:text-sm text-eden-accent">
              {event.available_tickets} tickets left
            </span>
          </div>
        </div>
      </Card>
    </Link>
  );
}