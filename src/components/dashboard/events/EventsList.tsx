import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { EventCard } from "./EventCard";
import { Loader2 } from "lucide-react";

export function EventsList() {
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

      if (error) throw error;
      return data || [];
    },
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="w-8 h-8 animate-spin text-eden-primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-red-400">Error loading events. Please try again later.</p>
      </div>
    );
  }

  if (!events?.length) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-400">No events found. Create your first event to get started!</p>
      </div>
    );
  }

  return (
    <div className="grid gap-4">
      {events.map((event, index) => (
        <EventCard 
          key={event.id} 
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
      ))}
    </div>
  );
}