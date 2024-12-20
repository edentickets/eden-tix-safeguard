import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Ticket, Calendar, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { formatDate } from "@/utils/date-utils";
import { formatCurrency } from "@/utils/format-utils";
import { useAuthState } from "@/hooks/use-auth-state";

export const UserTickets = () => {
  const navigate = useNavigate();
  const { user } = useAuthState();

  const { data: tickets, isLoading } = useQuery({
    queryKey: ["user-tickets", user?.id],
    queryFn: async () => {
      if (!user) throw new Error("User not authenticated");
      
      const { data, error } = await supabase
        .from("tickets")
        .select(`
          *,
          event:events (
            title,
            location,
            start_date,
            end_date
          )
        `)
        .eq("owner_id", user.id)
        .order("created_at", { ascending: false });

      if (error) throw error;
      return data;
    },
    enabled: !!user
  });

  if (isLoading) {
    return (
      <Card className="p-6 bg-eden-light/30 backdrop-blur-sm border-eden-light/10">
        <div className="space-y-4">
          <Skeleton className="h-8 w-48" />
          <Skeleton className="h-32 w-full" />
        </div>
      </Card>
    );
  }

  if (!tickets?.length) {
    return (
      <Card className="p-6 bg-eden-light/30 backdrop-blur-sm border-eden-light/10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-white">My Tickets</h2>
          <Button 
            variant="outline" 
            className="gap-2"
            onClick={() => navigate("/explore")}
          >
            <Ticket className="w-4 h-4" />
            Browse Events
          </Button>
        </div>
        
        <div className="text-center py-8 text-gray-400">
          <Ticket className="w-12 h-12 mx-auto mb-4 opacity-50" />
          <p>No tickets purchased yet.</p>
          <Button 
            variant="link" 
            className="text-eden-accent mt-2"
            onClick={() => navigate("/explore")}
          >
            Browse Events
          </Button>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-6 bg-eden-light/30 backdrop-blur-sm border-eden-light/10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-white">My Tickets</h2>
        <Button 
          variant="outline" 
          className="gap-2"
          onClick={() => navigate("/explore")}
        >
          <Ticket className="w-4 h-4" />
          Browse Events
        </Button>
      </div>

      <div className="space-y-4">
        {tickets.map((ticket) => (
          <Card 
            key={ticket.id} 
            className="p-4 bg-eden-light/10 hover:bg-eden-light/20 transition-colors cursor-pointer"
            onClick={() => navigate(`/tickets/${ticket.id}`)}
          >
            <div className="flex flex-col md:flex-row justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-white">
                  {ticket.event?.title}
                </h3>
                <div className="flex flex-wrap gap-4 mt-2 text-gray-400">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {formatDate(ticket.event?.start_date || "")}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {ticket.event?.location}
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end justify-between">
                <span className="text-sm text-eden-secondary">
                  {formatCurrency(ticket.purchase_price)}
                </span>
                <span className={`text-sm ${
                  ticket.status === "active" ? "text-green-500" : 
                  ticket.status === "used" ? "text-gray-400" : 
                  "text-red-500"
                }`}>
                  {ticket.status.charAt(0).toUpperCase() + ticket.status.slice(1)}
                </span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Card>
  );
};