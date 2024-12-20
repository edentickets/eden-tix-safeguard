import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Edit2, BarChart2, Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface EventItemProps {
  event: {
    id: string;
    name: string;
    date: string;
    venue: string;
    ticketsSold: number;
    totalTickets: number;
    revenue: number;
  };
  index: number;
}

export function EventItem({ event, index }: EventItemProps) {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Card 
        className="p-6 bg-eden-light/10 border-eden-accent/20 hover:bg-eden-light/20 transition-all duration-300"
      >
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-white">
              {event.name}
            </h3>
            <div className="flex flex-wrap gap-4 mt-2 text-gray-400">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {event.date}
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {event.venue}
              </div>
            </div>
            <div className="mt-3 space-x-4">
              <span className="text-sm text-gray-400">
                Tickets: {event.ticketsSold}/{event.totalTickets}
              </span>
              <span className="text-sm text-eden-secondary">
                Revenue: ${event.revenue.toLocaleString()}
              </span>
            </div>
          </div>
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => navigate(`/dashboard/events/${event.id}/edit`)}
            >
              <Edit2 className="h-4 w-4 mr-2" />
              Edit Event
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => navigate(`/dashboard/events/${event.id}/sales`)}
            >
              <BarChart2 className="h-4 w-4 mr-2" />
              View Sales
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}