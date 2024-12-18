import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSession } from "@supabase/auth-helpers-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { EventBasicInfo } from "./form/EventBasicInfo";
import { EventDatePicker } from "./form/EventDatePicker";
import { EventTicketInfo } from "./form/EventTicketInfo";

export const CreateEventForm = () => {
  const session = useSession();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [totalTickets, setTotalTickets] = useState("");
  const [price, setPrice] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!session?.user) {
      toast({
        title: "Authentication required",
        description: "Please sign in to create an event",
        variant: "destructive",
      });
      return;
    }

    if (!startDate || !endDate) {
      toast({
        title: "Missing dates",
        description: "Please select both start and end dates",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    const { data, error } = await supabase
      .from("events")
      .insert({
        creator_id: session.user.id,
        title,
        description,
        location,
        start_date: startDate.toISOString(),
        end_date: endDate.toISOString(),
        total_tickets: parseInt(totalTickets),
        available_tickets: parseInt(totalTickets),
        price: parseFloat(price),
      })
      .select()
      .single();

    setIsLoading(false);

    if (error) {
      toast({
        title: "Error creating event",
        description: error.message,
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Event created successfully",
      description: "Your event has been created and is now live!",
    });

    navigate(`/event/${data.id}`);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
      <EventBasicInfo
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        location={location}
        setLocation={setLocation}
      />

      <EventDatePicker
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
      />

      <EventTicketInfo
        totalTickets={totalTickets}
        setTotalTickets={setTotalTickets}
        price={price}
        setPrice={setPrice}
      />

      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? "Creating Event..." : "Create Event"}
      </Button>
    </form>
  );
};