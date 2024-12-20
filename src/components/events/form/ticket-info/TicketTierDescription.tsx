import { Textarea } from "@/components/ui/textarea";
import { FormItem, FormLabel, FormControl, FormMessage, FormField } from "@/components/ui/form";
import { UseFormReturn } from "react-hook-form";
import { EventFormValues } from "../eventFormSchema";

interface TicketTierDescriptionProps {
  form: UseFormReturn<EventFormValues>;
  index: number;
}

export const TicketTierDescription = ({ form, index }: TicketTierDescriptionProps) => {
  return (
    <FormField
      control={form.control}
      name={`ticketTiers.${index}.description`}
      render={({ field }) => (
        <FormItem>
          <FormLabel>Description</FormLabel>
          <FormControl>
            <Textarea {...field} placeholder="Describe what's included in this ticket tier" />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};