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

const EventDetails = () => {
  const { id } = useParams();
  const { user } = useAuthState();

  const { data: event, isLoading } = useQuery({
    queryKey: ["event", id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("events")
        .select(`
          *,
          creator:profiles(*)
        `)
        .eq("id", id)
        .single();

      if (error) throw error;
      return data;
    },
    enabled: !!id,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-eden-dark">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 py-8">
          <Skeleton className="h-[400px] w-full rounded-xl" />
          <div className="mt-8 space-y-4">
            <Skeleton className="h-8 w-1/3" />
            <Skeleton className="h-4 w-2/3" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        </div>
      </div>
    );
  }

  if (!event) {
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
        <TicketTiers event={event} />
        {user && <EventCTA event={event} userId={user.id} />}
      </main>
    </div>
  );
};

export default EventDetails;