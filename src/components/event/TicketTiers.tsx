import { Button } from "@/components/ui/button";

interface TicketTierData {
  id: string;
  title: string;
  price: number;
  description?: string; // Made optional to match database schema
}

interface TicketTierProps {
  title: string;
  price: number;
  benefits: string;
  icon: string;
}

interface TicketTiersProps {
  tiers: TicketTierData[];
}

const TicketTier = ({ title, price, benefits, icon }: TicketTierProps) => (
  <div className="glass-card p-6 space-y-4 hover:scale-105 transition-transform duration-300">
    <div className="flex items-center gap-2">
      <span className="text-2xl">{icon}</span>
      <h3 className="text-xl font-bold">{title}</h3>
    </div>
    <div className="text-3xl font-bold text-eden-primary">${price}</div>
    <p className="text-gray-300">{benefits}</p>
    <Button className="w-full bg-eden-primary hover:bg-eden-primary/90">
      Buy Now
    </Button>
  </div>
);

export const TicketTiers = ({ tiers }: TicketTiersProps) => {
  const tierIcons = ["🎟", "🥂", "🏆"];

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8">Choose Your Ticket</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier, index) => (
            <TicketTier
              key={tier.id}
              icon={tierIcons[index] || "🎫"}
              title={tier.title}
              price={tier.price}
              benefits={tier.description || "Access to event"}
            />
          ))}
        </div>
      </div>
    </section>
  );
};