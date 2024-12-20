import { Button } from "@/components/ui/button";
import { Star, Clock, MapPin, User, Share2, Calendar } from "lucide-react";
import { Event, formatEventDate } from "@/types/event";
import { useToast } from "@/hooks/use-toast";

interface EventHeroProps {
  event: Event;
}

export const EventHero = ({ event }: EventHeroProps) => {
  const { toast } = useToast();

  const handleShare = async () => {
    try {
      await navigator.share({
        title: event.title,
        text: `Check out ${event.title} on our platform!`,
        url: window.location.href,
      });
    } catch (err) {
      // If Web Share API is not supported, copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link copied!",
        description: "Event link has been copied to your clipboard.",
      });
    }
  };

  return (
    <div className="relative min-h-[70vh] w-full">
      <div className="absolute inset-0">
        <img
          src={event.image_url}
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-eden-dark via-eden-dark/70 to-transparent" />
      </div>
      
      <div className="absolute inset-0 flex flex-col justify-end">
        <div className="max-w-7xl mx-auto px-4 py-12 w-full space-y-6">
          <div className="flex flex-wrap gap-4 text-sm text-gray-300">
            <div className="flex items-center gap-2 bg-eden-light/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <Calendar className="w-4 h-4" />
              {formatEventDate(event.start_date, event.end_date)}
            </div>
            <div className="flex items-center gap-2 bg-eden-light/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <MapPin className="w-4 h-4" />
              {event.location}
            </div>
            {event.organizer && (
              <div className="flex items-center gap-2 bg-eden-light/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
                <User className="w-4 h-4" />
                {event.organizer}
              </div>
            )}
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white max-w-4xl">
              {event.title}
            </h1>
            
            {event.rating && event.reviews && (
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-eden-secondary text-eden-secondary" />
                  <span className="text-eden-secondary font-medium">
                    {event.rating}
                  </span>
                  <span className="text-gray-400">
                    ({event.reviews} reviews)
                  </span>
                </div>
              </div>
            )}

            <div className="flex flex-wrap gap-4 items-center">
              <Button
                size="lg"
                className="bg-eden-secondary hover:bg-eden-secondary/90"
                onClick={() => document.getElementById('tickets')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Tickets
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-eden-primary text-eden-primary hover:bg-eden-primary/10"
                onClick={handleShare}
              >
                <Share2 className="w-4 h-4 mr-2" />
                Share Event
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};