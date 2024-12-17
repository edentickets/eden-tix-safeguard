import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Edit2, BarChart2 } from "lucide-react";

const events = [
  {
    id: "1",
    name: "Rolling Loud Miami 2025",
    date: "July 19-21, 2025",
    venue: "Hard Rock Stadium, Miami",
    ticketsSold: 8500,
    totalTickets: 10000,
    revenue: 2550000,
  },
  {
    id: "2",
    name: "Art Basel Afterparty",
    date: "Dec 3, 2025",
    venue: "Wynwood Art District",
    ticketsSold: 1200,
    totalTickets: 1500,
    revenue: 180000,
  },
];

export function EventsList() {
  return (
    <div>
      <h2 className="text-xl font-semibold text-white mb-4">Active Events</h2>
      <div className="space-y-4">
        {events.map((event) => (
          <Card 
            key={event.id} 
            className="p-6 bg-eden-light border-eden-accent"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-white">
                  {event.name}
                </h3>
                <p className="text-gray-400">
                  {event.date} • {event.venue}
                </p>
                <div className="mt-2 space-x-4">
                  <span className="text-sm text-gray-400">
                    Tickets: {event.ticketsSold}/{event.totalTickets}
                  </span>
                  <span className="text-sm text-eden-secondary">
                    Revenue: ${event.revenue.toLocaleString()}
                  </span>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Edit2 className="h-4 w-4 mr-2" />
                  Edit Event
                </Button>
                <Button variant="outline" size="sm">
                  <BarChart2 className="h-4 w-4 mr-2" />
                  View Sales
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}