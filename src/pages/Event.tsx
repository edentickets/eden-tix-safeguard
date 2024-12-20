import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { EventHero } from "@/components/event/EventHero";
import { EventHighlights } from "@/components/event/EventHighlights";
import { EventCTA } from "@/components/event/EventCTA";
import { TicketTiers } from "@/components/event/TicketTiers";
import { Navbar } from "@/components/Navbar";
import { useAuthState } from "@/hooks/use-auth-state";

export default function Event() {
  const { id } = useParams();
  const { user } = useAuthState();

  const { data: event, isLoading } = useQuery({
    queryKey: ["event", id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("events")
        .select(`
          *,
          creator:profiles(*),
          ticket_tiers(*)
        `)
        .eq("id", id)
        .single();

      if (error) throw error;
      return data;
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <div className="min-h-screen bg-eden-dark">
      <Navbar />
      <EventHero event={event} />
      <EventHighlights event={event} />
      <TicketTiers tiers={event.ticket_tiers} />
      <EventCTA event={event} userId={user?.id || ''} />
    </div>
  );
}