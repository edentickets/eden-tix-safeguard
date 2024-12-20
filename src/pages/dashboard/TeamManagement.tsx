import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { PromotersList } from "@/components/dashboard/promoters/PromotersList";
import { GuestListTab } from "@/components/dashboard/promoters/GuestListTab";
import { useProfile } from "@/hooks/use-profile";
import { usePromoters } from "@/hooks/use-promoters";
import { useGuestLists } from "@/hooks/use-guest-lists";
import { useSession } from "@supabase/auth-helpers-react";
import { motion } from "framer-motion";
import {
  Users,
  UserPlus,
  Mail,
  Shield,
  Clock,
  CheckCircle,
} from "lucide-react";

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
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Team Management</h1>
            <p className="text-gray-400">
              Manage your promoters and their permissions
            </p>
          </div>
          <Button className="bg-eden-primary hover:bg-eden-primary/90">
            <UserPlus className="w-4 h-4 mr-2" />
            Add Promoter
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard
            title="Total Promoters"
            value={promoters?.length.toString() ?? "0"}
            trend="+2 this month"
            icon={<Users className="h-8 w-8" />}
            trendUp={true}
          />
          <MetricCard
            title="Active Now"
            value="5"
            trend="62.5% of team"
            icon={<CheckCircle className="h-8 w-8" />}
            trendUp={true}
          />
          <MetricCard
            title="Pending Invites"
            value="2"
            trend="Last sent 2h ago"
            icon={<Mail className="h-8 w-8" />}
            trendUp={false}
          />
          <MetricCard
            title="Total Commission Paid"
            value="$2,450"
            trend="This month"
            icon={<Shield className="h-8 w-8" />}
            trendUp={true}
          />
        </div>

        <Tabs defaultValue="promoters" className="space-y-6">
          <TabsList className="bg-eden-light/20">
            <TabsTrigger value="promoters">Promoters</TabsTrigger>
            <TabsTrigger value="guest-lists">Guest Lists</TabsTrigger>
            <TabsTrigger value="activity">Activity Log</TabsTrigger>
          </TabsList>

          <TabsContent value="promoters">
            <PromotersList promoters={promoters ?? []} isLoading={isLoading} />
          </TabsContent>

          <TabsContent value="guest-lists">
            <GuestListTab
              guestLists={guestLists ?? []}
              isLoading={isLoadingGuestLists}
            />
          </TabsContent>

          <TabsContent value="activity">
            <Card className="p-6 bg-eden-light/10">
              <h3 className="text-xl font-semibold text-white mb-4">
                Activity Log
              </h3>
              <p className="text-gray-400">
                Track promoter actions and system changes.
              </p>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}