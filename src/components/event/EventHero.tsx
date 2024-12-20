import { useSession } from "@supabase/auth-helpers-react";
import { Event } from "@/types/event";
import { EventDateTime } from "./hero/EventDateTime";
import { EventLocation } from "./hero/EventLocation";
import { EventImageUpload } from "./hero/EventImageUpload";
import { EventHeroHeader } from "./hero/EventHeroHeader";
import { EventHeroBackground } from "./hero/EventHeroBackground";
import { Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";

interface EventHeroProps {
  event: Event;
  isCreator?: boolean;
}

export const EventHero = ({ event, isCreator }: EventHeroProps) => {
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
      <EventHeroBackground promo_banner_url={event.promo_banner_url} />
      
      <div className="relative container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-start gap-8 pt-20">
          <EventHeroHeader 
            title={event.title}
            description={event.description}
            organizer={event.organizer}
            creator_id={event.creator_id}
          />

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

          {(isCreator || session?.user?.id === event.creator_id) && (
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