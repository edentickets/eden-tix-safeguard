import { useParams } from "react-router-dom";
import { useEventQuery } from "@/hooks/use-event-query";
import { EventHero } from "@/components/event/EventHero";
import { EventHighlights } from "@/components/event/EventHighlights";
import { TicketTiers } from "@/components/event/TicketTiers";
import { EventCTA } from "@/components/event/EventCTA";
import { Navbar } from "@/components/Navbar";
import { Loader2 } from "lucide-react";
import { useAuthState } from "@/hooks/use-auth-state";

const Event = () => {
  const { id } = useParams();
  const { user } = useAuthState();
  const { data: event, isLoading, error } = useEventQuery(id);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-eden-dark">
        <Navbar />
        <div className="flex items-center justify-center h-[calc(100vh-4rem)]">
          <Loader2 className="w-8 h-8 animate-spin text-eden-primary" />
        </div>
      </div>
    );
  }

  if (error || !event) {
    return (
      <div className="min-h-screen bg-eden-dark">
        <Navbar />
        <div className="flex flex-col items-center justify-center h-[calc(100vh-4rem)] text-white">
          <h1 className="text-2xl font-bold">Event not found</h1>
          <p className="text-gray-400">The event you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-eden-dark">
      <Navbar />
      <EventHero event={event} />
      <EventHighlights event={event} />
      <TicketTiers />
      <EventCTA event={event} userId={user?.id || ""} />
    </div>
  );
};

export default Event;