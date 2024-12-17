import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <Card 
        className={cn(
          "p-6 glass-card hover:shadow-xl transition-all duration-300",
          "bg-gradient-to-br from-eden-light/50 to-eden-dark/50",
          "border border-eden-accent/20",
          className
        )}
      >
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-sm text-gray-400">{title}</p>
            <p className="text-2xl font-semibold bg-gradient-primary bg-clip-text text-transparent">
              {value}
            </p>
            {trend && (
              <p
                className={cn(
                  "text-sm flex items-center gap-1",
                  trendUp ? "text-eden-secondary" : "text-red-500"
                )}
              >
                {trend}
              </p>
            )}
          </div>
          <div className="p-3 rounded-xl bg-gradient-secondary text-white">
            {icon}
          </div>
        </div>
      </Card>
    </motion.div>
  );
};