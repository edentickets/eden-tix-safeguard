import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { PerformanceMetrics } from "@/components/dashboard/PerformanceMetrics";
import { EventsList } from "@/components/dashboard/EventsList";

export default function CreatorDashboard() {
  return (
    <DashboardLayout>
      <DashboardHeader />
      <div className="mt-8 space-y-8">
        <PerformanceMetrics />
        <EventsList />
      </div>
    </DashboardLayout>
  );
}