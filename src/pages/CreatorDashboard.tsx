import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { PerformanceMetrics } from "@/components/dashboard/PerformanceMetrics";
import { EventsList } from "@/components/dashboard/EventsList";
import { OnboardingTutorial } from "@/components/onboarding/OnboardingTutorial";
import { creatorSteps } from "@/components/onboarding/onboardingSteps";

export default function CreatorDashboard() {
  return (
    <DashboardLayout>
      <OnboardingTutorial steps={creatorSteps} type="creator" />
      <DashboardHeader />
      <div className="mt-8 space-y-8">
        <PerformanceMetrics />
        <EventsList />
      </div>
    </DashboardLayout>
  );
}