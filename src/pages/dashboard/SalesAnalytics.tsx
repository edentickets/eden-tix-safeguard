import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { RevenueChart } from "@/components/dashboard/RevenueChart";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { DollarSign, TrendingUp, Users, Ticket } from "lucide-react";

export default function SalesAnalytics() {
  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold text-white mb-8">Sales & Analytics</h1>
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard
            title="Total Revenue"
            value="$45,231"
            trend="+20.1% from last month"
            icon={<DollarSign className="h-8 w-8" />}
            trendUp={true}
          />
          <MetricCard
            title="Average Ticket Price"
            value="$85.50"
            trend="+5.4% from last month"
            icon={<TrendingUp className="h-8 w-8" />}
            trendUp={true}
          />
          <MetricCard
            title="Tickets Sold"
            value="1,234"
            trend="+12.3% from last month"
            icon={<Ticket className="h-8 w-8" />}
            trendUp={true}
          />
          <MetricCard
            title="Unique Buyers"
            value="892"
            trend="+8.1% from last month"
            icon={<Users className="h-8 w-8" />}
            trendUp={true}
          />
        </div>
        <RevenueChart data={[
          { date: "Jan 1", revenue: 45000 },
          { date: "Jan 15", revenue: 75000 },
          { date: "Feb 1", revenue: 125000 },
          { date: "Feb 15", revenue: 160000 },
          { date: "Mar 1", revenue: 210000 },
          { date: "Mar 15", revenue: 250000 },
        ]} />
      </div>
    </DashboardLayout>
  );
}