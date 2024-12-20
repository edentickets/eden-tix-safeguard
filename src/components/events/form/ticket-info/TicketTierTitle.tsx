import { Input } from "@/components/ui/input";
import { FormItem, FormLabel, FormControl, FormMessage, FormField } from "@/components/ui/form";
import { UseFormReturn } from "react-hook-form";
import { EventFormValues } from "../eventFormSchema";

interface TicketTierTitleProps {
  form: UseFormReturn<EventFormValues>;
  index: number;
}

export const TicketTierTitle = ({ form, index }: TicketTierTitleProps) => {
  return (
    <FormField
      control={form.control}
      name={`ticketTiers.${index}.title`}
      render={({ field }) => (
        <FormItem>
          <FormLabel>Title</FormLabel>
          <FormControl>
            <Input {...field} placeholder="e.g., General Admission, VIP" />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};