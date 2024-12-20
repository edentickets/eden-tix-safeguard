import { Button } from "@/components/ui/button";
import { EventBasicInfo } from "./form/EventBasicInfo";
import { EventDatePicker } from "./form/EventDatePicker";
import { EventTicketInfo } from "./form/EventTicketInfo";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { eventFormSchema, defaultValues, EventFormValues } from "./form/eventFormSchema";
import { useEventFormSubmit } from "./form/useEventFormSubmit";

interface CreateEventFormProps {
  onSuccess?: () => void;
}

export const CreateEventForm = ({ onSuccess }: CreateEventFormProps) => {
  const form = useForm<EventFormValues>({
    resolver: zodResolver(eventFormSchema),
    defaultValues,
  });

  const { onSubmit } = useEventFormSubmit({
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
          {form.formState.isSubmitting ? "Creating Event..." : "Create Event"}
        </Button>
      </form>
    </Form>
  );
};