import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { EventCard } from "./EventCard";
import { LoadingSkeleton } from "@/components/ui/loading-skeleton";
import { useToast } from "@/hooks/use-toast";

export function EventsList() {
  const { toast } = useToast();
  
  const { data: events, isLoading, error } = useQuery({
    queryKey: ["dashboard-events"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("events")
        .select(`
          *,
          ticket_tiers (*)
        `)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching events:', error);
        toast({
          title: "Error loading events",
          description: "There was a problem loading your events. Please try again.",
          variant: "destructive",
        });
        throw error;
      }

      return data || [];
    },
  });

  if (isLoading) {
    return (
      <div className="space-y-4">
        <LoadingSkeleton 
          count={3} 
          className="h-[120px] w-full rounded-xl animate-pulse bg-eden-light/10"
        >
          <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </LoadingSkeleton>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8 animate-fade-in">
        <p className="text-red-400">Error loading events. Please try again later.</p>
      </div>
    );
  }

  if (!events?.length) {
    return (
      <div className="text-center py-8 animate-fade-in">
        <p className="text-gray-400">No events found. Create your first event to get started!</p>
      </div>
    );
  }

  return (
    <div className="grid gap-4">
      {events.map((event, index) => (
        <div key={event.id} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
          <EventCard 
            event={{
              id: event.id,
              title: event.title,
              date: new Date(event.start_date).toLocaleDateString(),
              location: event.location,
              status: "On Sale", // You might want to add a status field to your events table
              soldTickets: event.total_tickets - event.available_tickets,
              totalTickets: event.total_tickets,
              revenue: (event.total_tickets - event.available_tickets) * event.price
            }} 
            index={index} 
          />
        </div>
      ))}
    </div>
  );
}