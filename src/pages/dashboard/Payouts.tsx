import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PayoutHeader } from "@/components/dashboard/payouts/PayoutHeader";
import { PayoutMetrics } from "@/components/dashboard/payouts/PayoutMetrics";
import { TransactionList } from "@/components/dashboard/payouts/TransactionList";

export default function Payouts() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <PayoutHeader />
        <PayoutMetrics />

        <Tabs defaultValue="transactions" className="space-y-6">
          <TabsList className="bg-eden-light/20">
            <TabsTrigger value="transactions">Transactions</TabsTrigger>
            <TabsTrigger value="schedule">Payout Schedule</TabsTrigger>
            <TabsTrigger value="settings">Payment Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="transactions">
            <TransactionList />
          </TabsContent>

          <TabsContent value="schedule">
            <Card className="p-6 bg-eden-light/10">
              <h3 className="text-xl font-semibold text-white mb-4">
                Payout Schedule
              </h3>
              <p className="text-gray-400">
                Configure your preferred payout frequency and thresholds.
              </p>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <Card className="p-6 bg-eden-light/10">
              <h3 className="text-xl font-semibold text-white mb-4">
                Payment Settings
              </h3>
              <p className="text-gray-400">
                Manage your payment methods and tax information.
              </p>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}