import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { CreateEventForm } from "@/components/events/CreateEventForm";

export default function CreateEvent() {
  const navigate = useNavigate();

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => navigate("/dashboard/events")}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-white">Create New Event</h1>
            <p className="text-gray-400 mt-1">Set up your event details and ticket information</p>
          </div>
        </div>

        <div className="bg-eden-light/5 border border-eden-light/10 rounded-lg p-8">
          <CreateEventForm 
            onSuccess={() => navigate("/dashboard/events")}
          />
        </div>
      </div>
    </DashboardLayout>
  );
}