import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function EventsListHeader() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-xl font-semibold text-white">Active Events</h2>
      <Button 
        onClick={() => navigate("/dashboard/events/create")}
        className="bg-eden-primary/90 hover:bg-eden-primary transition-colors duration-300"
      >
        <PlusCircle className="w-4 h-4 mr-2" />
        Create Event
      </Button>
    </div>
  );
}