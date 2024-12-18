import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface QRCodeDisplayProps {
  ticketId: string;
  showQR: boolean;
}

export const QRCodeDisplay = ({ ticketId, showQR }: QRCodeDisplayProps) => {
  const [qrCode, setQrCode] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const generateQRCode = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase.functions.invoke('generate-qr', {
        body: { ticketId },
      });

      if (error) throw error;
      setQrCode(data.qrCode);
    } catch (error) {
      toast({
        title: "Error generating QR code",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  // Subscribe to real-time updates
  useEffect(() => {
    if (!showQR) return;

    const channel = supabase
      .channel('ticket-updates')
      .on(
        'postgres_changes',
        {
          event: 'UPDATE',
          schema: 'public',
          table: 'tickets',
          filter: `id=eq.${ticketId}`,
        },
        (payload) => {
          setQrCode(payload.new.current_qr_code);
        }
      )
      .subscribe();

    // Generate initial QR code
    generateQRCode();

    // Set up interval for QR code regeneration (every 30 seconds)
    const interval = setInterval(generateQRCode, 30000);

    return () => {
      clearInterval(interval);
      supabase.removeChannel(channel);
    };
  }, [ticketId, showQR]);

  if (!showQR) {
    return (
      <div className="p-8 text-center">
        <p className="text-gray-500">
          QR code will be available shortly before the event
        </p>
      </div>
    );
  }

  return (
    <div className="p-4 flex flex-col items-center justify-center">
      {loading ? (
        <Loader2 className="w-8 h-8 animate-spin text-eden-primary" />
      ) : qrCode ? (
        <div className="relative">
          <img
            src={`data:image/png;base64,${qrCode}`}
            alt="Ticket QR Code"
            className="w-64 h-64"
          />
          <div className="mt-2 text-center text-sm text-gray-500">
            QR Code updates every 30 seconds
          </div>
        </div>
      ) : (
        <div className="text-red-500">Failed to load QR code</div>
      )}
    </div>
  );
};