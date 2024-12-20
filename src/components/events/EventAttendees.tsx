import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { motion } from "framer-motion";
import { Users } from "lucide-react";

interface EventAttendeesProps {
  eventId: string;
}

export function EventAttendees({ eventId }: EventAttendeesProps) {
  const { data: attendees } = useQuery({
    queryKey: ["event-attendees", eventId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("event_attendees")
        .select(`
          *,
          profile:profiles(*)
        `)
        .eq("event_id", eventId)
        .limit(5);

      if (error) throw error;
      return data;
    },
  });

  if (!attendees?.length) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-start gap-2"
    >
      <div className="flex items-center gap-2 text-sm text-gray-400">
        <Users className="w-4 h-4" />
        <span>{attendees.length} people attending</span>
      </div>
      
      <div className="flex -space-x-2">
        {attendees.map((attendee) => (
          <Avatar key={attendee.id} className="border-2 border-eden-dark w-8 h-8">
            <AvatarImage src={attendee.profile?.avatar_url} />
            <AvatarFallback>
              {attendee.profile?.full_name?.[0] || "?"}
            </AvatarFallback>
          </Avatar>
        ))}
      </div>
    </motion.div>
  );
}