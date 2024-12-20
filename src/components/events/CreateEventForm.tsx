import { Button } from "@/components/ui/button";
import { EventBasicInfo } from "./form/EventBasicInfo";
import { EventDatePicker } from "./form/EventDatePicker";
import { EventTicketInfo } from "./form/EventTicketInfo";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { eventFormSchema, defaultValues, EventFormValues } from "./form/eventFormSchema";
import { useEventFormSubmit } from "./form/useEventFormSubmit";
import { useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

interface CreateEventFormProps {
  eventId?: string;
  onSuccess?: () => void;
}

export const CreateEventForm = ({ eventId, onSuccess }: CreateEventFormProps) => {
  const form = useForm<EventFormValues>({
    resolver: zodResolver(eventFormSchema),
    defaultValues,
  });

  useEffect(() => {
    const fetchEvent = async () => {
      if (!eventId) return;

      const { data: event, error } = await supabase
        .from('events')
        .select(`
          *,
          ticket_tiers (*)
        `)
        .eq('id', eventId)
        .single();

      if (error) {
        console.error('Error fetching event:', error);
        return;
      }

      if (event) {
        form.reset({
          title: event.title,
          description: event.description || '',
          location: event.location,
          startDate: new Date(event.start_date),
          endDate: new Date(event.end_date),
          ticketTiers: event.ticket_tiers.map((tier: any) => ({
            title: tier.title,
            description: tier.description || '',
            price: tier.price,
            totalTickets: tier.total_tickets
          }))
        });
      }
    };

    fetchEvent();
  }, [eventId, form]);

  const { onSubmit } = useEventFormSubmit({
    eventId,
    onSuccess: () => {
      form.reset();
      onSuccess?.();
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <EventBasicInfo form={form} />
        <EventDatePicker form={form} />
        <EventTicketInfo form={form} />

        <Button 
          type="submit" 
          className="w-full"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? 
            (eventId ? "Updating Event..." : "Creating Event...") : 
            (eventId ? "Update Event" : "Create Event")}
        </Button>
      </form>
    </Form>
  );
};