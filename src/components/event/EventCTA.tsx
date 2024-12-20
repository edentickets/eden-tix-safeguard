import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Event } from "@/types/event";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Mail } from "lucide-react";

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

  const handleContactCreator = () => {
    toast({
      title: "Contact Creator",
      description: `Opening message form for ${event.organizer}...`,
    });
  };

  return (
    <section className="py-16 px-4 bg-[var(--event-background,#121212)]">
      <div className="max-w-7xl mx-auto text-center space-y-6">
        <h2 className="text-2xl font-semibold text-[var(--event-heading,#FFFFFF)]">
          Your {event.title} Experience Starts Here
        </h2>
        <p className="text-[var(--event-text,#FFFFFF)]/70">
          Tickets are selling fast. Secure yours now or contact the creator for more information.
        </p>
        <div className="flex justify-center gap-4">
          <Button
            size="lg"
            className="bg-[var(--event-primary,#D4AF37)] hover:bg-[var(--event-primary,#D4AF37)]/90"
            onClick={handlePurchase}
            disabled={isLoading}
          >
            {isLoading ? "Processing..." : "Buy Tickets"}
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-[var(--event-primary,#D4AF37)] text-[var(--event-primary,#D4AF37)] hover:bg-[var(--event-primary,#D4AF37)]/10"
            onClick={handleContactCreator}
          >
            <Mail className="w-4 h-4 mr-2" />
            Contact {event.organizer}
          </Button>
        </div>
      </div>
    </section>
  );
};