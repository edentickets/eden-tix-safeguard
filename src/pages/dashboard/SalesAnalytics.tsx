import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card } from "@/components/ui/card";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { 
  DollarSign, 
  TrendingUp, 
  Users, 
  Ticket,
  ShoppingCart,
  RefreshCcw,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
} from "recharts";
import { motion } from "framer-motion";

const revenueData = [
  { date: "Jan", revenue: 45000, tickets: 1200, resales: 150 },
  { date: "Feb", revenue: 52000, tickets: 1350, resales: 180 },
  { date: "Mar", revenue: 48000, tickets: 1150, resales: 160 },
  { date: "Apr", revenue: 61000, tickets: 1500, resales: 200 },
  { date: "May", revenue: 55000, tickets: 1400, resales: 190 },
  { date: "Jun", revenue: 67000, tickets: 1600, resales: 220 },
];

const salesByEventType = [
  { name: "Concerts", value: 45 },
  { name: "Festivals", value: 25 },
  { name: "Sports", value: 15 },
  { name: "Theater", value: 10 },
  { name: "Other", value: 5 },
];

export default function SalesAnalytics() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Sales & Analytics</h1>
          <p className="text-gray-400">Track your event performance and revenue metrics</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard
            title="Total Revenue"
            value="$328,500"
            trend="+20.1% from last month"
            icon={<DollarSign className="h-8 w-8" />}
            trendUp={true}
          />
          <MetricCard
            title="Tickets Sold"
            value="8,245"
            trend="+12.3% from last month"
            icon={<Ticket className="h-8 w-8" />}
            trendUp={true}
          />
          <MetricCard
            title="Average Order Value"
            value="$85.50"
            trend="-3.4% from last month"
            icon={<ShoppingCart className="h-8 w-8" />}
            trendUp={false}
          />
          <MetricCard
            title="Resale Activity"
            value="1,100"
            trend="+8.1% from last month"
            icon={<RefreshCcw className="h-8 w-8" />}
            trendUp={true}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-2"
          >
            <Card className="p-6 bg-gradient-to-br from-eden-light/20 to-eden-dark/40 border border-white/5">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-white/90">Revenue Overview</h3>
                  <p className="text-sm text-gray-400">Monthly revenue breakdown</p>
                </div>
                <div className="flex items-center gap-2 bg-eden-primary/10 px-3 py-1 rounded-full">
                  <ArrowUpRight className="w-4 h-4 text-eden-secondary" />
                  <span className="text-sm text-eden-secondary">+12.5%</span>
                </div>
              </div>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                    <XAxis dataKey="date" stroke="rgba(255,255,255,0.5)" />
                    <YAxis stroke="rgba(255,255,255,0.5)" tickFormatter={(value) => `$${value / 1000}k`} />
                    <Tooltip
                      content={({ active, payload, label }) => {
                        if (!active || !payload?.length) return null;
                        return (
                          <div className="bg-eden-dark/90 p-3 rounded-lg border border-white/10">
                            <p className="text-sm font-semibold text-white">{label}</p>
                            <p className="text-sm text-eden-secondary">
                              ${payload[0].value.toLocaleString()}
                            </p>
                          </div>
                        );
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="revenue"
                      stroke="rgba(16, 185, 129, 0.8)"
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <Card className="p-6 bg-gradient-to-br from-eden-light/20 to-eden-dark/40 border border-white/5">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-white/90">Sales by Event Type</h3>
                  <p className="text-sm text-gray-400">Distribution of ticket sales</p>
                </div>
              </div>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={salesByEventType} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                    <XAxis type="number" stroke="rgba(255,255,255,0.5)" />
                    <YAxis dataKey="name" type="category" stroke="rgba(255,255,255,0.5)" />
                    <Tooltip
                      content={({ active, payload, label }) => {
                        if (!active || !payload?.length) return null;
                        return (
                          <div className="bg-eden-dark/90 p-3 rounded-lg border border-white/10">
                            <p className="text-sm font-semibold text-white">{label}</p>
                            <p className="text-sm text-eden-secondary">
                              {payload[0].value}% of sales
                            </p>
                          </div>
                        );
                      }}
                    />
                    <Bar
                      dataKey="value"
                      fill="rgba(16, 185, 129, 0.8)"
                      radius={[0, 4, 4, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </DashboardLayout>
  );
}