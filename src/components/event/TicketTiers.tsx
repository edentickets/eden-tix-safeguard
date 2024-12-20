import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface TicketTierData {
  id: string;
  title: string;
  price: number;
  description?: string;
}

interface TicketTierProps {
  title: string;
  price: number;
  benefits: string;
  icon: string;
  index: number;
}

interface TicketTiersProps {
  tiers: TicketTierData[];
}

const TicketTier = ({ title, price, benefits, icon, index }: TicketTierProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
    className="glass-card p-6 space-y-4 hover:scale-105 transition-transform duration-300 relative overflow-hidden"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-eden-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <div className="flex items-center gap-2">
      <span className="text-2xl animate-float">{icon}</span>
      <h3 className="text-xl font-bold text-white">{title}</h3>
    </div>
    <div className="text-3xl font-bold text-eden-primary">${price}</div>
    <p className="text-gray-300">{benefits}</p>
    <Button className="w-full bg-eden-primary hover:bg-eden-primary/90 relative overflow-hidden">
      <span className="relative z-10">Buy Now</span>
      <div className="absolute inset-0 bg-gradient-to-r from-eden-primary/0 via-white/10 to-eden-primary/0 opacity-0 hover:opacity-100 transition-opacity duration-500 transform translate-x-[-100%] hover:translate-x-[100%]" />
    </Button>
  </motion.div>
);

export const TicketTiers = ({ tiers }: TicketTiersProps) => {
  const tierIcons = ["🎟", "🥂", "🏆"];

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-16 px-4"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-white mb-8"
        >
          Choose Your Ticket
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier, index) => (
            <TicketTier
              key={tier.id}
              icon={tierIcons[index] || "🎫"}
              title={tier.title}
              price={tier.price}
              benefits={tier.description || "Access to event"}
              index={index}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};