import { Input } from "@/components/ui/input";
import { FormItem, FormLabel, FormControl, FormMessage, FormField } from "@/components/ui/form";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";

const eventTicketSchema = z.object({
  totalTickets: z.number().min(1, "Must have at least 1 ticket"),
  price: z.number().min(0, "Price cannot be negative"),
});

export type EventTicketSchema = z.infer<typeof eventTicketSchema>;

interface EventTicketInfoProps {
  form: UseFormReturn<{
    title: string;
    description: string;
    location: string;
    startDate: Date;
    endDate: Date;
    totalTickets: number;
    price: number;
  }>;
}

export const EventTicketInfo = ({ form }: EventTicketInfoProps) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <FormField
        control={form.control}
        name="totalTickets"
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

      <FormField
        control={form.control}
        name="price"
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
    </div>
  );
};