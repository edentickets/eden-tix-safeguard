import { Button } from "@/components/ui/button";
import { User, Star } from "lucide-react";
import { Event } from "@/types/event";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { useSession } from "@supabase/auth-helpers-react";
import { EventDateTime } from "./hero/EventDateTime";
import { EventLocation } from "./hero/EventLocation";
import { EventImageUpload } from "./hero/EventImageUpload";

interface EventHeroProps {
  event: Event;
}

export const EventHero = ({ event }: EventHeroProps) => {
  const { toast } = useToast();
  const session = useSession();

  const handleAlert = () => {
    toast({
      title: "Alert Set!",
      description: "We'll notify you about price changes.",
    });
  };

  return (
    <div className="relative h-[60vh] w-full">
      <div className="absolute inset-0 bg-gradient-to-br from-eden-primary/5 to-transparent opacity-20 backdrop-blur-xl" />
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="absolute inset-0 flex flex-col justify-end p-8 max-w-7xl mx-auto"
      >
        <div className="flex items-end gap-8">
          <div className="space-y-4 flex-1">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-3xl md:text-5xl font-bold text-white"
            >
              {event.title}
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-wrap gap-6 text-gray-200"
            >
              <EventDateTime startDate={event.start_date} endDate={event.end_date} />
              <EventLocation location={event.location} />
              {event.description && (
                <div className="flex items-center gap-2 hover:text-eden-primary transition-colors w-full">
                  <User className="w-5 h-5" />
                  {event.description}
                </div>
              )}
              {event.organizer && (
                <div className="flex items-center gap-2 hover:text-eden-primary transition-colors">
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
                className="flex items-center gap-2 text-yellow-400"
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
                variant="outline"
                className="border-eden-primary text-eden-primary hover:bg-eden-primary/10"
                onClick={handleAlert}
              >
                Set Price Alerts
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="hidden md:block"
          >
            <EventImageUpload 
              event={event} 
              isCreator={session?.user?.id === event.creator_id}
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};