import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function EventsHeader() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Events Management</h1>
        <p className="text-gray-400">Create and manage your events</p>
      </div>
      <Button 
        className="bg-eden-primary hover:bg-eden-primary/90"
        onClick={() => navigate("/dashboard/events/create")}
      >
        <PlusCircle className="w-4 h-4 mr-2" />
        Create Event
      </Button>
    </div>
  );
}