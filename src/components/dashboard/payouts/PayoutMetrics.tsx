import { MetricCard } from "@/components/dashboard/metrics/MetricCard";
import { DollarSign, Clock, ArrowUpRight, Wallet } from "lucide-react";

export function PayoutMetrics() {
  return (
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
  );
}