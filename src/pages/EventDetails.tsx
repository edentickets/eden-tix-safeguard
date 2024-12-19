import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { EventHero } from "@/components/event/EventHero";
import { EventHighlights } from "@/components/event/EventHighlights";
import { TicketTiers } from "@/components/event/TicketTiers";
import { EventCTA } from "@/components/event/EventCTA";
import { Navbar } from "@/components/Navbar";
import { Skeleton } from "@/components/ui/skeleton";
import { useAuthState } from "@/hooks/use-auth-state";
import { Event } from "@/types/event";
import { Loader } from "lucide-react";

const EventDetails = () => {
  const { id } = useParams();
  const { user } = useAuthState();

  const { data: event, isLoading, error } = useQuery({
    queryKey: ["event", id],
    queryFn: async () => {
      if (!id) throw new Error("Event ID is required");
      
      const { data, error } = await supabase
        .from("events")
        .select(`
          *,
          creator:profiles(*)
        `)
        .eq("id", id)
        .maybeSingle();
      
      if (error) throw error;
      if (!data) throw new Error("Event not found");
      
      return data as Event;
    },
    enabled: !!id,
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
          <h1 className="text-3xl font-bold text-white">Event not found</h1>
          <p className="mt-4 text-white/70">
            The event you're looking for doesn't exist or has been removed.
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
        <TicketTiers />
        {user && <EventCTA event={event} userId={user.id} />}
      </main>
    </div>
  );
};

export default EventDetails;