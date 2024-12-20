import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import {
  Users,
  TrendingUp,
  MapPin,
  Clock,
  Ticket,
  Share2,
} from "lucide-react";
import { MetricCard } from "@/components/dashboard/MetricCard";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const ageData = [
  { age: "18-24", count: 1234 },
  { age: "25-34", count: 2341 },
  { age: "35-44", count: 1890 },
  { age: "45-54", count: 943 },
  { age: "55+", count: 587 },
];

const locationData = [
  { city: "New York", attendees: 2500 },
  { city: "Los Angeles", attendees: 2100 },
  { city: "Chicago", attendees: 1800 },
  { city: "Miami", attendees: 1500 },
  { city: "Austin", attendees: 1200 },
];

export default function AudienceInsights() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Audience Insights</h1>
          <p className="text-gray-400">
            Understand your audience better with detailed analytics
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <MetricCard
            title="Total Attendees"
            value="12,456"
            trend="+15% from last month"
            icon={<Users className="h-8 w-8" />}
            trendUp={true}
          />
          <MetricCard
            title="Engagement Rate"
            value="68%"
            trend="+5% from last month"
            icon={<TrendingUp className="h-8 w-8" />}
            trendUp={true}
          />
          <MetricCard
            title="Top Location"
            value="New York"
            trend="2,500 attendees"
            icon={<MapPin className="h-8 w-8" />}
          />
        </div>

        <Tabs defaultValue="demographics" className="space-y-6">
          <TabsList className="bg-eden-light/20">
            <TabsTrigger value="demographics">Demographics</TabsTrigger>
            <TabsTrigger value="behavior">Behavior</TabsTrigger>
            <TabsTrigger value="engagement">Engagement</TabsTrigger>
          </TabsList>

          <TabsContent value="demographics" className="space-y-6">
            <Card className="p-6 bg-eden-light/10">
              <h3 className="text-xl font-semibold text-white mb-6">Age Distribution</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={ageData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis dataKey="age" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1a2234",
                      border: "none",
                      borderRadius: "8px",
                    }}
                  />
                  <Bar
                    dataKey="count"
                    fill="#22c55e"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </Card>

            <Card className="p-6 bg-eden-light/10">
              <h3 className="text-xl font-semibold text-white mb-6">Top Locations</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={locationData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis type="number" stroke="#94a3b8" />
                  <YAxis dataKey="city" type="category" stroke="#94a3b8" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1a2234",
                      border: "none",
                      borderRadius: "8px",
                    }}
                  />
                  <Bar
                    dataKey="attendees"
                    fill="#3b82f6"
                    radius={[0, 4, 4, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </Card>
          </TabsContent>

          <TabsContent value="behavior" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <MetricCard
                title="Average Event Duration"
                value="2.5 hours"
                icon={<Clock className="h-8 w-8" />}
              />
              <MetricCard
                title="Ticket Type Preference"
                value="VIP (45%)"
                icon={<Ticket className="h-8 w-8" />}
              />
              <MetricCard
                title="Social Shares"
                value="3,245"
                trend="+12% from last month"
                icon={<Share2 className="h-8 w-8" />}
                trendUp={true}
              />
            </div>
          </TabsContent>

          <TabsContent value="engagement" className="space-y-4">
            <Card className="p-6 bg-eden-light/10">
              <h3 className="text-xl font-semibold text-white mb-4">
                Engagement Overview
              </h3>
              <p className="text-gray-400 mb-6">
                Coming soon: Detailed engagement metrics and patterns
              </p>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}