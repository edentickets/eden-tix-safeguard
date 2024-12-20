import { useParams } from "react-router-dom";
import { useEventQuery } from "@/hooks/use-event-query";
import { EventHero } from "@/components/event/EventHero";
import { EventHighlights } from "@/components/event/EventHighlights";
import { EventCTA } from "@/components/event/EventCTA";
import { TicketTiers } from "@/components/event/TicketTiers";
import { useAuthState } from "@/hooks/use-auth-state";
import { Loader } from "lucide-react";

export default function Event() {
  const { id } = useParams();
  const { user } = useAuthState();
  const { data: event, isLoading, error } = useEventQuery(id);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white">
        <div className="flex items-center justify-center h-[calc(100vh-64px)]">
          <div className="flex flex-col items-center gap-4">
            <Loader className="w-8 h-8 animate-spin text-eden-primary" />
            <p className="text-gray-600">Loading event details...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error || !event) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 py-32 text-center">
          <h1 className="text-3xl font-bold text-gray-900">Event not found</h1>
          <p className="mt-4 text-gray-600">
            The event you're looking for doesn't exist or has been removed.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <main>
        <EventHero event={event} />
        <EventHighlights event={event} />
        <TicketTiers tiers={event.ticket_tiers || []} />
        {user && <EventCTA event={event} userId={user.id} />}
      </main>
    </div>
  );
}