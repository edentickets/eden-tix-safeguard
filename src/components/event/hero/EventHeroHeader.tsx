import { User } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface EventHeroHeaderProps {
  title: string;
  description?: string;
  organizer?: string;
  creator_id?: string;
}

export const EventHeroHeader = ({ title, description, organizer, creator_id }: EventHeroHeaderProps) => {
  return (
    <div className="flex-1 space-y-6">
      <div className="flex items-center gap-2">
        {organizer && (
          <div className="flex items-center gap-2 text-[var(--event-text,#FFFFFF)]/80">
            <User className="w-5 h-5" />
            <Link 
              to={`/creator/${creator_id}`}
              className="hover:text-[var(--event-primary,#D4AF37)] transition-colors"
            >
              {organizer}
            </Link>
          </div>
        )}
      </div>

      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-4xl md:text-6xl font-bold text-[var(--event-heading,#FFFFFF)]"
      >
        {title}
      </motion.h1>

      {description && (
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-lg text-[var(--event-text,#FFFFFF)]/70 max-w-2xl"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};