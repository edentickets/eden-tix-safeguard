import { Database } from "../database.types";

export type MessageRow = Database["public"]["Tables"]["messages"]["Row"];
export type EmailCampaignRow = Database["public"]["Tables"]["email_campaigns"]["Row"];
export type EmailPreferenceRow = Database["public"]["Tables"]["email_preferences"]["Row"];

export interface MessagingTypes {
  messages: {
    Row: MessageRow;
  };
  email_campaigns: {
    Row: EmailCampaignRow;
  };
  email_preferences: {
    Row: EmailPreferenceRow;
  };
}