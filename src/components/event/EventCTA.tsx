import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface EventCTAProps {
  eventTitle: string;
}

export const EventCTA = ({ eventTitle }: EventCTAProps) => {
  const { toast } = useToast();

  const handlePurchase = () => {
    toast({
      title: "Coming Soon!",
      description: "Ticket purchasing will be available soon.",
    });
  };

  const handleAlert = () => {
    toast({
      title: "Alert Set!",
      description: "We'll notify you about price changes.",
    });
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto text-center space-y-6">
        <h2 className="text-3xl font-bold text-white">
          Your {eventTitle} Experience Starts Here
        </h2>
        <p className="text-gray-300">
          Tickets are selling fast. Secure yours now or set price alerts for your perfect pass.
        </p>
        <div className="flex justify-center gap-4">
          <Button
            size="lg"
            className="bg-eden-secondary hover:bg-eden-secondary/90"
            onClick={handlePurchase}
          >
            Buy Tickets
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