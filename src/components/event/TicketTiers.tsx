import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

interface TicketTierData {
  id: string;
  title: string;
  price: number;
  description?: string;
  total_tickets: number;
  available_tickets: number;
}

interface TicketTiersProps {
  tiers: TicketTierData[];
}

export const TicketTiers = ({ tiers }: TicketTiersProps) => {
  const { toast } = useToast();

  const handlePurchase = (tier: TicketTierData) => {
    toast({
      title: "Coming Soon!",
      description: "Ticket purchasing will be available soon.",
    });
  };

  if (!tiers.length) return null;

  return (
    <div id="tickets" className="space-y-6">
      <div className="sticky top-24 space-y-6">
        <h2 className="text-2xl font-bold text-white">Select Tickets</h2>
        <div className="space-y-4">
          {tiers.map((tier) => (
            <Card key={tier.id} className="p-6 bg-eden-light/10 backdrop-blur-sm border-eden-light/20">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {tier.title}
                    </h3>
                    {tier.available_tickets > 0 ? (
                      <p className="text-sm text-eden-accent">
                        {tier.available_tickets} tickets remaining
                      </p>
                    ) : (
                      <Badge variant="destructive">Sold Out</Badge>
                    )}
                  </div>
                  <span className="text-2xl font-bold text-white">
                    ${tier.price}
                  </span>
                </div>

                {tier.description && (
                  <div className="space-y-2">
                    {tier.description.split('\n').map((benefit, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-eden-secondary mt-0.5" />
                        <span className="text-gray-300">{benefit}</span>
                      </div>
                    ))}
                  </div>
                )}

                <Button
                  className="w-full bg-eden-secondary hover:bg-eden-secondary/90 disabled:bg-gray-600"
                  onClick={() => handlePurchase(tier)}
                  disabled={tier.available_tickets === 0}
                >
                  {tier.available_tickets > 0 ? "Select" : "Sold Out"}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};