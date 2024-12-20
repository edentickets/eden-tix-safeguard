import React, { useEffect, useRef, useState } from 'react';
import { Html5QrcodeScanner, Html5QrcodeSupportedFormats } from 'html5-qrcode';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Card } from '@/components/ui/card';
import { Loader2, QrCode, X } from 'lucide-react';

interface QRScannerProps {
  eventId: string;
  onScanSuccess?: () => void;
}

export const QRScanner = ({ eventId, onScanSuccess }: QRScannerProps) => {
  const [scanning, setScanning] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const scannerRef = useRef<Html5QrcodeScanner | null>(null);

  const handleScanSuccess = async (decodedText: string) => {
    try {
      setIsProcessing(true);
      
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
          title: "✅ Check-in Successful",
          description: "Ticket has been validated and checked in.",
        });
        
        onScanSuccess?.();
      } else {
        throw new Error(data.message || 'Invalid ticket');
      }
    } catch (error) {
      toast({
        title: "❌ Check-in Failed",
        description: error instanceof Error ? error.message : "Failed to validate ticket",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  useEffect(() => {
    if (scanning && !scannerRef.current) {
      scannerRef.current = new Html5QrcodeScanner(
        "qr-reader",
        { 
          fps: 10, 
          qrbox: { width: 250, height: 250 },
          aspectRatio: 1,
          formatsToSupport: [Html5QrcodeSupportedFormats.QR_CODE],
        },
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
    <Card className="p-6 bg-eden-dark/50 border-eden-accent/20">
      {!scanning ? (
        <div className="text-center">
          <QrCode className="w-12 h-12 mx-auto mb-4 text-eden-accent" />
          <h3 className="text-lg font-semibold mb-4">Ready to Scan Tickets</h3>
          <Button 
            onClick={() => setScanning(true)}
            className="w-full bg-eden-accent hover:bg-eden-accent/90"
          >
            Start Scanning
          </Button>
        </div>
      ) : (
        <div className="space-y-4">
          <div id="qr-reader" className="w-full rounded-lg overflow-hidden" />
          {isProcessing && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <Loader2 className="w-8 h-8 animate-spin text-eden-accent" />
            </div>
          )}
          <Button 
            onClick={() => {
              if (scannerRef.current) {
                scannerRef.current.clear();
                scannerRef.current = null;
              }
              setScanning(false);
            }}
            variant="outline"
            className="w-full border-eden-accent text-eden-accent hover:bg-eden-accent/10"
          >
            <X className="w-4 h-4 mr-2" />
            Stop Scanning
          </Button>
        </div>
      )}
    </Card>
  );
};