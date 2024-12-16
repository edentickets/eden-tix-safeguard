import { EventCard } from "@/components/EventCard";
import { Navbar } from "@/components/Navbar";
import { Event } from "@/types/event";

const mockEvents: Event[] = [
  {
    id: "1",
    title: "Summer Music Festival 2024",
    date: "July 15, 2024",
    location: "Central Park, NY",
    imageUrl: "https://source.unsplash.com/random/800x600/?concert",
    price: 99.99,
    availableTickets: 150,
    description: "The biggest music festival of the summer featuring top artists from around the world.",
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
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-eden-gray">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-eden-primary mb-8">
          Featured Events
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;