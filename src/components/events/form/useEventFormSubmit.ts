import { useSession } from "@supabase/auth-helpers-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { EventFormValues } from "./eventFormSchema";

interface UseEventFormSubmitProps {
  onSuccess?: () => void;
}

export const useEventFormSubmit = ({ onSuccess }: UseEventFormSubmitProps = {}) => {
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
      // First, create the event
      const { data: eventData, error: eventError } = await supabase
        .from("events")
        .insert({
          creator_id: session.user.id,
          title: data.title,
          description: data.description,
          location: data.location,
          start_date: data.startDate.toISOString(),
          end_date: data.endDate.toISOString(),
          image_url: data.imageUrl,
          total_tickets: data.ticketTiers.reduce((sum, tier) => sum + tier.totalTickets, 0),
          available_tickets: data.ticketTiers.reduce((sum, tier) => sum + tier.totalTickets, 0),
          price: data.ticketTiers[0].price, // Use the lowest tier price as the base price
        })
        .select()
        .single();

      if (eventError) throw eventError;

      // Then, create the ticket tiers
      const { error: tiersError } = await supabase
        .from("ticket_tiers")
        .insert(
          data.ticketTiers.map((tier) => ({
            event_id: eventData.id,
            title: tier.title,
            description: tier.description,
            price: tier.price,
            total_tickets: tier.totalTickets,
            available_tickets: tier.totalTickets,
          }))
        );

      if (tiersError) throw tiersError;

      toast({
        title: "Event created successfully",
        description: "Your event has been created and is now live!",
      });

      onSuccess?.();
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