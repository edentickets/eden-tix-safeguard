import { z } from "zod";

const ticketTierSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  description: z.string().optional(),
  price: z.number().min(0, "Price cannot be negative"),
  totalTickets: z.number().min(1, "Must have at least 1 ticket"),
});

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
  imageUrl: z.string().optional(),
  primaryColor: z.string().optional(),
  secondaryColor: z.string().optional(),
  backgroundColor: z.string().optional(),
  textColor: z.string().optional(),
  headingColor: z.string().optional(),
  ticketTiers: z.array(ticketTierSchema).min(1, "At least one ticket tier is required"),
}).refine((data) => data.endDate >= data.startDate, {
  message: "End date must be after start date",
  path: ["endDate"],
});

export type EventFormValues = z.infer<typeof eventFormSchema>;
export type TicketTierFormValues = z.infer<typeof ticketTierSchema>;

export const defaultValues: EventFormValues = {
  title: "",
  description: "",
  location: "",
  startDate: new Date(),
  endDate: new Date(),
  imageUrl: "",
  primaryColor: "#D4AF37",
  secondaryColor: "#000000",
  backgroundColor: "#121212",
  textColor: "#FFFFFF",
  headingColor: "#FFFFFF",
  ticketTiers: [{
    title: "",
    description: "",
    price: 0,
    totalTickets: 1,
  }],
};