import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  PlusCircle, 
  Calendar, 
  Users, 
  DollarSign,
  MoreVertical,
  Edit2,
  Trash2,
  ExternalLink
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { motion } from "framer-motion";

const events = [
  {
    id: 1,
    title: "Summer Music Festival 2024",
    date: "Aug 15-17, 2024",
    location: "Central Park, NY",
    status: "On Sale",
    soldTickets: 2500,
    totalTickets: 5000,
    revenue: 125000,
  },
  {
    id: 2,
    title: "Tech Conference 2024",
    date: "Sep 5-7, 2024",
    location: "Convention Center, SF",
    status: "Draft",
    soldTickets: 0,
    totalTickets: 1000,
    revenue: 0,
  },
  {
    id: 3,
    title: "New Year's Eve Party",
    date: "Dec 31, 2024",
    location: "Grand Hotel, Miami",
    status: "Scheduled",
    soldTickets: 150,
    totalTickets: 500,
    revenue: 15000,
  },
];

export default function EventsManagement() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Events Management</h1>
            <p className="text-gray-400">Create and manage your events</p>
          </div>
          <Button className="bg-eden-primary hover:bg-eden-primary/90">
            <PlusCircle className="w-4 h-4 mr-2" />
            Create Event
          </Button>
        </div>

        <div className="grid gap-4">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
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
                      <div>{event.location}</div>
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

                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="bg-eden-dark border-white/10">
                        <DropdownMenuItem className="text-white hover:bg-white/5">
                          <Edit2 className="mr-2 h-4 w-4" />
                          <span>Edit</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-white hover:bg-white/5">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          <span>View</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-400 hover:bg-red-500/10 hover:text-red-400">
                          <Trash2 className="mr-2 h-4 w-4" />
                          <span>Delete</span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}