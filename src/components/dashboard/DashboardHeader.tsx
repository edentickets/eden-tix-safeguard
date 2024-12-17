import React from "react";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

export function DashboardHeader() {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h1 className="text-3xl font-bold text-white">
          Take Control of Your Events
        </h1>
        <p className="mt-2 text-gray-400">
          Sell Tickets, Track Sales, and Maximize Revenue with Eden's Cutting-Edge Tools
        </p>
      </div>
      <Button className="bg-eden-secondary hover:bg-eden-success">
        <PlusCircle className="mr-2 h-4 w-4" />
        Create New Event
      </Button>
    </div>
  );
}