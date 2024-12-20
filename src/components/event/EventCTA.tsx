import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Event } from "@/types/event";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";

interface EventCTAProps {
  event: Event;
  userId?: string;
}

export const EventCTA = ({ event, userId }: EventCTAProps) => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handlePurchase = async () => {
    setIsLoading(true);
    try {
      // If user is not logged in, we'll collect email during Stripe checkout
      const response = await fetch('/api/create-checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(userId && { 
            Authorization: `Bearer ${(await supabase.auth.getSession()).data.session?.access_token}` 
          }),
        },
        body: JSON.stringify({
          eventId: event.id,
          quantity: 1,
        }),
      });

      const { url, error } = await response.json();
      
      if (error) throw new Error(error);
      if (url) window.location.href = url;
      
    } catch (error) {
      toast({
        title: "Error",
        description: "Could not initiate checkout. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleAlert = () => {
    toast({
      title: "Alert Set!",
      description: "We'll notify you about price changes.",
    });
  };

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900">
          Your {event.title} Experience Starts Here
        </h2>
        <p className="text-gray-600">
          Tickets are selling fast. Secure yours now or set price alerts for your perfect pass.
        </p>
        <div className="flex justify-center gap-4">
          <Button
            size="lg"
            className="bg-eden-secondary hover:bg-eden-secondary/90"
            onClick={handlePurchase}
            disabled={isLoading}
          >
            {isLoading ? "Processing..." : "Buy Tickets"}
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-eden-primary text-eden-primary hover:bg-eden-primary/10"
            onClick={handleAlert}
          >
            Set Price Alerts
          </Button>
        </div>
      </div>
    </section>
  );
};