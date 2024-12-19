import { useParams } from "react-router-dom";
import { useEvent } from "@/hooks/use-events";
import { EventHero } from "@/components/event/EventHero";
import { EventHighlights } from "@/components/event/EventHighlights";
import { TicketTiers } from "@/components/event/TicketTiers";
import { EventCTA } from "@/components/event/EventCTA";
import { Skeleton } from "@/components/ui/skeleton";
import { useAuthState } from "@/hooks/use-auth-state";

const EventDetails = () => {
  const { id } = useParams();
  const { user } = useAuthState();
  const { data: event, isLoading, error } = useEvent(id);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-eden-dark">
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

  if (error) {
    return (
      <div className="min-h-screen bg-eden-dark">
        <div className="max-w-7xl mx-auto px-4 py-32 text-center">
          <h1 className="text-3xl font-bold text-white">Error loading event</h1>
          <p className="mt-4 text-white/70">
            There was an error loading the event details. Please try again later.
          </p>
        </div>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="min-h-screen bg-eden-dark">
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
    <main className="bg-eden-dark">
      <EventHero event={event} />
      <EventHighlights event={event} />
      <TicketTiers />
      {user && <EventCTA event={event} userId={user.id} />}
    </main>
  );
};

export default EventDetails;