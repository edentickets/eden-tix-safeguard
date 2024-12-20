import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export default function CheckoutSuccess() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { toast } = useToast();
  const sessionId = searchParams.get("session_id");

  useEffect(() => {
    if (!sessionId) {
      toast({
        title: "Invalid checkout session",
        description: "Please try purchasing tickets again.",
        variant: "destructive",
      });
      navigate("/");
    }
  }, [sessionId, navigate, toast]);

  return (
    <div className="min-h-screen bg-eden-dark flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-8 text-center">
        <div className="flex justify-center">
          <CheckCircle className="h-24 w-24 text-eden-primary" />
        </div>
        <h1 className="text-4xl font-bold text-white">Purchase Successful!</h1>
        <p className="text-gray-400">
          Your tickets have been purchased successfully. You can view them in your profile.
        </p>
        <div className="space-y-4 pt-4">
          <Button
            className="w-full bg-eden-primary hover:bg-eden-primary/90"
            onClick={() => navigate("/profile")}
          >
            View My Tickets
          </Button>
          <Button
            variant="outline"
            className="w-full border-eden-primary text-eden-primary hover:bg-eden-primary/10"
            onClick={() => navigate("/explore")}
          >
            Explore More Events
          </Button>
        </div>
      </div>
    </div>
  );
}