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
          "p-6 hover:shadow-lg transition-all duration-300",
          "bg-gradient-to-br from-eden-light/20 to-eden-dark/40",
          "border border-white/5 backdrop-blur-sm",
          className
        )}
      >
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-sm text-gray-400/80">{title}</p>
            <p className="text-2xl font-semibold text-white/90">
              {value}
            </p>
            {trend && (
              <p
                className={cn(
                  "text-sm flex items-center gap-1",
                  trendUp ? "text-eden-secondary/90" : "text-red-500/90"
                )}
              >
                {trend}
              </p>
            )}
          </div>
          <div className="p-3 rounded-xl bg-eden-primary/20 text-white/80">
            {icon}
          </div>
        </div>
      </Card>
    </motion.div>
  );
};