import { z } from "zod";

export const eventFormSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  description: z.string().optional(),
  location: z.string().min(3, "Location must be at least 3 characters"),
  startDate: z.date({
    required_error: "Start date is required",
  }),
  endDate: z.date({
    required_error: "End date is required",
  }),
  totalTickets: z.number().min(1, "Must have at least 1 ticket"),
  price: z.number().min(0, "Price cannot be negative"),
  imageUrl: z.string().optional(),
}).refine((data) => data.endDate >= data.startDate, {
  message: "End date must be after start date",
  path: ["endDate"],
});

export type EventFormValues = z.infer<typeof eventFormSchema>;

export const defaultValues: EventFormValues = {
  title: "",
  description: "",
  location: "",
  startDate: new Date(),
  endDate: new Date(),
  totalTickets: 1,
  price: 0,
  imageUrl: "",
};