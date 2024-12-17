import { Button } from "@/components/ui/button";
import { Music, Palette, PartyPopper, UtensilsCrossed, Wine, Mic } from "lucide-react";

const categories = [
  { icon: Music, label: "Concerts & Music" },
  { icon: Palette, label: "Art & Culture" },
  { icon: PartyPopper, label: "Festivals" },
  { icon: UtensilsCrossed, label: "Food & Drinks" },
  { icon: Wine, label: "Nightlife" },
  { icon: Mic, label: "Comedy Shows" },
];

export const CategorySection = () => {
  return (
    <section className="py-12 bg-eden-light/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 gradient-text">
          Discover Events Tailored for You
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map(({ icon: Icon, label }) => (
            <Button
              key={label}
              variant="outline"
              className="h-auto py-6 flex flex-col items-center gap-3 bg-eden-light/30 border-white/10 hover:bg-eden-light/50"
            >
              <Icon className="w-8 h-8" />
              <span className="text-sm font-medium">{label}</span>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};