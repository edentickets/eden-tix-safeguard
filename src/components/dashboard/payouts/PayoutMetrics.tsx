import { MetricCard } from "@/components/dashboard/metrics/MetricCard";
import { DollarSign, Clock, ArrowUpRight, Wallet } from "lucide-react";
import { usePayoutMetrics } from "@/hooks/use-promoter-payouts";
import { useAuthState } from "@/hooks/use-auth-state";
import { usePromoters } from "@/hooks/use-promoters";

export function PayoutMetrics() {
  const { user } = useAuthState();
  const { data: promoters } = usePromoters(user?.id);
  const promoter = promoters?.[0]; // Get the first promoter for this user
  const { data: metrics, isLoading } = usePayoutMetrics(promoter?.id);

  if (isLoading || !metrics) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-32 bg-eden-light/20 animate-pulse rounded-lg" />
        ))}
      </div>
    );
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  // Calculate next payout date (15th of next month if available balance > 0)
  const nextPayoutDate = metrics.availableBalance > 0
    ? new Date(new Date().getFullYear(), new Date().getMonth() + 1, 15)
    : null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <MetricCard
        title="Available Balance"
        value={formatCurrency(metrics.availableBalance)}
        trend={metrics.availableBalance > 0 ? "Ready for payout" : "No funds available"}
        icon={<DollarSign className="h-8 w-8" />}
        trendUp={metrics.availableBalance > 0}
      />
      <MetricCard
        title="Pending Payouts"
        value={formatCurrency(metrics.pendingAmount)}
        trend={metrics.pendingAmount > 0 ? "Processing" : "No pending payouts"}
        icon={<Clock className="h-8 w-8" />}
        trendUp={false}
      />
      <MetricCard
        title="Total Paid Out"
        value={formatCurrency(metrics.totalPaidOut)}
        trend="All time"
        icon={<ArrowUpRight className="h-8 w-8" />}
        trendUp={true}
      />
      <MetricCard
        title="Next Payout"
        value={nextPayoutDate ? nextPayoutDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) : 'N/A'}
        trend={metrics.availableBalance > 0 ? `Estimated ${formatCurrency(metrics.availableBalance)}` : "No pending amount"}
        icon={<Wallet className="h-8 w-8" />}
        trendUp={metrics.availableBalance > 0}
      />
    </div>
  );
}