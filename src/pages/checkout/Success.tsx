import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Check, ArrowRight } from "lucide-react";

export default function CheckoutSuccess() {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isVerifying, setIsVerifying] = useState(true);

  useEffect(() => {
    const verifySession = async () => {
      if (!sessionId) {
        toast({
          variant: "destructive",
          title: "Invalid session",
          description: "No session ID found. Please try purchasing again.",
        });
        navigate("/explore");
        return;
      }

      try {
        const { data, error } = await supabase
          .from("tickets")
          .select("*")
          .eq("stripe_session_id", sessionId)
          .single();

        if (error || !data) {
          throw new Error("Could not verify ticket purchase");
        }

        setIsVerifying(false);
      } catch (error) {
        toast({
          variant: "destructive",
          title: "Verification failed",
          description: "Could not verify your ticket purchase. Please contact support.",
        });
        navigate("/explore");
      }
    };

    verifySession();
  }, [sessionId, navigate, toast]);

  if (isVerifying) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-center">
          <p className="text-lg text-gray-400">Verifying your purchase...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="max-w-lg w-full p-8 space-y-6 text-center">
        <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
          <Check className="w-8 h-8 text-green-600" />
        </div>
        
        <h1 className="text-2xl font-bold">Payment Successful!</h1>
        <p className="text-gray-500">
          Thank you for your purchase. Your tickets are now available in your profile.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button onClick={() => navigate("/profile")} className="flex-1">
            View My Tickets
          </Button>
          <Button 
            variant="outline" 
            onClick={() => navigate("/explore")}
            className="flex-1 group"
          >
            Explore More Events
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </Card>
    </div>
  );
}