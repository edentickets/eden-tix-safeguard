import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MetricCard } from "@/components/dashboard/MetricCard";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import { motion } from "framer-motion";
import {
  RefreshCcw,
  TrendingUp,
  DollarSign,
  AlertTriangle,
} from "lucide-react";

const resaleData = [
  { month: "Jan", volume: 125, revenue: 12500 },
  { month: "Feb", volume: 150, revenue: 15000 },
  { month: "Mar", volume: 180, revenue: 18000 },
  { month: "Apr", volume: 160, revenue: 16000 },
  { month: "May", volume: 200, revenue: 20000 },
  { month: "Jun", volume: 220, revenue: 22000 },
];

const recentResales = [
  {
    id: 1,
    event: "Summer Music Festival 2024",
    originalPrice: 150,
    resalePrice: 225,
    date: "2024-03-15",
  },
  {
    id: 2,
    event: "Tech Conference 2024",
    originalPrice: 300,
    resalePrice: 450,
    date: "2024-03-14",
  },
  {
    id: 3,
    event: "Art Exhibition",
    originalPrice: 75,
    resalePrice: 100,
    date: "2024-03-13",
  },
];

export default function ResaleActivity() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Resale Activity</h1>
          <p className="text-gray-400">
            Monitor and analyze ticket resale patterns
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard
            title="Total Resales"
            value="1,245"
            trend="+15% from last month"
            icon={<RefreshCcw className="h-8 w-8" />}
            trendUp={true}
          />
          <MetricCard
            title="Average Markup"
            value="45%"
            trend="+5% from last month"
            icon={<TrendingUp className="h-8 w-8" />}
            trendUp={true}
          />
          <MetricCard
            title="Revenue Generated"
            value="$103,500"
            trend="+12% from last month"
            icon={<DollarSign className="h-8 w-8" />}
            trendUp={true}
          />
          <MetricCard
            title="Flagged Listings"
            value="23"
            trend="-8% from last month"
            icon={<AlertTriangle className="h-8 w-8" />}
            trendUp={false}
          />
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="bg-eden-light/20">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="listings">Active Listings</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <Card className="p-6 bg-eden-light/10">
              <h3 className="text-xl font-semibold text-white mb-6">
                Resale Volume Trends
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={resaleData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis dataKey="month" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1a2234",
                      border: "none",
                      borderRadius: "8px",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="volume"
                    stroke="#22c55e"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </Card>

            <Card className="p-6 bg-eden-light/10">
              <h3 className="text-xl font-semibold text-white mb-6">
                Revenue from Resales
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={resaleData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis dataKey="month" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1a2234",
                      border: "none",
                      borderRadius: "8px",
                    }}
                  />
                  <Bar dataKey="revenue" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </Card>
          </TabsContent>

          <TabsContent value="listings">
            <Card className="p-6 bg-eden-light/10">
              <h3 className="text-xl font-semibold text-white mb-6">
                Recent Resale Activity
              </h3>
              <div className="space-y-4">
                {recentResales.map((resale) => (
                  <motion.div
                    key={resale.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-lg bg-eden-dark/50 border border-white/5"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="text-white font-medium">
                          {resale.event}
                        </h4>
                        <p className="text-sm text-gray-400">
                          Listed on {new Date(resale.date).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-400">
                          Original: ${resale.originalPrice}
                        </p>
                        <p className="text-lg font-semibold text-eden-secondary">
                          Resale: ${resale.resalePrice}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="history">
            <Card className="p-6 bg-eden-light/10">
              <h3 className="text-xl font-semibold text-white mb-4">
                Historical Data
              </h3>
              <p className="text-gray-400">
                Detailed historical resale data and analytics coming soon.
              </p>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}