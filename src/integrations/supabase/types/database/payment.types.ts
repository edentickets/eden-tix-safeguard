import { Database } from "../database.types";

export type PaymentPlanRow = Database["public"]["Tables"]["payment_plans"]["Row"];

export interface PaymentTypes {
  payment_plans: {
    Row: PaymentPlanRow;
  };
}