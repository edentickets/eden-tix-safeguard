import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { motion } from "framer-motion";
import {
  DollarSign,
  Clock,
  ArrowUpRight,
  Wallet,
  Building2,
  RefreshCcw,
} from "lucide-react";

const transactions = [
  {
    id: 1,
    amount: 12500,
    status: "Completed",
    date: "2024-03-15",
    type: "Event Revenue",
    reference: "EVT-001",
  },
  {
    id: 2,
    amount: 8750,
    status: "Processing",
    date: "2024-03-14",
    type: "Ticket Sales",
    reference: "TKT-002",
  },
];

export default function Payouts() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Payouts</h1>
            <p className="text-gray-400">
              Track your earnings and manage payment settings
            </p>
          </div>
          <Button className="bg-eden-primary hover:bg-eden-primary/90">
            <Building2 className="w-4 h-4 mr-2" />
            Update Payment Info
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard
            title="Available Balance"
            value="$45,750"
            trend="+$12,500 this week"
            icon={<DollarSign className="h-8 w-8" />}
            trendUp={true}
          />
          <MetricCard
            title="Pending Payouts"
            value="$8,750"
            trend="2 transactions"
            icon={<Clock className="h-8 w-8" />}
            trendUp={false}
          />
          <MetricCard
            title="Total Paid Out"
            value="$156,000"
            trend="Last 30 days"
            icon={<ArrowUpRight className="h-8 w-8" />}
            trendUp={true}
          />
          <MetricCard
            title="Next Payout"
            value="Mar 21"
            trend="Estimated $15,000"
            icon={<Wallet className="h-8 w-8" />}
            trendUp={true}
          />
        </div>

        <Tabs defaultValue="transactions" className="space-y-6">
          <TabsList className="bg-eden-light/20">
            <TabsTrigger value="transactions">Transactions</TabsTrigger>
            <TabsTrigger value="schedule">Payout Schedule</TabsTrigger>
            <TabsTrigger value="settings">Payment Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="transactions" className="space-y-4">
            {transactions.map((transaction) => (
              <motion.div
                key={transaction.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Card className="p-6 bg-eden-light/10">
                  <div className="flex flex-col md:flex-row justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-semibold text-white">
                          ${transaction.amount.toLocaleString()}
                        </h3>
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${
                            transaction.status === "Completed"
                              ? "bg-green-500/20 text-green-400"
                              : "bg-yellow-500/20 text-yellow-400"
                          }`}
                        >
                          {transaction.status}
                        </span>
                      </div>
                      <p className="text-sm text-gray-400 mt-1">
                        {transaction.type} • Ref: {transaction.reference}
                      </p>
                      <p className="text-sm text-gray-400 mt-1">
                        <Clock className="w-4 h-4 inline mr-1" />
                        {new Date(transaction.date).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        <RefreshCcw className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
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