import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useCart } from "@/contexts/CartContext";
import { useParams } from "react-router-dom";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

interface TicketTierData {
  id: string;
  title: string;
  price: number;
  description?: string;
}

interface TicketTiersProps {
  tiers: TicketTierData[];
}

export const TicketTiers = ({ tiers }: TicketTiersProps) => {
  const { id: eventId } = useParams();
  const { addToCart } = useCart();
  const [quantities, setQuantities] = useState<Record<string, number>>(
    Object.fromEntries(tiers.map(tier => [tier.id, 1]))
  );

  const handleQuantityChange = (tierId: string, increment: boolean) => {
    setQuantities(prev => ({
      ...prev,
      [tierId]: Math.max(1, prev[tierId] + (increment ? 1 : -1))
    }));
  };

  const handleAddToCart = (tier: TicketTierData) => {
    if (!eventId) return;
    
    for (let i = 0; i < quantities[tier.id]; i++) {
      addToCart({
        eventId,
        tierId: tier.id,
        title: tier.title,
        price: tier.price,
      });
    }
    
    // Reset quantity after adding to cart
    setQuantities(prev => ({
      ...prev,
      [tier.id]: 1
    }));
  };

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative py-16 px-4 overflow-hidden isolate"
      style={{
        background: 'var(--event-background, #1A1F2C)',
        color: 'var(--event-text, white)'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--event-primary,#8B5CF6)]/10 via-[var(--event-secondary,#10B981)]/5 to-transparent animate-gradient-shift -z-10" />
      <div className="absolute inset-0 backdrop-blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-semibold mb-8"
          style={{ color: 'var(--event-heading, white)' }}
        >
          Choose Your Ticket
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
              className="glass-card p-6 relative group"
              style={{
                '--card-glow': 'var(--event-primary, #8B5CF6)',
              } as React.CSSProperties}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--event-primary,#8B5CF6)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
              <div className="relative z-10">
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-semibold" style={{ color: 'var(--event-heading, white)' }}>{tier.title}</h3>
                </div>
                <div className="text-3xl font-bold mt-4" style={{ color: 'var(--event-primary, #8B5CF6)' }}>${tier.price}</div>
                <p className="text-gray-300 mt-2">{tier.description || "Access to event"}</p>
                
                <div className="flex items-center gap-4 mt-6">
                  <div className="flex items-center gap-2">
                    <Button 
                      variant="outline"
                      size="icon"
                      onClick={() => handleQuantityChange(tier.id, false)}
                      className="h-8 w-8"
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-8 text-center">{quantities[tier.id]}</span>
                    <Button 
                      variant="outline"
                      size="icon"
                      onClick={() => handleQuantityChange(tier.id, true)}
                      className="h-8 w-8"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <Button 
                    className="flex-1"
                    style={{
                      backgroundColor: 'var(--event-primary, #8B5CF6)',
                      color: 'white'
                    }}
                    onClick={() => handleAddToCart(tier)}
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};