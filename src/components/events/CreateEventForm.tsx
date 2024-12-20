import { Button } from "@/components/ui/button";
import { EventBasicInfo } from "./form/EventBasicInfo";
import { EventDatePicker } from "./form/EventDatePicker";
import { EventTicketInfo } from "./form/EventTicketInfo";
import { EventPromotionalTools } from "./form/EventPromotionalTools";
import { EventPreview } from "./form/EventPreview";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { eventFormSchema, defaultValues, EventFormValues } from "./form/eventFormSchema";
import { useEventFormSubmit } from "./form/useEventFormSubmit";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

interface CreateEventFormProps {
  eventId?: string;
  onSuccess?: () => void;
}

export const CreateEventForm = ({ eventId, onSuccess }: CreateEventFormProps) => {
  const [activeTab, setActiveTab] = useState("details");
  const { toast } = useToast();
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
          imageUrl: event.image_url || '',
          primaryColor: event.primary_color || '#D4AF37',
          secondaryColor: event.secondary_color || '#000000',
          backgroundColor: event.background_color || '#121212',
          textColor: event.text_color || '#FFFFFF',
          headingColor: event.heading_color || '#FFFFFF',
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
      toast({
        title: eventId ? "Event Updated" : "Event Created",
        description: eventId 
          ? "Your event has been updated successfully." 
          : "Your event has been created and is now live!",
      });
    },
  });

  const handleTabChange = (value: string) => {
    // Validate current tab before moving to the next
    if (value !== activeTab) {
      const currentFields = getFieldsByTab(activeTab);
      const isValid = currentFields.every(field => !form.formState.errors[field]);
      
      if (!isValid) {
        toast({
          title: "Please fix the errors",
          description: "There are some issues that need to be resolved before proceeding.",
          variant: "destructive",
        });
        return;
      }
      setActiveTab(value);
    }
  };

  const getFieldsByTab = (tab: string): Array<keyof EventFormValues> => {
    switch (tab) {
      case "details":
        return ["title", "description", "location", "imageUrl"];
      case "dates":
        return ["startDate", "endDate"];
      case "tickets":
        return ["ticketTiers"];
      default:
        return [];
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
          <TabsList className="grid grid-cols-4 gap-4 bg-eden-light/5">
            <TabsTrigger value="details">Event Details</TabsTrigger>
            <TabsTrigger value="dates">Date & Time</TabsTrigger>
            <TabsTrigger value="tickets">Tickets</TabsTrigger>
            <TabsTrigger value="preview">Preview</TabsTrigger>
          </TabsList>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-6"
          >
            <TabsContent value="details">
              <EventBasicInfo form={form} />
            </TabsContent>

            <TabsContent value="dates">
              <EventDatePicker form={form} />
            </TabsContent>

            <TabsContent value="tickets">
              <EventTicketInfo form={form} />
              <EventPromotionalTools />
            </TabsContent>

            <TabsContent value="preview">
              <EventPreview formValues={form.getValues()} />
            </TabsContent>
          </motion.div>
        </Tabs>

        <div className="flex justify-between pt-6">
          {activeTab !== "details" && (
            <Button 
              type="button" 
              variant="outline"
              onClick={() => {
                const tabs = ["details", "dates", "tickets", "preview"];
                const currentIndex = tabs.indexOf(activeTab);
                handleTabChange(tabs[currentIndex - 1]);
              }}
            >
              Previous
            </Button>
          )}
          
          {activeTab === "preview" ? (
            <Button 
              type="submit"
              className="ml-auto"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? 
                (eventId ? "Updating Event..." : "Publishing Event...") : 
                (eventId ? "Update Event" : "Publish Event")}
            </Button>
          ) : (
            <Button 
              type="button"
              onClick={() => {
                const tabs = ["details", "dates", "tickets", "preview"];
                const currentIndex = tabs.indexOf(activeTab);
                handleTabChange(tabs[currentIndex + 1]);
              }}
              className={activeTab === "details" ? "w-full" : "ml-auto"}
            >
              Next
            </Button>
          )}
        </div>
      </form>
    </Form>
  );
};