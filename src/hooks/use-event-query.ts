import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Event } from "@/types/event";

export const useEventQuery = (eventId?: string) => {
  return useQuery({
    queryKey: ["event", eventId],
    queryFn: async () => {
      if (!eventId) throw new Error("Event ID is required");
      
      const { data, error } = await supabase
        .from("events")
        .select(`
          *,
          ticket_tiers (*)
        `)
        .eq("id", eventId)
        .maybeSingle();
      
      if (error) throw error;
      if (!data) throw new Error("Event not found");
      
      return data as Event;
    },
    enabled: !!eventId,
  });
};