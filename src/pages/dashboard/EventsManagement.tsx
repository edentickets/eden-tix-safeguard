import React from "react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { EventsHeader } from "@/components/dashboard/events/EventsHeader";
import { EventsList } from "@/components/dashboard/events/EventsList";

export default function EventsManagement() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <EventsHeader />
        <EventsList />
      </div>
    </DashboardLayout>
  );
}