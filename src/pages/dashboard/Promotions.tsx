import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { motion } from "framer-motion";
import {
  Megaphone,
  Users,
  DollarSign,
  TrendingUp,
  PlusCircle,
} from "lucide-react";

const activePromotions = [
  {
    id: 1,
    name: "Early Bird Special",
    discount: "20%",
    usageCount: 145,
    revenue: 12500,
    startDate: "2024-03-01",
    endDate: "2024-03-31",
    status: "Active",
  },
  {
    id: 2,
    name: "Group Discount",
    discount: "15%",
    usageCount: 89,
    revenue: 8900,
    startDate: "2024-03-15",
    endDate: "2024-04-15",
    status: "Active",
  },
  {
    id: 3,
    name: "Flash Sale",
    discount: "30%",
    usageCount: 67,
    revenue: 5360,
    startDate: "2024-03-20",
    endDate: "2024-03-22",
    status: "Scheduled",
  },
];

export default function Promotions() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Promotions</h1>
            <p className="text-gray-400">
              Manage your promotional campaigns and discounts
            </p>
          </div>
          <Button className="bg-eden-primary hover:bg-eden-primary/90">
            <PlusCircle className="w-4 h-4 mr-2" />
            Create Promotion
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard
            title="Active Promotions"
            value="3"
            trend="+1 from last month"
            icon={<Megaphone className="h-8 w-8" />}
            trendUp={true}
          />
          <MetricCard
            title="Total Redemptions"
            value="301"
            trend="+24% from last month"
            icon={<Users className="h-8 w-8" />}
            trendUp={true}
          />
          <MetricCard
            title="Revenue Impact"
            value="$26,760"
            trend="+18% from last month"
            icon={<DollarSign className="h-8 w-8" />}
            trendUp={true}
          />
          <MetricCard
            title="Conversion Rate"
            value="24.5%"
            trend="+2.3% from last month"
            icon={<TrendingUp className="h-8 w-8" />}
            trendUp={true}
          />
        </div>

        <Tabs defaultValue="active" className="space-y-6">
          <TabsList className="bg-eden-light/20">
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
            <TabsTrigger value="ended">Ended</TabsTrigger>
          </TabsList>

          <TabsContent value="active" className="space-y-4">
            {activePromotions.map((promo) => (
              <motion.div
                key={promo.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Card className="p-6 bg-eden-light/10">
                  <div className="flex flex-col md:flex-row justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-semibold text-white">
                          {promo.name}
                        </h3>
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${
                            promo.status === "Active"
                              ? "bg-green-500/20 text-green-400"
                              : "bg-blue-500/20 text-blue-400"
                          }`}
                        >
                          {promo.status}
                        </span>
                      </div>
                      <p className="text-sm text-gray-400 mt-1">
                        {new Date(promo.startDate).toLocaleDateString()} -{" "}
                        {new Date(promo.endDate).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="flex gap-8">
                      <div className="text-center">
                        <p className="text-sm text-gray-400">Discount</p>
                        <p className="text-xl font-semibold text-white">
                          {promo.discount}
                        </p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-gray-400">Usage</p>
                        <p className="text-xl font-semibold text-white">
                          {promo.usageCount}
                        </p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-gray-400">Revenue</p>
                        <p className="text-xl font-semibold text-eden-secondary">
                          ${promo.revenue.toLocaleString()}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                      <Button variant="outline" size="sm">
                        Pause
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </TabsContent>

          <TabsContent value="scheduled">
            <Card className="p-6 bg-eden-light/10">
              <h3 className="text-xl font-semibold text-white mb-4">
                Scheduled Promotions
              </h3>
              <p className="text-gray-400">
                View and manage your upcoming promotional campaigns.
              </p>
            </Card>
          </TabsContent>

          <TabsContent value="ended">
            <Card className="p-6 bg-eden-light/10">
              <h3 className="text-xl font-semibold text-white mb-4">
                Past Promotions
              </h3>
              <p className="text-gray-400">
                Review the performance of your past promotional campaigns.
              </p>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}