import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";

export const SecurityDialog = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="ghost" size="sm" className="w-full flex items-center gap-2 text-sm text-gray-600">
        <Shield className="h-4 w-4" />
        How are my tickets protected?
      </Button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Secure Ticketing Technology</DialogTitle>
        <DialogDescription className="space-y-4 pt-4">
          <p>
            Your tickets are protected by our advanced security features:
          </p>
          <ul className="list-disc pl-4 space-y-2">
            <li>Dynamic QR codes that update every 30 seconds</li>
            <li>Blockchain-verified ownership records</li>
            <li>Secure transfer and resale capabilities</li>
            <li>Real-time validation at event check-in</li>
          </ul>
          <p className="text-sm text-gray-500 mt-4">
            All transactions are processed securely through our payment partners, ensuring your financial information stays safe.
          </p>
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog>
);