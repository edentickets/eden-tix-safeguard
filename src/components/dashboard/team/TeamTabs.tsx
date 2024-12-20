import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PromotersList } from "@/components/dashboard/promoters/PromotersList";
import { GuestListTab } from "@/components/dashboard/promoters/GuestListTab";
import { CommissionTrackingTab } from "./CommissionTrackingTab";
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
    <Tabs defaultValue="promoters" className="space-y-4">
      <TabsList>
        <TabsTrigger value="promoters">Promoters</TabsTrigger>
        <TabsTrigger value="guest-lists">Guest Lists</TabsTrigger>
        <TabsTrigger value="commissions">Commissions</TabsTrigger>
      </TabsList>
      
      <TabsContent value="promoters">
        <PromotersList 
          promoters={promoters ?? []} 
          isLoading={isLoadingPromoters} 
        />
      </TabsContent>
      
      <TabsContent value="guest-lists">
        <GuestListTab 
          guestLists={guestLists ?? []} 
          isLoading={isLoadingGuestLists}
        />
      </TabsContent>
      
      <TabsContent value="commissions">
        {promoters?.[0] && (
          <CommissionTrackingTab promoterId={promoters[0].id} />
        )}
      </TabsContent>
    </Tabs>
  );
}