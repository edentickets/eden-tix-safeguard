import { Button } from "@/components/ui/button";
import { UseFormReturn, useFieldArray } from "react-hook-form";
import { EventFormValues } from "./eventFormSchema";
import { TicketTierForm } from "./ticket-info/TicketTierForm";
import { PlusCircle } from "lucide-react";

interface EventTicketInfoProps {
  form: UseFormReturn<EventFormValues>;
}

export const EventTicketInfo = ({ form }: EventTicketInfoProps) => {
  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "ticketTiers"
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Ticket Tiers</h3>
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => append({ title: "", description: "", price: 0, totalTickets: 1 })}
        >
          <PlusCircle className="h-4 w-4 mr-2" />
          Add Tier
        </Button>
      </div>

      {fields.map((field, index) => (
        <TicketTierForm
          key={field.id}
          form={form}
          index={index}
          onRemove={() => remove(index)}
          canRemove={index > 0}
        />
      ))}
    </div>
  );
};