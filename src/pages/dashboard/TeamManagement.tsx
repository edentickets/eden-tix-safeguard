import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { useProfile } from "@/hooks/use-profile";
import { usePromoters } from "@/hooks/use-promoters";
import { useGuestLists } from "@/hooks/use-guest-lists";
import { useSession } from "@supabase/auth-helpers-react";
import { TeamHeader } from "@/components/dashboard/team/TeamHeader";
import { TeamMetrics } from "@/components/dashboard/team/TeamMetrics";
import { TeamTabs } from "@/components/dashboard/team/TeamTabs";

export default function TeamManagement() {
  const session = useSession();
  const { data: profile } = useProfile(session?.user ?? null);
  const { data: promoters, isLoading } = usePromoters(profile?.id);
  const { data: guestLists, isLoading: isLoadingGuestLists } = useGuestLists(
    promoters?.[0]?.id
  );

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <TeamHeader />
        <TeamMetrics promoters={promoters} />
        <TeamTabs
          promoters={promoters}
          guestLists={guestLists}
          isLoadingPromoters={isLoading}
          isLoadingGuestLists={isLoadingGuestLists}
        />
      </div>
    </DashboardLayout>
  );
}