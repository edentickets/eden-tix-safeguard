import React from "react";
import { Button } from "@/components/ui/button";
import { PlusCircle, BarChart2 } from "lucide-react";
import { LiveMetrics } from "./LiveMetrics";

export function DashboardHeader() {
  // In a real app, this would come from auth context
  const organizerName = "Sarah";

  return (
    <div className="relative space-y-6">
      <div className="glass-card p-8 rounded-xl bg-gradient-to-r from-eden-dark to-eden-light border border-eden-accent/20">
        <div className="flex justify-between items-start">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold text-white">
              Welcome Back, {organizerName}
            </h1>
            <p className="text-lg text-gray-400">
              Your events, your revenue, your way—built for creators like you.
            </p>
          </div>
          <div className="flex gap-4">
            <Button 
              className="bg-eden-secondary hover:bg-eden-success"
              size="lg"
            >
              <PlusCircle className="mr-2 h-5 w-5" />
              Create New Event
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-eden-accent text-eden-accent hover:bg-eden-accent/10"
            >
              <BarChart2 className="mr-2 h-5 w-5" />
              Explore Analytics
            </Button>
          </div>
        </div>
        <LiveMetrics />
      </div>
    </div>
  );
}