import { Textarea } from "@/components/ui/textarea";
import { FormItem, FormLabel, FormControl, FormMessage, FormField } from "@/components/ui/form";
import { UseFormReturn } from "react-hook-form";
import { EventFormValues } from "../eventFormSchema";

interface EventDescriptionInputProps {
  form: UseFormReturn<EventFormValues>;
}

export const EventDescriptionInput = ({ form }: EventDescriptionInputProps) => {
  return (
    <FormField
      control={form.control}
      name="description"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Description</FormLabel>
          <FormControl>
            <Textarea
              {...field}
              placeholder="Describe your event"
              className="min-h-[100px] bg-eden-light/10"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};