import React, { useEffect, useRef, useState } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

interface QRScannerProps {
  eventId: string;
  onScanSuccess?: () => void;
}

export const QRScanner = ({ eventId, onScanSuccess }: QRScannerProps) => {
  const [scanning, setScanning] = useState(false);
  const scannerRef = useRef<Html5QrcodeScanner | null>(null);

  const handleScanSuccess = async (decodedText: string) => {
    try {
      const response = await fetch('/api/validate-ticket', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          qrCode: decodedText,
          eventId,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Update ticket check-in status
        const { error } = await supabase
          .from('tickets')
          .update({ 
            last_checked_in_at: new Date().toISOString(),
            status: 'used'
          })
          .eq('id', data.ticketId);

        if (error) throw error;

        toast({
          title: "Check-in Successful",
          description: "Ticket has been validated and checked in.",
        });
        
        onScanSuccess?.();
      } else {
        throw new Error(data.message || 'Invalid ticket');
      }
    } catch (error) {
      toast({
        title: "Check-in Failed",
        description: error instanceof Error ? error.message : "Failed to validate ticket",
        variant: "destructive",
      });
    }
  };

  useEffect(() => {
    if (scanning && !scannerRef.current) {
      scannerRef.current = new Html5QrcodeScanner(
        "qr-reader",
        { fps: 10, qrbox: { width: 250, height: 250 } },
        false
      );
      
      scannerRef.current.render(handleScanSuccess, (error) => {
        console.error(error);
      });
    }

    return () => {
      if (scannerRef.current) {
        scannerRef.current.clear();
        scannerRef.current = null;
      }
    };
  }, [scanning]);

  return (
    <div className="w-full max-w-md mx-auto">
      {!scanning ? (
        <Button 
          onClick={() => setScanning(true)}
          className="w-full"
        >
          Start Scanning
        </Button>
      ) : (
        <div className="space-y-4">
          <div id="qr-reader" className="w-full" />
          <Button 
            onClick={() => {
              if (scannerRef.current) {
                scannerRef.current.clear();
                scannerRef.current = null;
              }
              setScanning(false);
            }}
            variant="outline"
            className="w-full"
          >
            Stop Scanning
          </Button>
        </div>
      )}
    </div>
  );
};