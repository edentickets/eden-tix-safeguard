import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { EventsList } from "@/components/dashboard/EventsList";

export default function EventsManagement() {
  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold text-white mb-8">Events Management</h1>
      <EventsList />
    </DashboardLayout>
  );
}