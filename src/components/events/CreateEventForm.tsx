import { useNavigate } from "react-router-dom";
import { useSession } from "@supabase/auth-helpers-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { EventBasicInfo } from "./form/EventBasicInfo";
import { EventDatePicker } from "./form/EventDatePicker";
import { EventTicketInfo } from "./form/EventTicketInfo";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form } from "@/components/ui/form";

export const eventFormSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  description: z.string().optional(),
  location: z.string().min(3, "Location must be at least 3 characters"),
  startDate: z.date({
    required_error: "Start date is required",
  }),
  endDate: z.date({
    required_error: "End date is required",
  }),
  totalTickets: z.number().min(1, "Must have at least 1 ticket"),
  price: z.number().min(0, "Price cannot be negative"),
}).refine((data) => data.endDate >= data.startDate, {
  message: "End date must be after start date",
  path: ["endDate"],
});

export type EventFormValues = z.infer<typeof eventFormSchema>;

const defaultValues: EventFormValues = {
  title: "",
  description: "",
  location: "",
  startDate: new Date(),
  endDate: new Date(),
  totalTickets: 1,
  price: 0,
};

export const CreateEventForm = () => {
  const session = useSession();
  const navigate = useNavigate();
  const { toast } = useToast();

  const form = useForm<EventFormValues>({
    resolver: zodResolver(eventFormSchema),
    defaultValues,
  });

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

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 max-w-2xl mx-auto">
        <EventBasicInfo form={form} />
        <EventDatePicker form={form} />
        <EventTicketInfo form={form} />

        <Button 
          type="submit" 
          className="w-full"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? "Creating Event..." : "Create Event"}
        </Button>
      </form>
    </Form>
  );
};