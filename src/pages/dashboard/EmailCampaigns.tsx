import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { EmailCampaignsList } from "@/components/dashboard/email/EmailCampaignsList";

export default function EmailCampaigns() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <EmailCampaignsList />
      </div>
    </DashboardLayout>
  );
}