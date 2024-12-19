import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { PerformanceMetrics } from "@/components/dashboard/PerformanceMetrics";
import { EventsList } from "@/components/dashboard/EventsList";

export default function CreatorDashboard() {
  return (
    <div className="min-h-screen bg-eden-dark">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-8">
          <DashboardHeader />
          <div className="mt-8 space-y-8">
            <PerformanceMetrics />
            <EventsList />
          </div>
        </main>
      </div>
    </div>
  );
}