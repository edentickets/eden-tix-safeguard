import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Edit2, BarChart2, Calendar, MapPin, PlusCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const events = [
  {
    id: "123e4567-e89b-12d3-a456-426614174000",
    name: "Rolling Loud Miami 2025",
    date: "July 19-21, 2025",
    venue: "Hard Rock Stadium, Miami",
    ticketsSold: 8500,
    totalTickets: 10000,
    revenue: 2550000,
  },
  {
    id: "987fcdeb-51a2-43d7-9b56-254415174000",
    name: "Art Basel Afterparty",
    date: "Dec 3, 2025",
    venue: "Wynwood Art District",
    ticketsSold: 1200,
    totalTickets: 1500,
    revenue: 180000,
  },
];

export function EventsList() {
  const navigate = useNavigate();

  return (
    <div>
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
      <div className="space-y-4">
        {events.map((event, index) => (
          <motion.div
            key={event.id}
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
        ))}
      </div>
    </div>
  );
}