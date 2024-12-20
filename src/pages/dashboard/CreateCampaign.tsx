import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { CreateCampaignForm } from "@/components/dashboard/email/CreateCampaignForm";

export default function CreateCampaign() {
  return (
    <DashboardLayout>
      <div className="max-w-3xl mx-auto">
        <CreateCampaignForm />
      </div>
    </DashboardLayout>
  );
}