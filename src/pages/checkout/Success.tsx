import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader2, CheckCircle2, Ticket } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

export default function CheckoutSuccess() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isVerifying, setIsVerifying] = useState(true);

  useEffect(() => {
    const verifySession = async () => {
      try {
        const sessionId = searchParams.get("session_id");
        if (!sessionId) {
          toast({
            title: "Invalid session",
            description: "No session ID found",
            variant: "destructive",
          });
          navigate("/explore");
          return;
        }

        // Wait a moment to ensure webhook has processed
        await new Promise(resolve => setTimeout(resolve, 2000));

        setIsVerifying(false);
      } catch (error) {
        console.error("Error verifying session:", error);
        toast({
          title: "Verification failed",
          description: "Unable to verify your purchase",
          variant: "destructive",
        });
        navigate("/explore");
      }
    };

    verifySession();
  }, [searchParams, navigate, toast]);

  if (isVerifying) {
    return (
      <div className="min-h-screen bg-eden-dark flex items-center justify-center">
        <Card className="p-8 max-w-md w-full bg-eden-light/10">
          <div className="flex flex-col items-center gap-4">
            <Loader2 className="h-8 w-8 animate-spin text-eden-primary" />
            <h2 className="text-xl font-semibold text-white">Verifying payment...</h2>
            <p className="text-gray-400 text-center">
              Please wait while we confirm your purchase
            </p>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-eden-dark flex items-center justify-center">
      <Card className="p-8 max-w-md w-full bg-eden-light/10">
        <div className="flex flex-col items-center gap-6">
          <CheckCircle2 className="h-16 w-16 text-green-500" />
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-2">
              Payment Successful!
            </h2>
            <p className="text-gray-400">
              Thank you for your purchase. Your tickets are now available in your profile.
            </p>
          </div>
          <div className="flex gap-4 w-full">
            <Button 
              className="flex-1" 
              variant="default"
              onClick={() => navigate("/profile")}
            >
              <Ticket className="mr-2 h-4 w-4" />
              View Tickets
            </Button>
            <Button 
              className="flex-1" 
              variant="outline"
              onClick={() => navigate("/explore")}
            >
              Browse Events
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}