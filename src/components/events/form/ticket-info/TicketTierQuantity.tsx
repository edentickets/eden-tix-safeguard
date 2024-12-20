import { Input } from "@/components/ui/input";
import { FormItem, FormLabel, FormControl, FormMessage, FormField } from "@/components/ui/form";
import { UseFormReturn } from "react-hook-form";
import { EventFormValues } from "../eventFormSchema";

interface TicketTierQuantityProps {
  form: UseFormReturn<EventFormValues>;
  index: number;
}

export const TicketTierQuantity = ({ form, index }: TicketTierQuantityProps) => {
  return (
    <FormField
      control={form.control}
      name={`ticketTiers.${index}.totalTickets`}
      render={({ field }) => (
        <FormItem>
          <FormLabel>Total Tickets</FormLabel>
          <FormControl>
            <Input
              type="number"
              {...field}
              onChange={(e) => field.onChange(Number(e.target.value))}
              min="1"
              placeholder="Number of tickets"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};