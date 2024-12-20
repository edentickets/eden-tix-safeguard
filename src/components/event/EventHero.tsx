import { Button } from "@/components/ui/button";
import { User, MapPin, Calendar } from "lucide-react";
import { Event } from "@/types/event";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { useSession } from "@supabase/auth-helpers-react";
import { EventDateTime } from "./hero/EventDateTime";
import { EventLocation } from "./hero/EventLocation";
import { EventImageUpload } from "./hero/EventImageUpload";
import { useEffect } from "react";

interface EventHeroProps {
  event: Event;
}

export const EventHero = ({ event }: EventHeroProps) => {
  const { toast } = useToast();
  const session = useSession();

  useEffect(() => {
    document.documentElement.style.setProperty('--event-primary', event.primary_color || '#D4AF37');
    document.documentElement.style.setProperty('--event-secondary', event.secondary_color || '#000000');
    document.documentElement.style.setProperty('--event-background', event.background_color || '#121212');
    document.documentElement.style.setProperty('--event-text', event.text_color || '#FFFFFF');
    document.documentElement.style.setProperty('--event-heading', event.heading_color || '#FFFFFF');

    return () => {
      document.documentElement.style.removeProperty('--event-primary');
      document.documentElement.style.removeProperty('--event-secondary');
      document.documentElement.style.removeProperty('--event-background');
      document.documentElement.style.removeProperty('--event-text');
      document.documentElement.style.removeProperty('--event-heading');
    };
  }, [event]);

  return (
    <div className="relative min-h-[80vh] w-full overflow-hidden bg-[var(--event-background,#121212)]">
      {event.promo_banner_url && (
        <>
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ 
              backgroundImage: `url(${event.promo_banner_url})`,
              filter: 'blur(50px)',
              transform: 'scale(1.2)',
            }} 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--event-background,#121212)]/80 to-[var(--event-background,#121212)]" />
        </>
      )}
      
      <div className="relative container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-start gap-8 pt-20">
          <div className="flex-1 space-y-6">
            <div className="flex items-center gap-2">
              {event.organizer && (
                <div className="flex items-center gap-2 text-[var(--event-text,#FFFFFF)]/80">
                  <User className="w-5 h-5" />
                  <span>{event.organizer}</span>
                </div>
              )}
            </div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold text-[var(--event-heading,#FFFFFF)]"
            >
              {event.title}
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-6 text-[var(--event-text,#FFFFFF)]/80"
            >
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <EventDateTime startDate={event.start_date} endDate={event.end_date} />
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <EventLocation location={event.location} />
              </div>
            </motion.div>

            {event.description && (
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-lg text-[var(--event-text,#FFFFFF)]/70 max-w-2xl"
              >
                {event.description}
              </motion.p>
            )}
          </div>

          {session?.user?.id === event.creator_id && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="shrink-0"
            >
              <EventImageUpload 
                event={event} 
                isCreator={true}
              />
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};