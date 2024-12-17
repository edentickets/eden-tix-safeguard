import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string;
  trend?: string;
  icon: React.ReactNode;
  trendUp?: boolean;
  className?: string;
}

export const MetricCard = ({
  title,
  value,
  trend,
  icon,
  trendUp,
  className,
}: MetricCardProps) => {
  return (
    <Card className={cn("p-6 bg-eden-light border-eden-accent", className)}>
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <p className="text-sm text-gray-400">{title}</p>
          <p className="text-2xl font-semibold text-white">{value}</p>
          {trend && (
            <p
              className={cn(
                "text-sm",
                trendUp ? "text-eden-secondary" : "text-red-500"
              )}
            >
              {trend}
            </p>
          )}
        </div>
        <div className="text-eden-primary opacity-80">{icon}</div>
      </div>
    </Card>
  );
};