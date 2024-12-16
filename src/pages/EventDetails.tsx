import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { useParams } from "react-router-dom";
import { Event } from "@/types/event";
import { useToast } from "@/hooks/use-toast";

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

  return (
    <div className="min-h-screen bg-eden-gray">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="aspect-video relative">
            <img
              src={event.imageUrl}
              alt={event.title}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-8">
            <h1 className="text-3xl font-bold text-eden-primary mb-4">
              {event.title}
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <div className="space-y-2">
                  <p className="text-gray-600">
                    <span className="font-semibold">Date:</span> {event.date}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold">Location:</span>{" "}
                    {event.location}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold">Available Tickets:</span>{" "}
                    {event.availableTickets}
                  </p>
                </div>
              </div>
              <div className="bg-eden-gray p-6 rounded-lg">
                <div className="text-3xl font-bold text-eden-primary mb-4">
                  ${event.price}
                </div>
                <Button
                  className="w-full bg-eden-primary hover:bg-eden-primary/90"
                  size="lg"
                  onClick={handlePurchase}
                >
                  Purchase Ticket
                </Button>
                <p className="text-sm text-gray-500 mt-4">
                  Secure checkout powered by Eden
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EventDetails;
