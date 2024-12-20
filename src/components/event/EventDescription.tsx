import { Event } from "@/types/event";
import { motion } from "framer-motion";

interface EventDescriptionProps {
  event: Event;
}

export const EventDescription = ({ event }: EventDescriptionProps) => {
  if (!event.description) {
    return null;
  }

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-16 px-4 bg-white"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold text-eden-dark mb-6">About This Event</h2>
        <div className="prose prose-eden max-w-none">
          {event.description.split('\n').map((paragraph, index) => (
            <p key={index} className="text-eden-gray mb-4 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </motion.section>
  );
};