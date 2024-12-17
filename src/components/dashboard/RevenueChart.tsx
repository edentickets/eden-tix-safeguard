import { Card } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";

interface RevenueData {
  date: string;
  revenue: number;
}

interface RevenueChartProps {
  data: RevenueData[];
}

export const RevenueChart = ({ data }: RevenueChartProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
    >
      <Card className="p-6 glass-card border-eden-accent/20 hover:shadow-xl transition-all duration-300">
        <h3 className="text-lg font-semibold bg-gradient-primary bg-clip-text text-transparent mb-4">
          Revenue Overview
        </h3>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 5, right: 5, bottom: 5, left: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2D3748" />
              <XAxis
                dataKey="date"
                stroke="#4A5568"
                tickFormatter={(value) => value.split(" ")[0]}
              />
              <YAxis
                stroke="#4A5568"
                tickFormatter={(value) => `$${value / 1000}k`}
              />
              <Tooltip
                content={({ active, payload, label }) => {
                  if (!active || !payload?.length) return null;
                  return (
                    <div className="rounded-lg glass-card p-3 shadow-xl border border-eden-accent/20">
                      <p className="text-sm text-white font-semibold">
                        Revenue: ${payload[0].value.toLocaleString()}
                      </p>
                      <p className="text-xs text-gray-400">{label}</p>
                    </div>
                  );
                }}
              />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#10B981"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </motion.div>
  );
};