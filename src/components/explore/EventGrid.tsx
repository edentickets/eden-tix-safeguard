import { EventCard } from "@/components/EventCard";
import { Event } from "@/types/event";
import { motion } from "framer-motion";

interface EventGridProps {
  title: string;
  events: Event[];
  className?: string;
}

export const EventGrid = ({ title, events, className = "" }: EventGridProps) => {
  return (
    <section className={`py-12 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-8 gradient-text"
        >
          {title}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <EventCard event={event} index={index} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};