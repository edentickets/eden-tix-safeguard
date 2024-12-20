import { Ticket, DollarSign, RefreshCcw, TrendingUp, Users, Calendar } from "lucide-react";
import { MetricCard } from "./MetricCard";
import { RevenueChart } from "../charts/RevenueChart";

const revenueData = [
  { date: "Jan 1", revenue: 45000 },
  { date: "Jan 15", revenue: 75000 },
  { date: "Feb 1", revenue: 125000 },
  { date: "Feb 15", revenue: 160000 },
  { date: "Mar 1", revenue: 210000 },
  { date: "Mar 15", revenue: 250000 },
];

export function PerformanceMetrics() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          title="Total Tickets Sold"
          value="15,245"
          trend="+12.5% from last month"
          icon={<Ticket className="h-8 w-8" />}
          trendUp={true}
        />
        <MetricCard
          title="Revenue Generated"
          value="$1,256,000"
          trend="+8.2% from last month"
          icon={<DollarSign className="h-8 w-8" />}
          trendUp={true}
        />
        <MetricCard
          title="Active Events"
          value="8"
          trend="+2 from last month"
          icon={<Calendar className="h-8 w-8" />}
          trendUp={true}
        />
        <MetricCard
          title="Total Attendees"
          value="12,450"
          trend="+15.3% from last month"
          icon={<Users className="h-8 w-8" />}
          trendUp={true}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          title="Resale Volume"
          value="3,120"
          trend="-2.1% from last month"
          icon={<RefreshCcw className="h-8 w-8" />}
          trendUp={false}
        />
        <MetricCard
          title="Average Ticket Price"
          value="$82.50"
          trend="+5.3% from last month"
          icon={<TrendingUp className="h-8 w-8" />}
          trendUp={true}
        />
      </div>
      <RevenueChart data={revenueData} />
    </div>
  );
}