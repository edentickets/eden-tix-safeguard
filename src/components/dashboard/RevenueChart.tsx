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

interface RevenueData {
  date: string;
  revenue: number;
}

interface RevenueChartProps {
  data: RevenueData[];
}

export const RevenueChart = ({ data }: RevenueChartProps) => {
  return (
    <Card className="p-6 bg-eden-light border-eden-accent">
      <h3 className="text-lg font-semibold text-white mb-4">Revenue Overview</h3>
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
              content={({ active, payload }) => {
                if (!active || !payload?.length) return null;
                return (
                  <div className="rounded-lg bg-eden-dark p-2 shadow-md">
                    <p className="text-sm text-white">
                      Revenue: ${payload[0].value.toLocaleString()}
                    </p>
                    <p className="text-xs text-gray-400">{payload[0].payload.date}</p>
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
  );
};