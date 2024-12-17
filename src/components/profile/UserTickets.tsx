import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Ticket } from "lucide-react";

export const UserTickets = () => {
  return (
    <Card className="p-6 bg-eden-light/30 backdrop-blur-sm border-eden-light/10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-white">My Tickets</h2>
        <Button variant="outline" className="gap-2">
          <Ticket className="w-4 h-4" />
          View All Tickets
        </Button>
      </div>
      
      <div className="text-center py-8 text-gray-400">
        <Ticket className="w-12 h-12 mx-auto mb-4 opacity-50" />
        <p>No tickets purchased yet.</p>
        <Button variant="link" className="text-eden-accent mt-2">
          Browse Events
        </Button>
      </div>
    </Card>
  );
};