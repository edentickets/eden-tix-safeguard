import { Button } from "@/components/ui/button";
import { Star, Clock, MapPin, User } from "lucide-react";
import { Event } from "@/types/event";
import { useToast } from "@/hooks/use-toast";

interface EventHeroProps {
  event: Event;
}

export const EventHero = ({ event }: EventHeroProps) => {
  const { toast } = useToast();

  const handlePurchase = () => {
    toast({
      title: "Coming Soon!",
      description: "Ticket purchasing will be available soon.",
    });
  };

  const handleAlert = () => {
    toast({
      title: "Alert Set!",
      description: "We'll notify you about price changes.",
    });
  };

  return (
    <div className="relative h-[60vh] w-full">
      <img
        src={event.imageUrl}
        alt={event.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-eden-dark via-eden-dark/50 to-transparent" />
      <div className="absolute inset-0 flex flex-col justify-end p-8 max-w-7xl mx-auto">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            {event.title}
          </h1>
          <div className="flex flex-wrap gap-6 text-gray-200">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              {event.date}
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              {event.location}
            </div>
            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              {event.organizer}
            </div>
          </div>
          <div className="flex items-center gap-2 text-yellow-400">
            <Star className="w-5 h-5 fill-current" />
            <span>{event.rating}/5</span>
            <span className="text-gray-300">({event.reviews} reviews)</span>
          </div>
          <div className="flex gap-4 mt-6">
            <Button
              size="lg"
              className="bg-eden-secondary hover:bg-eden-secondary/90"
              onClick={handlePurchase}
            >
              Buy Tickets
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-eden-primary text-eden-primary hover:bg-eden-primary/10"
              onClick={handleAlert}
            >
              Set Price Alerts
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};