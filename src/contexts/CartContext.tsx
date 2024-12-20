import { createContext, useContext, useState, ReactNode } from "react";
import { toast } from "@/components/ui/use-toast";

interface CartItem {
  eventId: string;
  tierId: string;
  title: string;
  price: number;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  removeFromCart: (eventId: string, tierId: string) => void;
  updateQuantity: (eventId: string, tierId: string, quantity: number) => void;
  clearCart: () => void;
  total: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (newItem: Omit<CartItem, "quantity">) => {
    setItems(currentItems => {
      const existingItem = currentItems.find(
        item => item.eventId === newItem.eventId && item.tierId === newItem.tierId
      );

      if (existingItem) {
        return currentItems.map(item =>
          item.eventId === newItem.eventId && item.tierId === newItem.tierId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...currentItems, { ...newItem, quantity: 1 }];
    });

    toast({
      title: "Added to cart",
      description: `${newItem.title} has been added to your cart.`,
    });
  };

  const removeFromCart = (eventId: string, tierId: string) => {
    setItems(items => items.filter(
      item => !(item.eventId === eventId && item.tierId === tierId)
    ));
  };

  const updateQuantity = (eventId: string, tierId: string, quantity: number) => {
    if (quantity < 1) return;
    
    setItems(items => items.map(item =>
      item.eventId === eventId && item.tierId === tierId
        ? { ...item, quantity }
        : item
    ));
  };

  const clearCart = () => setItems([]);

  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const value = {
    items,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    total
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}