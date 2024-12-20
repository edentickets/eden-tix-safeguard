import { Button } from "@/components/ui/button";
import { Minus, Plus, X } from "lucide-react";

interface CartItemProps {
  item: {
    eventId: string;
    tierId: string;
    title: string;
    price: number;
    quantity: number;
  };
  onRemove: (eventId: string, tierId: string) => void;
  onUpdateQuantity: (eventId: string, tierId: string, quantity: number) => void;
}

export const CartItem = ({ item, onRemove, onUpdateQuantity }: CartItemProps) => (
  <div className="p-4 border-b border-gray-100 last:border-0">
    <div className="flex justify-between items-start mb-2">
      <div>
        <h4 className="font-medium">{item.title}</h4>
        <p className="text-sm text-gray-500">${item.price}</p>
      </div>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => onRemove(item.eventId, item.tierId)}
      >
        <X className="h-4 w-4" />
      </Button>
    </div>
    <div className="flex items-center gap-2">
      <Button
        variant="outline"
        size="sm"
        onClick={() => onUpdateQuantity(item.eventId, item.tierId, item.quantity - 1)}
      >
        <Minus className="h-3 w-3" />
      </Button>
      <span className="w-8 text-center">{item.quantity}</span>
      <Button
        variant="outline"
        size="sm"
        onClick={() => onUpdateQuantity(item.eventId, item.tierId, item.quantity + 1)}
      >
        <Plus className="h-3 w-3" />
      </Button>
    </div>
  </div>
);