import { MetricCard } from "@/components/dashboard/MetricCard";
import { Users, CheckCircle, Mail, Shield } from "lucide-react";
import { Promoter } from "@/types/promoter";

interface TeamMetricsProps {
  promoters?: Promoter[];
}

export function TeamMetrics({ promoters }: TeamMetricsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <MetricCard
        title="Total Promoters"
        value={promoters?.length.toString() ?? "0"}
        trend="+2 this month"
        icon={<Users className="h-8 w-8" />}
        trendUp={true}
      />
      <MetricCard
        title="Active Now"
        value="5"
        trend="62.5% of team"
        icon={<CheckCircle className="h-8 w-8" />}
        trendUp={true}
      />
      <MetricCard
        title="Pending Invites"
        value="2"
        trend="Last sent 2h ago"
        icon={<Mail className="h-8 w-8" />}
        trendUp={false}
      />
      <MetricCard
        title="Total Commission Paid"
        value="$2,450"
        trend="This month"
        icon={<Shield className="h-8 w-8" />}
        trendUp={true}
      />
    </div>
  );
}