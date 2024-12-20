import React from "react";
import { motion } from "framer-motion";
import { Ticket, DollarSign, RefreshCcw, Users } from "lucide-react";

interface MetricProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  trend?: {
    value: string;
    positive: boolean;
  };
  animate?: boolean;
}

const Metric = ({ icon, label, value, trend, animate = true }: MetricProps) => (
  <motion.div 
    className="flex items-center gap-4 px-4 hover:scale-105 transition-transform duration-300"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ y: -5 }}
  >
    <div className="p-3 rounded-xl bg-eden-primary/20 text-white/80">
      {icon}
    </div>
    <div>
      <p className="text-sm text-gray-400/80">{label}</p>
      <p className="text-xl font-semibold text-white/90">
        {animate ? (
          <motion.span
            key={value}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {value}
          </motion.span>
        ) : (
          value
        )}
      </p>
      {trend && (
        <p className={`text-xs ${trend.positive ? 'text-eden-secondary' : 'text-red-400'} flex items-center gap-1`}>
          {trend.positive ? '↑' : '↓'} {trend.value} from last month
        </p>
      )}
    </div>
  </motion.div>
);

export function LiveMetrics() {
  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <Metric
        icon={<Ticket className="w-5 h-5" />}
        label="Live Tickets Sold"
        value="15,245"
        trend={{ value: "12.5%", positive: true }}
      />
      <Metric
        icon={<RefreshCcw className="w-5 h-5" />}
        label="Resale Volume"
        value="3,120"
        trend={{ value: "8.3%", positive: true }}
      />
      <Metric
        icon={<DollarSign className="w-5 h-5" />}
        label="Revenue Generated"
        value="$1,256,000"
        trend={{ value: "15.2%", positive: true }}
      />
      <Metric
        icon={<Users className="w-5 h-5" />}
        label="Active Users"
        value="8,392"
        trend={{ value: "5.1%", positive: true }}
      />
    </div>
  );
}