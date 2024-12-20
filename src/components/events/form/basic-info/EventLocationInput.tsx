import { Input } from "@/components/ui/input";
import { FormItem, FormLabel, FormControl, FormMessage, FormField } from "@/components/ui/form";
import { UseFormReturn } from "react-hook-form";
import { EventFormValues } from "../eventFormSchema";

interface EventLocationInputProps {
  form: UseFormReturn<EventFormValues>;
}

export const EventLocationInput = ({ form }: EventLocationInputProps) => {
  return (
    <FormField
      control={form.control}
      name="location"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Location</FormLabel>
          <FormControl>
            <Input
              {...field}
              placeholder="Event location"
              className="bg-eden-light/10"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};