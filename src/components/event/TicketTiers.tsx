import { Button } from "@/components/ui/button";

interface TicketTierProps {
  title: string;
  price: number;
  benefits: string;
  icon: string;
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

export const TicketTiers = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8">Choose Your Ticket</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <TicketTier
            icon="🎟"
            title="General Admission"
            price={299}
            benefits="Access to all performances and GA areas"
          />
          <TicketTier
            icon="🥂"
            title="VIP Pass"
            price={799}
            benefits="Exclusive VIP zones, premium restrooms, express entry"
          />
          <TicketTier
            icon="🏆"
            title="Ultra VIP Experience"
            price={2499}
            benefits="Backstage access, artist meet-and-greet, free drinks, exclusive lounge"
          />
        </div>
      </div>
    </section>
  );
};