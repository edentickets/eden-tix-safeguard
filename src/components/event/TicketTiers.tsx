import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus, Minus } from "lucide-react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

interface TicketTier {
  id: string;
  title: string;
  description?: string;
  price: number;
  total_tickets: number;
  available_tickets: number;
}

interface TicketTiersProps {
  tiers: TicketTier[];
}

export const TicketTiers = ({ tiers }: TicketTiersProps) => {
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const { toast } = useToast();

  const handleIncrement = (tierId: string, availableTickets: number) => {
    setQuantities(prev => {
      const currentQty = prev[tierId] || 0;
      if (currentQty < availableTickets) {
        return { ...prev, [tierId]: currentQty + 1 };
      }
      return prev;
    });
  };

  const handleDecrement = (tierId: string) => {
    setQuantities(prev => {
      const currentQty = prev[tierId] || 0;
      if (currentQty > 0) {
        return { ...prev, [tierId]: currentQty - 1 };
      }
      return prev;
    });
  };

  const handleBuyNow = (tier: TicketTier) => {
    const quantity = quantities[tier.id] || 0;
    if (quantity === 0) {
      toast({
        title: "Please select quantity",
        description: "Select how many tickets you want to purchase",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Added to cart!",
      description: `${quantity} ${tier.title} ticket${quantity > 1 ? 's' : ''} added to cart`,
    });
  };

  return (
    <div className="py-24 bg-[var(--event-background,#1A1F2C)]">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-[var(--event-heading,white)] mb-12">Tickets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative group"
            >
              {/* Glow effect */}
              <div 
                className="absolute inset-0 bg-[var(--event-primary,#8B5CF6)]/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 -z-10"
                style={{ transform: 'translateY(4px)' }}
              />
              
              <div className="relative bg-[var(--event-background,#1A1F2C)] border border-[var(--event-primary,#8B5CF6)]/20 p-6 rounded-xl backdrop-blur-sm">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-[var(--event-heading,white)]">{tier.title}</h3>
                    {tier.description && (
                      <p className="text-[var(--event-text,#E5E7EB)] mt-1">{tier.description}</p>
                    )}
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-[var(--event-heading,white)]">
                      ${tier.price}
                    </div>
                    <div className="text-sm text-[var(--event-text,#E5E7EB)]">
                      {tier.available_tickets} left
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-6">
                  <div className="flex items-center gap-3">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => handleDecrement(tier.id)}
                      disabled={!quantities[tier.id]}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="text-[var(--event-text,#E5E7EB)] w-8 text-center">
                      {quantities[tier.id] || 0}
                    </span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => handleIncrement(tier.id, tier.available_tickets)}
                      disabled={quantities[tier.id] === tier.available_tickets}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <Button
                    variant="default"
                    className="bg-[var(--event-primary,#8B5CF6)] hover:bg-[var(--event-primary,#8B5CF6)]/90"
                    onClick={() => handleBuyNow(tier)}
                  >
                    Buy Now
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};