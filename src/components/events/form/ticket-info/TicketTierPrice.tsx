import { Input } from "@/components/ui/input";
import { FormItem, FormLabel, FormControl, FormMessage, FormField } from "@/components/ui/form";
import { UseFormReturn } from "react-hook-form";
import { EventFormValues } from "../eventFormSchema";

interface TicketTierPriceProps {
  form: UseFormReturn<EventFormValues>;
  index: number;
}

export const TicketTierPrice = ({ form, index }: TicketTierPriceProps) => {
  return (
    <FormField
      control={form.control}
      name={`ticketTiers.${index}.price`}
      render={({ field }) => (
        <FormItem>
          <FormLabel>Price per Ticket ($)</FormLabel>
          <FormControl>
            <Input
              type="number"
              {...field}
              onChange={(e) => field.onChange(Number(e.target.value))}
              min="0"
              step="0.01"
              placeholder="Ticket price"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};