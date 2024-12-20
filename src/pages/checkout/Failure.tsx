import { useNavigate, useSearchParams } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { XCircle, RotateCcw } from "lucide-react";

export default function CheckoutFailure() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const eventId = searchParams.get("event_id");

  return (
    <div className="min-h-screen bg-eden-dark flex items-center justify-center">
      <Card className="p-8 max-w-md w-full bg-eden-light/10">
        <div className="flex flex-col items-center gap-6">
          <XCircle className="h-16 w-16 text-red-500" />
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-2">
              Payment Failed
            </h2>
            <p className="text-gray-400">
              We couldn't process your payment. Please try again or choose a different payment method.
            </p>
          </div>
          <div className="flex gap-4 w-full">
            <Button 
              className="flex-1" 
              variant="default"
              onClick={() => navigate(eventId ? `/event/${eventId}` : "/explore")}
            >
              <RotateCcw className="mr-2 h-4 w-4" />
              Try Again
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