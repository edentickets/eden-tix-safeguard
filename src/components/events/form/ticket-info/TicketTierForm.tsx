import { Button } from "@/components/ui/button";
import { UseFormReturn } from "react-hook-form";
import { EventFormValues } from "../eventFormSchema";
import { TicketTierTitle } from "./TicketTierTitle";
import { TicketTierDescription } from "./TicketTierDescription";
import { TicketTierQuantity } from "./TicketTierQuantity";
import { TicketTierPrice } from "./TicketTierPrice";
import { Trash2 } from "lucide-react";

interface TicketTierFormProps {
  form: UseFormReturn<EventFormValues>;
  index: number;
  onRemove: () => void;
  canRemove: boolean;
}

export const TicketTierForm = ({ form, index, onRemove, canRemove }: TicketTierFormProps) => {
  return (
    <div className="p-4 border rounded-lg space-y-4">
      <div className="flex items-center justify-between">
        <h4 className="font-medium">Ticket Tier {index + 1}</h4>
        {canRemove && (
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={onRemove}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        )}
      </div>

      <TicketTierTitle form={form} index={index} />
      <TicketTierDescription form={form} index={index} />
      
      <div className="grid grid-cols-2 gap-4">
        <TicketTierQuantity form={form} index={index} />
        <TicketTierPrice form={form} index={index} />
      </div>
    </div>
  );
};