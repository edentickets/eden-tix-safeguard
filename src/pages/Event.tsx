import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { EventHero } from "@/components/event/EventHero";
import { EventHighlights } from "@/components/event/EventHighlights";
import { EventCTA } from "@/components/event/EventCTA";
import { EventSocialShare } from "@/components/event/EventSocialShare";
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
          creator:profiles(*)
        `)
        .eq("id", id)
        .single();

      if (error) throw error;
      return data;
    },
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-eden-dark animate-pulse">
        <div className="h-96 bg-eden-light/10" />
      </div>
    );
  }

  if (!event) {
    return (
      <div className="min-h-screen bg-eden-dark flex items-center justify-center">
        <p className="text-white">Event not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-eden-dark">
      <EventHero event={event} />
      
      <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <EventHighlights event={event} />
          </div>
          <div className="space-y-6">
            <EventCTA event={event} userId={user?.id} />
            <EventSocialShare event={event} />
          </div>
        </div>
      </div>
    </div>
  );
}