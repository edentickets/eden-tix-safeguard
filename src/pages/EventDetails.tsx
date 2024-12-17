import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { useParams } from "react-router-dom";
import { Event } from "@/types/event";
import { useToast } from "@/hooks/use-toast";
import { Star, Clock, MapPin, User, AlertCircle } from "lucide-react";

const mockEvents: Event[] = [
  {
    id: "1",
    title: "Rolling Loud Miami 2025",
    date: "July 19-21, 2025",
    location: "Hard Rock Stadium, Miami, FL",
    imageUrl: "https://source.unsplash.com/random/1920x1080/?concert",
    price: 299,
    availableTickets: 150,
    description: "The biggest hip-hop festival featuring today's hottest artists.",
    organizer: "Rolling Loud Events",
    rating: 4.8,
    reviews: 2347,
    highlights: [
      {
        icon: "🔥",
        title: "World-Class Lineup",
        description: "Catch performances from today's hottest artists",
      },
      {
        icon: "🎧",
        title: "Immersive Experience",
        description: "Cutting-edge sound, lighting, and stage design",
      },
      {
        icon: "🍹",
        title: "Premium Add-Ons",
        description: "Exclusive lounges, free drinks, and artist meet-ups",
      },
      {
        icon: "📍",
        title: "Iconic Venue",
        description: "Experience music under the Miami skyline",
      },
    ],
  },
  {
    id: "2",
    title: "Tech Conference 2024",
    date: "August 20, 2024",
    location: "Convention Center, SF",
    imageUrl: "https://source.unsplash.com/random/800x600/?technology",
    price: 299.99,
    availableTickets: 75,
    description: "Join industry leaders for a day of innovation and networking.",
    organizer: "TechCon Events",
    rating: 4.9,
    reviews: 850,
    highlights: [
      {
        icon: "💻",
        title: "Expert Talks",
        description: "Keynotes from industry leaders"
      },
      {
        icon: "🤝",
        title: "Networking",
        description: "Dedicated networking sessions"
      },
      {
        icon: "🚀",
        title: "Innovation Hub",
        description: "Latest tech demos and exhibitions"
      }
    ]
  },
  {
    id: "3",
    title: "Food & Wine Festival",
    date: "September 5, 2024",
    location: "Waterfront Park, Miami",
    imageUrl: "https://source.unsplash.com/random/800x600/?food",
    price: 149.99,
    availableTickets: 200,
    description: "Experience the finest cuisine and wines from renowned chefs.",
    organizer: "Culinary Arts Society",
    rating: 4.7,
    reviews: 975,
    highlights: [
      {
        icon: "👨‍🍳",
        title: "Chef Demonstrations",
        description: "Live cooking shows by top chefs"
      },
      {
        icon: "🍷",
        title: "Wine Tasting",
        description: "Premium wine sampling sessions"
      },
      {
        icon: "🌟",
        title: "VIP Experience",
        description: "Exclusive dining experiences"
      }
    ]
  },
];

const TicketTier = ({ title, price, benefits, icon }: { title: string; price: number; benefits: string; icon: string }) => (
  <div className="glass-card p-6 space-y-4 hover:scale-105 transition-transform duration-300">
    <div className="flex items-center gap-2">
      <span className="text-2xl">{icon}</span>
      <h3 className="text-xl font-bold">{title}</h3>
    </div>
    <div className="text-3xl font-bold text-eden-primary">${price}</div>
    <p className="text-gray-300">{benefits}</p>
    <Button className="w-full bg-eden-primary hover:bg-eden-primary/90">Buy Now</Button>
  </div>
);

const EventDetails = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const event = mockEvents.find((e) => e.id === id);

  if (!event) {
    return <div>Event not found</div>;
  }

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
    <div className="min-h-screen bg-eden-dark">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full">
        <img
          src={event.imageUrl}
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-eden-dark via-eden-dark/50 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-8 max-w-7xl mx-auto">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              {event.title}
            </h1>
            <div className="flex flex-wrap gap-6 text-gray-200">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                {event.date}
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                {event.location}
              </div>
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                {event.organizer}
              </div>
            </div>
            <div className="flex items-center gap-2 text-yellow-400">
              <Star className="w-5 h-5 fill-current" />
              <span>{event.rating}/5</span>
              <span className="text-gray-300">({event.reviews} reviews)</span>
            </div>
            <div className="flex gap-4 mt-6">
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
        </div>
      </div>

      {/* Ticket Pricing Section */}
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

      {/* Event Highlights Section */}
      <section className="py-16 px-4 bg-eden-light/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">
            What to Expect at {event.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {event.highlights.map((highlight, index) => (
              <div key={index} className="glass-card p-6 space-y-4">
                <span className="text-4xl">{highlight.icon}</span>
                <h3 className="text-xl font-bold text-white">{highlight.title}</h3>
                <p className="text-gray-300">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold text-white">
            Your {event.title} Experience Starts Here
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
    </div>
  );
};

export default EventDetails;
