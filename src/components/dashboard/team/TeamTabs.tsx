import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { PromotersList } from "@/components/dashboard/promoters/PromotersList";
import { GuestListTab } from "@/components/dashboard/promoters/GuestListTab";
import { Promoter } from "@/types/promoter";
import { GuestList } from "@/types/guest-list";

interface TeamTabsProps {
  promoters?: Promoter[];
  guestLists?: GuestList[];
  isLoadingPromoters?: boolean;
  isLoadingGuestLists?: boolean;
}

export function TeamTabs({
  promoters,
  guestLists,
  isLoadingPromoters,
  isLoadingGuestLists,
}: TeamTabsProps) {
  return (
    <Tabs defaultValue="promoters" className="space-y-6">
      <TabsList className="bg-eden-light/20">
        <TabsTrigger value="promoters">Promoters</TabsTrigger>
        <TabsTrigger value="guest-lists">Guest Lists</TabsTrigger>
        <TabsTrigger value="activity">Activity Log</TabsTrigger>
      </TabsList>

      <TabsContent value="promoters">
        <PromotersList promoters={promoters ?? []} isLoading={isLoadingPromoters} />
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
  );
}