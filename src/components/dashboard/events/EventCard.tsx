import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  MapPin, 
  Edit2, 
  BarChart2,
  MoreVertical,
  Trash2,
  ExternalLink,
  Ticket
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface EventCardProps {
  event: {
    id: string;
    title: string;
    date: string;
    location: string;
    status: string;
    soldTickets: number;
    totalTickets: number;
    revenue: number;
  };
  index: number;
}

export function EventCard({ event, index }: EventCardProps) {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleBuyTickets = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        toast({
          title: "Authentication required",
          description: "Please sign in to purchase tickets",
          variant: "destructive",
        });
        return;
      }

      const { data, error } = await supabase.functions.invoke('create-checkout', {
        body: { eventId: event.id }
      });

      if (error) throw error;

      if (data?.url) {
        window.location.href = data.url;
      }
    } catch (error) {
      console.error('Error creating checkout session:', error);
      toast({
        title: "Error",
        description: "Unable to process your request. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <Card className="p-6 bg-gradient-to-br from-eden-light/20 to-eden-dark/40 border border-white/5">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-semibold text-white">{event.title}</h3>
              <span className={`px-2 py-1 rounded-full text-xs ${
                event.status === "On Sale" 
                  ? "bg-green-500/20 text-green-400"
                  : event.status === "Draft"
                  ? "bg-gray-500/20 text-gray-400"
                  : "bg-blue-500/20 text-blue-400"
              }`}>
                {event.status}
              </span>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {event.date}
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {event.location}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-8">
            <div className="flex items-center gap-8">
              <div className="text-center">
                <div className="text-sm text-gray-400">Tickets Sold</div>
                <div className="text-lg font-semibold text-white">
                  {event.soldTickets}/{event.totalTickets}
                </div>
              </div>
              <div className="text-center">
                <div className="text-sm text-gray-400">Revenue</div>
                <div className="text-lg font-semibold text-white">
                  ${event.revenue.toLocaleString()}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button 
                variant="secondary"
                className="bg-eden-primary/20 hover:bg-eden-primary/30"
                onClick={handleBuyTickets}
              >
                <Ticket className="w-4 h-4 mr-2" />
                Buy Tickets
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="h-8 w-8 p-0">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-eden-dark border-white/10">
                  <DropdownMenuItem 
                    className="text-white hover:bg-white/5"
                    onClick={() => navigate(`/dashboard/events/${event.id}/edit`)}
                  >
                    <Edit2 className="mr-2 h-4 w-4" />
                    <span>Edit</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    className="text-white hover:bg-white/5"
                    onClick={() => navigate(`/events/${event.id}`)}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    <span>View</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    className="text-white hover:bg-white/5"
                    onClick={() => navigate(`/dashboard/events/${event.id}/sales`)}
                  >
                    <BarChart2 className="mr-2 h-4 w-4" />
                    <span>Sales</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-red-400 hover:bg-red-500/10 hover:text-red-400">
                    <Trash2 className="mr-2 h-4 w-4" />
                    <span>Delete</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}