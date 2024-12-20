import { useParams } from "react-router-dom";
import { useEventQuery } from "@/hooks/use-event-query";
import { EventHero } from "@/components/event/EventHero";
import { EventHighlights } from "@/components/event/EventHighlights";
import { EventCTA } from "@/components/event/EventCTA";
import { TicketTiers } from "@/components/event/TicketTiers";
import { useAuthState } from "@/hooks/use-auth-state";
import { Loader } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function Event() {
  const { id } = useParams();
  const { user } = useAuthState();
  const { data: event, isLoading, error } = useEventQuery(id);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-eden-dark">
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
      <main className="relative">
        <EventHero event={event} />
        <div className="max-w-7xl mx-auto px-4 space-y-16 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-12">
              <div className="prose prose-invert max-w-none">
                <h2 className="text-2xl font-bold">About This Event</h2>
                <p className="text-gray-300 whitespace-pre-wrap">
                  {event.description}
                </p>
              </div>
              <Separator className="bg-eden-light/20" />
              <EventHighlights event={event} />
            </div>
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <TicketTiers tiers={event.ticket_tiers || []} />
              </div>
            </div>
          </div>
        </div>
        {user && <EventCTA event={event} userId={user.id} />}
      </main>
    </div>
  );
}