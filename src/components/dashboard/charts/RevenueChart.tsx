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
      <Card className="p-4 sm:p-6 bg-gradient-to-br from-eden-light/20 to-eden-dark/40 border border-white/5 backdrop-blur-sm hover:border-white/10 transition-all duration-300">
        <h3 className="text-base sm:text-lg font-semibold text-white/90 mb-4">
          Revenue Overview
        </h3>
        <div className="h-[250px] sm:h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 5, right: 5, bottom: 5, left: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis
                dataKey="date"
                stroke="rgba(255,255,255,0.5)"
                tickFormatter={(value) => value.split(" ")[0]}
                tick={{ fontSize: 12 }}
              />
              <YAxis
                stroke="rgba(255,255,255,0.5)"
                tickFormatter={(value) => `$${value / 1000}k`}
                tick={{ fontSize: 12 }}
              />
              <Tooltip
                content={({ active, payload, label }) => {
                  if (!active || !payload?.length) return null;
                  return (
                    <div className="rounded-lg bg-eden-dark/90 p-3 shadow-xl border border-white/10 backdrop-blur-sm">
                      <p className="text-sm text-white/90 font-semibold">
                        Revenue: ${payload[0].value.toLocaleString()}
                      </p>
                      <p className="text-xs text-gray-400/80">{label}</p>
                    </div>
                  );
                }}
              />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="rgba(16, 185, 129, 0.8)"
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