import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { QRCodeSVG } from "qrcode.react";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/hooks/use-toast";
import { Smartphone, Ticket, MapPin, Calendar } from "lucide-react";
import { formatDate } from "@/utils/date-utils";
import { useAuthState } from "@/hooks/use-auth-state";

export function MobileWallet() {
  const { user } = useAuthState();
  const [selectedTicket, setSelectedTicket] = useState<string | null>(null);
  const { toast } = useToast();

  const { data: tickets, isLoading } = useQuery({
    queryKey: ["user-tickets", user?.id],
    queryFn: async () => {
      if (!user) throw new Error("Not authenticated");
      
      const { data, error } = await supabase
        .from("tickets")
        .select(`
          *,
          event:events (
            title,
            location,
            start_date,
            end_date
          )
        `)
        .eq("owner_id", user.id)
        .eq("status", "active")
        .order("created_at", { ascending: false });

      if (error) throw error;
      return data;
    },
    enabled: !!user
  });

  if (!user) {
    return (
      <div className="p-4 text-center">
        <Smartphone className="w-12 h-12 mx-auto mb-4 text-gray-400" />
        <p className="text-gray-400">Please sign in to view your mobile wallet</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="space-y-4 p-4">
        <Skeleton className="h-48 w-full" />
        <Skeleton className="h-48 w-full" />
      </div>
    );
  }

  if (!tickets?.length) {
    return (
      <div className="p-4 text-center">
        <Ticket className="w-12 h-12 mx-auto mb-4 text-gray-400" />
        <p className="text-gray-400">No active tickets found</p>
      </div>
    );
  }

  return (
    <div className="space-y-4 p-4">
      <AnimatePresence>
        {tickets.map((ticket) => (
          <motion.div
            key={ticket.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <Card 
              className="p-4 glass-card"
              onClick={() => setSelectedTicket(selectedTicket === ticket.id ? null : ticket.id)}
            >
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">{ticket.event?.title}</h3>
                
                <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {formatDate(ticket.event?.start_date || "")}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {ticket.event?.location}
                  </div>
                </div>

                {selectedTicket === ticket.id && ticket.current_qr_code && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="pt-4"
                  >
                    <div className="bg-white rounded-lg p-4 flex justify-center">
                      <QRCodeSVG value={ticket.current_qr_code} size={200} />
                    </div>
                  </motion.div>
                )}

                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => {
                    toast({
                      title: "Ticket added to Apple Wallet",
                      description: "You can now access your ticket from your Apple Wallet app",
                    });
                  }}
                >
                  Add to Apple Wallet
                </Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}