import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "@/hooks/use-toast";
import { QRCodeSVG } from "qrcode.react";

interface QRCodeDisplayProps {
  ticketId: string;
  eventId: string;
}

export const QRCodeDisplay = ({ ticketId, eventId }: QRCodeDisplayProps) => {
  const [qrValue, setQrValue] = useState<string>("");

  const { data: ticket, isLoading } = useQuery({
    queryKey: ["ticket", ticketId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("tickets")
        .select("*")
        .eq("id", ticketId)
        .single();

      if (error) throw error;
      return data;
    },
  });

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
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [ticketId, qrValue]);

  useEffect(() => {
    const generateQR = async () => {
      try {
        const response = await fetch("/api/generate-qr", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ticketId, eventId }),
        });

        if (!response.ok) {
          throw new Error("Failed to generate QR code");
        }

        const data = await response.json();
        setQrValue(data.qrCode);
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to generate QR code. Please try again.",
          variant: "destructive",
        });
      }
    };

    const interval = setInterval(generateQR, 30000); // Generate new QR code every 30 seconds
    generateQR(); // Generate initial QR code

    return () => clearInterval(interval);
  }, [ticketId, eventId]);

  if (isLoading) {
    return <Skeleton className="w-64 h-64" />;
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      {qrValue ? (
        <QRCodeSVG value={qrValue} size={256} level="H" />
      ) : (
        <div className="w-64 h-64 flex items-center justify-center bg-gray-100 rounded-lg">
          <p className="text-gray-500">Loading QR code...</p>
        </div>
      )}
    </div>
  );
};