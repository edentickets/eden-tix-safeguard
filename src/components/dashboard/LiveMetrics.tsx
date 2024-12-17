import React from "react";
import { motion } from "framer-motion";
import { Ticket, DollarSign, RefreshCcw } from "lucide-react";

interface MetricProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  animate?: boolean;
}

const Metric = ({ icon, label, value, animate = true }: MetricProps) => (
  <motion.div 
    className="flex items-center gap-3 px-4"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="p-2 rounded-lg bg-eden-accent/10 text-eden-accent">
      {icon}
    </div>
    <div>
      <p className="text-sm text-gray-400">{label}</p>
      <p className="text-xl font-semibold text-white">
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
    </div>
  </motion.div>
);

export function LiveMetrics() {
  return (
    <div className="mt-8 flex justify-between items-center">
      <Metric
        icon={<Ticket className="w-5 h-5" />}
        label="Live Tickets Sold"
        value="15,245"
      />
      <div className="h-12 w-px bg-eden-accent/20" />
      <Metric
        icon={<RefreshCcw className="w-5 h-5" />}
        label="Live Resale Volume"
        value="3,120"
      />
      <div className="h-12 w-px bg-eden-accent/20" />
      <Metric
        icon={<DollarSign className="w-5 h-5" />}
        label="Revenue Earned"
        value="$1,256,000"
      />
    </div>
  );
}