import { useSession } from "@supabase/auth-helpers-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { EventFormValues } from "./eventFormSchema";

interface UseEventFormSubmitProps {
  eventId?: string;
  onSuccess?: () => void;
}

export const useEventFormSubmit = ({ eventId, onSuccess }: UseEventFormSubmitProps = {}) => {
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
      if (eventId) {
        // Update existing event
        const { error: eventError } = await supabase
          .from("events")
          .update({
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
          .eq('id', eventId);

        if (eventError) throw eventError;

        // Update ticket tiers
        const { error: deleteTiersError } = await supabase
          .from("ticket_tiers")
          .delete()
          .eq('event_id', eventId);

        if (deleteTiersError) throw deleteTiersError;

        const { error: tiersError } = await supabase
          .from("ticket_tiers")
          .insert(
            data.ticketTiers.map((tier) => ({
              event_id: eventId,
              title: tier.title,
              description: tier.description,
              price: tier.price,
              total_tickets: tier.totalTickets,
              available_tickets: tier.totalTickets,
            }))
          );

        if (tiersError) throw tiersError;

        toast({
          title: "Event updated successfully",
          description: "Your event has been updated!",
        });
      } else {
        // Create new event
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

        // Create ticket tiers
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

        navigate(`/event/${eventData.id}`);
      }

      onSuccess?.();
    } catch (error: any) {
      toast({
        title: eventId ? "Error updating event" : "Error creating event",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  return { onSubmit };
};