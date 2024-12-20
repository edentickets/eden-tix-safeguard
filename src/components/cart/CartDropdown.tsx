import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Minus, Plus, X, Shield, CreditCard } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useNavigate, useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const SecurityDialog = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="ghost" size="sm" className="w-full flex items-center gap-2 text-sm text-gray-600">
        <Shield className="h-4 w-4" />
        How are my tickets protected?
      </Button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Secure Ticketing Technology</DialogTitle>
        <DialogDescription className="space-y-4 pt-4">
          <p>
            Your tickets are protected by our advanced security features:
          </p>
          <ul className="list-disc pl-4 space-y-2">
            <li>Dynamic QR codes that update every 30 seconds</li>
            <li>Blockchain-verified ownership records</li>
            <li>Secure transfer and resale capabilities</li>
            <li>Real-time validation at event check-in</li>
          </ul>
          <p className="text-sm text-gray-500 mt-4">
            All transactions are processed securely through our payment partners, ensuring your financial information stays safe.
          </p>
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog>
);

export function CartDropdown() {
  const { items, removeFromCart, updateQuantity, total } = useCart();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
  const referralCode = searchParams.get('ref');

  const handleCheckout = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        toast({
          title: "Authentication required",
          description: "Please sign in to complete your purchase",
          variant: "destructive",
        });
        return;
      }

      // Group items by event
      const eventItems = items.reduce((acc, item) => {
        if (!acc[item.eventId]) {
          acc[item.eventId] = [];
        }
        acc[item.eventId].push({
          tierId: item.tierId,
          quantity: item.quantity,
        });
        return acc;
      }, {} as Record<string, { tierId: string; quantity: number; }[]>);

      const { data, error } = await supabase.functions.invoke('create-checkout', {
        body: { 
          events: eventItems,
          referralCode: referralCode // Pass referral code if available
        }
      });

      if (error) throw error;

      if (data?.url) {
        window.location.href = data.url;
      }
    } catch (error) {
      console.error('Error creating checkout session:', error);
      toast({
        title: "Error",
        description: "Unable to process your request. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative">
          <ShoppingCart className="h-5 w-5" />
          {items.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-eden-primary text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
              {items.reduce((sum, item) => sum + item.quantity, 0)}
            </span>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80">
        {items.length === 0 ? (
          <div className="p-4 text-center text-gray-500">
            Your cart is empty
          </div>
        ) : (
          <>
            <div className="max-h-96 overflow-auto">
              {items.map((item) => (
                <div key={`${item.eventId}-${item.tierId}`} className="p-4 border-b border-gray-100 last:border-0">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-medium">{item.title}</h4>
                      <p className="text-sm text-gray-500">${item.price}</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeFromCart(item.eventId, item.tierId)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => updateQuantity(item.eventId, item.tierId, item.quantity - 1)}
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => updateQuantity(item.eventId, item.tierId, item.quantity + 1)}
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 border-t border-gray-100">
              <div className="flex justify-between items-center mb-4">
                <span className="font-medium">Total:</span>
                <span className="font-bold">${total.toFixed(2)}</span>
              </div>
              <div className="space-y-2">
                <SecurityDialog />
                <div className="flex items-center gap-2 text-sm text-gray-600 justify-center mb-4">
                  <CreditCard className="h-4 w-4" />
                  <span>Secure payment with cards & digital wallets</span>
                </div>
                <Button className="w-full" onClick={handleCheckout}>
                  Checkout
                </Button>
              </div>
            </div>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}