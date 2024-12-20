import { Button } from "@/components/ui/button";
import { Building2 } from "lucide-react";

export function PayoutHeader() {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Payouts</h1>
        <p className="text-gray-400">
          Track your earnings and manage payment settings
        </p>
      </div>
      <Button className="bg-eden-primary hover:bg-eden-primary/90">
        <Building2 className="w-4 h-4 mr-2" />
        Update Payment Info
      </Button>
    </div>
  );
}