import { Button } from "@/components/ui/button";
import { Music, Palette, PartyPopper, UtensilsCrossed, Wine, Mic } from "lucide-react";
import { motion } from "framer-motion";

const categories = [
  { icon: Music, label: "Concerts & Music" },
  { icon: Palette, label: "Art & Culture" },
  { icon: PartyPopper, label: "Festivals" },
  { icon: UtensilsCrossed, label: "Food & Drinks" },
  { icon: Wine, label: "Nightlife" },
  { icon: Mic, label: "Comedy Shows" },
] as const;

interface CategorySectionProps {
  onCategorySelect?: (category: string) => void;
}

export const CategorySection = ({ onCategorySelect }: CategorySectionProps) => {
  return (
    <section className="py-12 bg-eden-light/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-8 gradient-text"
        >
          Discover Events Tailored for You
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map(({ icon: Icon, label }) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Button
                variant="outline"
                className="w-full h-auto py-6 flex flex-col items-center gap-3 bg-eden-light/30 border-white/10 hover:bg-eden-light/50"
                onClick={() => onCategorySelect?.(label)}
              >
                <Icon className="w-8 h-8" />
                <span className="text-sm font-medium">{label}</span>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};