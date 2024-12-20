import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { EventHero } from "@/components/event/EventHero";
import { EventHighlights } from "@/components/event/EventHighlights";
import { TicketTiers } from "@/components/event/TicketTiers";
import { EventCTA } from "@/components/event/EventCTA";
import { Navbar } from "@/components/Navbar";
import { useAuthState } from "@/hooks/use-auth-state";
import { Event } from "@/types/event";
import { Loader } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// UUID validation regex
const UUID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

const EventDetails = () => {
  const { id } = useParams();
  const { user } = useAuthState();
  const { toast } = useToast();

  const { data: event, isLoading, error } = useQuery({
    queryKey: ["event", id],
    queryFn: async () => {
      if (!id) throw new Error("Event ID is required");
      if (!UUID_REGEX.test(id)) throw new Error("Invalid event ID format");
      
      console.log("Fetching event with ID:", id); // Debug log
      
      const { data, error } = await supabase
        .from("events")
        .select(`
          *,
          ticket_tiers(*)
        `)
        .eq("id", id)
        .single();
      
      if (error) {
        console.error("Supabase error:", error); // Debug log
        throw error;
      }
      
      if (!data) throw new Error("Event not found");
      
      return data as Event;
    },
    retry: 1,
    onError: (error: any) => {
      console.error("Query error:", error); // Debug log
      toast({
        title: "Error loading event",
        description: error.message || "Could not load event details. Please try again.",
        variant: "destructive",
      });
    },
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-eden-dark">
        <Navbar />
        <div className="flex items-center justify-center h-[calc(100vh-64px)]">
          <div className="flex flex-col items-center gap-4">
            <Loader className="w-8 h-8 animate-spin text-eden-primary" />
            <p className="text-white">Loading event details...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error || !event) {
    return (
      <div className="min-h-screen bg-eden-dark">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 py-32 text-center">
          <h1 className="text-3xl font-bold text-white">
            {!UUID_REGEX.test(id || '') 
              ? "Invalid event ID format" 
              : "Event not found"}
          </h1>
          <p className="mt-4 text-white/70">
            {!UUID_REGEX.test(id || '')
              ? "The event ID provided is not in the correct format."
              : "The event you're looking for doesn't exist or has been removed."}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-eden-dark">
      <Navbar />
      <main>
        <EventHero event={event} />
        <EventHighlights event={event} />
        <TicketTiers tiers={event.ticket_tiers || []} />
        {user && <EventCTA event={event} userId={user.id} />}
      </main>
    </div>
  );
};

export default EventDetails;