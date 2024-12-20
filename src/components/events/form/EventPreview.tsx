import { EventHero } from "@/components/event/EventHero";
import { TicketTiers } from "@/components/event/TicketTiers";
import { EventFormValues } from "./eventFormSchema";

interface EventPreviewProps {
  formValues: EventFormValues;
}

export const EventPreview = ({ formValues }: EventPreviewProps) => {
  // Transform form values to match the Event interface
  const previewEvent = {
    id: "preview",
    creator_id: "preview",
    title: formValues.title,
    description: formValues.description,
    location: formValues.location,
    start_date: formValues.startDate.toISOString(),
    end_date: formValues.endDate.toISOString(),
    image_url: formValues.imageUrl,
    promo_banner_url: formValues.imageUrl,
    total_tickets: formValues.ticketTiers.reduce((sum, tier) => sum + tier.totalTickets, 0),
    available_tickets: formValues.ticketTiers.reduce((sum, tier) => sum + tier.totalTickets, 0),
    price: Math.min(...formValues.ticketTiers.map(tier => tier.price)),
    primary_color: formValues.primaryColor,
    secondary_color: formValues.secondaryColor,
    background_color: formValues.backgroundColor,
    text_color: formValues.textColor,
    heading_color: formValues.headingColor,
  };

  const previewTiers = formValues.ticketTiers.map((tier, index) => ({
    id: `preview-${index}`,
    event_id: previewEvent.id, // Add event_id here
    title: tier.title,
    description: tier.description,
    price: tier.price,
    total_tickets: tier.totalTickets,
    available_tickets: tier.totalTickets,
  }));

  return (
    <div className="space-y-8">
      <div className="text-sm text-gray-400 italic">
        Preview how your event page will appear to attendees
      </div>
      
      <div className="border border-eden-light/10 rounded-lg overflow-hidden">
        <EventHero event={previewEvent} isCreator={true} />
        <TicketTiers tiers={previewTiers} />
      </div>
    </div>
  );
};