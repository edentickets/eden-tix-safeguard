import { Button } from "@/components/ui/button";
import { Star, Clock, MapPin, User } from "lucide-react";
import { Event, formatEventDate } from "@/types/event";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

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
      <motion.img
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        src={event.image_url}
        alt={event.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-eden-dark via-eden-dark/50 to-transparent" />
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="absolute inset-0 flex flex-col justify-end p-8 max-w-7xl mx-auto"
      >
        <div className="space-y-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold text-white glow-effect"
          >
            {event.title}
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-wrap gap-6 text-gray-200"
          >
            <div className="flex items-center gap-2 hover-lift">
              <Clock className="w-5 h-5" />
              {formatEventDate(event.start_date, event.end_date)}
            </div>
            <div className="flex items-center gap-2 hover-lift">
              <MapPin className="w-5 h-5" />
              {event.location}
            </div>
            {event.organizer && (
              <div className="flex items-center gap-2 hover-lift">
                <User className="w-5 h-5" />
                {event.organizer}
              </div>
            )}
          </motion.div>
          {event.rating && event.reviews && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex items-center gap-2 text-yellow-400 hover-lift"
            >
              <Star className="w-5 h-5 fill-current" />
              <span>{event.rating}/5</span>
              <span className="text-gray-300">({event.reviews} reviews)</span>
            </motion.div>
          )}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="flex gap-4 mt-6"
          >
            <Button
              size="lg"
              className="bg-eden-secondary hover:bg-eden-secondary/90 animate-glow"
              onClick={handlePurchase}
            >
              Buy Tickets
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-eden-primary text-eden-primary hover:bg-eden-primary/10 animate-border-glow"
              onClick={handleAlert}
            >
              Set Price Alerts
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};