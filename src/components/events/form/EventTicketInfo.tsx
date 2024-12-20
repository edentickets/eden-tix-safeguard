import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FormItem, FormLabel, FormControl, FormMessage, FormField } from "@/components/ui/form";
import { UseFormReturn, useFieldArray } from "react-hook-form";
import { EventFormValues } from "./eventFormSchema";
import { PlusCircle, Trash2 } from "lucide-react";

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
        <div key={field.id} className="p-4 border rounded-lg space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="font-medium">Ticket Tier {index + 1}</h4>
            {index > 0 && (
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => remove(index)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            )}
          </div>

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

          <div className="grid grid-cols-2 gap-4">
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
          </div>
        </div>
      ))}
    </div>
  );
};