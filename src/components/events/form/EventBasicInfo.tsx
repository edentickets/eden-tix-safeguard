import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { FormItem, FormLabel, FormControl, FormMessage, FormField } from "@/components/ui/form";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";

const eventBasicInfoSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  description: z.string().optional(),
  location: z.string().min(3, "Location must be at least 3 characters"),
});

export type EventBasicInfoSchema = z.infer<typeof eventBasicInfoSchema>;

interface EventBasicInfoProps {
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

export const EventBasicInfo = ({ form }: EventBasicInfoProps) => {
  return (
    <div className="space-y-6">
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
    </div>
  );
};