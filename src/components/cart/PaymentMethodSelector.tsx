import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { CreditCard, Wallet } from "lucide-react";

interface PaymentMethodSelectorProps {
  value: 'stripe' | 'paypal';
  onChange: (value: 'stripe' | 'paypal') => void;
}

export const PaymentMethodSelector = ({ value, onChange }: PaymentMethodSelectorProps) => (
  <RadioGroup
    value={value}
    onValueChange={(value) => onChange(value as 'stripe' | 'paypal')}
    className="grid grid-cols-2 gap-4"
  >
    <div>
      <RadioGroupItem
        value="stripe"
        id="stripe"
        className="peer sr-only"
      />
      <Label
        htmlFor="stripe"
        className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
      >
        <CreditCard className="mb-2 h-6 w-6" />
        <span className="text-sm font-medium">Card</span>
      </Label>
    </div>
    <div>
      <RadioGroupItem
        value="paypal"
        id="paypal"
        className="peer sr-only"
      />
      <Label
        htmlFor="paypal"
        className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
      >
        <Wallet className="mb-2 h-6 w-6" />
        <span className="text-sm font-medium">PayPal</span>
      </Label>
    </div>
  </RadioGroup>
);