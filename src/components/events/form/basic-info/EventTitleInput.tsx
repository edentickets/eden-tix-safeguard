import { Input } from "@/components/ui/input";
import { FormItem, FormLabel, FormControl, FormMessage, FormField } from "@/components/ui/form";
import { UseFormReturn } from "react-hook-form";
import { EventFormValues } from "../eventFormSchema";

interface EventTitleInputProps {
  form: UseFormReturn<EventFormValues>;
}

export const EventTitleInput = ({ form }: EventTitleInputProps) => {
  return (
    <FormField
      control={form.control}
      name="title"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Event Title</FormLabel>
          <FormControl>
            <Input
              {...field}
              placeholder="Enter event title"
              className="bg-eden-light/10"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};