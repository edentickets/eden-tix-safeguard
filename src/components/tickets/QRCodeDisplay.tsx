import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "@/hooks/use-toast";
import { QRCodeSVG } from "qrcode.react";
import { Card } from "@/components/ui/card";
import { Loader2 } from "lucide-react";

interface QRCodeDisplayProps {
  ticketId: string;
  eventId: string;
  eventStartTime: string;
}

export const QRCodeDisplay = ({ ticketId, eventId, eventStartTime }: QRCodeDisplayProps) => {
  const [qrValue, setQrValue] = useState<string>("");
  const [isVisible, setIsVisible] = useState(false);
  const [timeUntilStart, setTimeUntilStart] = useState<string>("");

  // Subscribe to QR code updates
  useEffect(() => {
    const channel = supabase
      .channel(`ticket-${ticketId}`)
      .on(
        "postgres_changes",
        {
          event: "UPDATE",
          schema: "public",
          table: "tickets",
          filter: `id=eq.${ticketId}`,
        },
        (payload) => {
          const newTicket = payload.new;
          if (newTicket.current_qr_code !== qrValue) {
            setQrValue(newTicket.current_qr_code || "");
            toast({
              title: "QR Code Updated",
              description: "Your ticket's QR code has been refreshed for security.",
            });
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [ticketId, qrValue]);

  // Check visibility based on event start time
  useEffect(() => {
    const checkVisibility = () => {
      const now = new Date();
      const start = new Date(eventStartTime);
      const diffInMinutes = (start.getTime() - now.getTime()) / (1000 * 60);

      if (diffInMinutes <= 30 && diffInMinutes > -240) { // Visible 30 min before until 4 hours after
        setIsVisible(true);
        if (diffInMinutes > 0) {
          setTimeUntilStart(`Available in ${Math.ceil(diffInMinutes)} minutes`);
        } else {
          setTimeUntilStart("Available now");
        }
      } else if (diffInMinutes > 30) {
        setIsVisible(false);
        setTimeUntilStart(`Available ${Math.floor(diffInMinutes / 60)} hours ${Math.floor(diffInMinutes % 60)} minutes before event`);
      } else {
        setIsVisible(false);
        setTimeUntilStart("Ticket expired");
      }
    };

    checkVisibility();
    const interval = setInterval(checkVisibility, 60000); // Check every minute
    return () => clearInterval(interval);
  }, [eventStartTime]);

  const { isLoading } = useQuery({
    queryKey: ["ticket-qr", ticketId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("tickets")
        .select("current_qr_code")
        .eq("id", ticketId)
        .single();

      if (error) throw error;
      if (data?.current_qr_code) {
        setQrValue(data.current_qr_code);
      }
      return data;
    },
  });

  if (isLoading) {
    return <Skeleton className="w-64 h-64" />;
  }

  return (
    <Card className="p-6 bg-white rounded-lg shadow-lg">
      {isVisible ? (
        qrValue ? (
          <div className="space-y-4">
            <QRCodeSVG value={qrValue} size={256} level="H" />
            <p className="text-sm text-gray-500 text-center">
              QR code refreshes every 5 minutes for security
            </p>
          </div>
        ) : (
          <div className="w-64 h-64 flex items-center justify-center bg-gray-100 rounded-lg">
            <Loader2 className="w-8 h-8 animate-spin text-gray-400" />
          </div>
        )
      ) : (
        <div className="w-64 h-64 flex items-center justify-center bg-gray-100 rounded-lg">
          <p className="text-gray-500 text-center px-4">{timeUntilStart}</p>
        </div>
      )}
    </Card>
  );
};