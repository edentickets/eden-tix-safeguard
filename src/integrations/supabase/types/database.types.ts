import { AuthTypes } from "./database/auth.types";
import { EventTypes } from "./database/events.types";
import { TicketTypes } from "./database/tickets.types";
import { PromoterTypes } from "./database/promoters.types";
import { LoyaltyTypes } from "./database/loyalty.types";
import { MessagingTypes } from "./database/messaging.types";
import { WaitlistTypes } from "./database/waitlist.types";
import { PaymentTypes } from "./database/payment.types";

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: AuthTypes &
    EventTypes &
    TicketTypes &
    PromoterTypes &
    LoyaltyTypes &
    MessagingTypes &
    WaitlistTypes &
    PaymentTypes;
}