import { XCircle } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function CheckoutFailure() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const eventId = searchParams.get("event_id");

  return (
    <div className="min-h-screen bg-eden-dark flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-8 text-center">
        <div className="flex justify-center">
          <XCircle className="h-24 w-24 text-red-500" />
        </div>
        <h1 className="text-4xl font-bold text-white">Payment Failed</h1>
        <p className="text-gray-400">
          We couldn't process your payment. Please try again or contact support if the problem persists.
        </p>
        <div className="space-y-4 pt-4">
          <Button
            className="w-full bg-eden-primary hover:bg-eden-primary/90"
            onClick={() => eventId ? navigate(`/event/${eventId}`) : navigate("/explore")}
          >
            Try Again
          </Button>
          <Button
            variant="outline"
            className="w-full border-eden-primary text-eden-primary hover:bg-eden-primary/10"
            onClick={() => navigate("/explore")}
          >
            Browse Other Events
          </Button>
        </div>
      </div>
    </div>
  );
}