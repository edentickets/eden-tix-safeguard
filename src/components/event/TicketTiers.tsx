import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus, Minus, Bell } from "lucide-react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { WaitlistButton } from "@/components/event/WaitlistButton";

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

  const handleSetAlert = () => {
    toast({
      title: "Price Alert Set",
      description: "We'll notify you when prices change for this event.",
    });
  };

  return (
    <div className="py-16 bg-[var(--event-background,#121212)]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-6 max-w-3xl mx-auto">
          {/* Price Alert Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative group"
          >
            <div 
              className="absolute -inset-0.5 bg-gradient-to-r from-[var(--event-primary,#D4AF37)]/20 to-[var(--event-secondary,#000000)]/20 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-300"
              style={{ transform: 'translateY(4px)' }}
            />
            <div className="glass-card p-6">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Bell className="w-5 h-5 text-[var(--event-primary,#D4AF37)]" />
                  <div>
                    <h3 className="text-lg font-medium text-[var(--event-heading,#FFFFFF)]">
                      Get Price Alerts
                    </h3>
                    <p className="text-sm text-[var(--event-text,#FFFFFF)]/70">
                      Be notified when ticket prices change
                    </p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  onClick={handleSetAlert}
                  className="border-[var(--event-primary,#D4AF37)]/50 text-[var(--event-primary,#D4AF37)] hover:bg-[var(--event-primary,#D4AF37)]/10"
                >
                  Set Alert
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Ticket Tiers */}
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div 
                className="absolute -inset-0.5 bg-[var(--event-primary,#D4AF37)]/20 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-300"
                style={{ transform: 'translateY(4px)' }}
              />
              
              <div className="relative bg-[var(--event-background,#121212)] border border-[var(--event-primary,#D4AF37)]/20 p-6 rounded-xl backdrop-blur-sm">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-[var(--event-heading,#FFFFFF)]">{tier.title}</h3>
                    {tier.description && (
                      <p className="text-[var(--event-text,#FFFFFF)]/70 mt-1">{tier.description}</p>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-6">
                    <div className="text-right">
                      <div className="text-2xl font-bold text-[var(--event-primary,#D4AF37)]">
                        ${tier.price}
                      </div>
                      <div className="text-sm text-[var(--event-text,#FFFFFF)]/60">
                        {tier.available_tickets} left
                      </div>
                    </div>

                    {tier.available_tickets > 0 ? (
                      <div className="flex items-center gap-3">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 border-[var(--event-primary,#D4AF37)]/50 text-[var(--event-primary,#D4AF37)]"
                          onClick={() => handleDecrement(tier.id)}
                          disabled={!quantities[tier.id]}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="text-[var(--event-text,#FFFFFF)] w-8 text-center">
                          {quantities[tier.id] || 0}
                        </span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 border-[var(--event-primary,#D4AF37)]/50 text-[var(--event-primary,#D4AF37)]"
                          onClick={() => handleIncrement(tier.id, tier.available_tickets)}
                          disabled={quantities[tier.id] === tier.available_tickets}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    ) : (
                      <WaitlistButton 
                        eventId={tier.event_id} 
                        tierId={tier.id}
                        tierName={tier.title}
                      />
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
