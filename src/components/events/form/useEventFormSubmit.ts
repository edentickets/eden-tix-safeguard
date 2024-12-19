import { useSession } from "@supabase/auth-helpers-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { EventFormValues } from "./eventFormSchema";

export const useEventFormSubmit = () => {
  const session = useSession();
  const navigate = useNavigate();
  const { toast } = useToast();

  const onSubmit = async (data: EventFormValues) => {
    if (!session?.user) {
      toast({
        title: "Authentication required",
        description: "Please sign in to create an event",
        variant: "destructive",
      });
      return;
    }

    try {
      const { data: eventData, error } = await supabase
        .from("events")
        .insert({
          creator_id: session.user.id,
          title: data.title,
          description: data.description,
          location: data.location,
          start_date: data.startDate.toISOString(),
          end_date: data.endDate.toISOString(),
          total_tickets: data.totalTickets,
          available_tickets: data.totalTickets,
          price: data.price,
        })
        .select()
        .single();

      if (error) throw error;

      toast({
        title: "Event created successfully",
        description: "Your event has been created and is now live!",
      });

      navigate(`/event/${eventData.id}`);
    } catch (error: any) {
      toast({
        title: "Error creating event",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  return { onSubmit };
};