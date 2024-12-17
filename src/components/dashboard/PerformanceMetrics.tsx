import React from "react";
import { Card } from "@/components/ui/card";
import { 
  Ticket, 
  DollarSign, 
  RefreshCcw, 
  Tag, 
  Wallet 
} from "lucide-react";
import {
  ChartContainer,
  ChartTooltip,
} from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";

const metrics = [
  { 
    icon: Ticket, 
    label: "Total Tickets Sold", 
    value: "15,245",
    trend: "+12.5%"
  },
  { 
    icon: DollarSign, 
    label: "Revenue Generated", 
    value: "$1,256,000",
    trend: "+8.3%"
  },
  { 
    icon: RefreshCcw, 
    label: "Resale Volume", 
    value: "3,120",
    trend: "+5.2%"
  },
  { 
    icon: Tag, 
    label: "Average Ticket Price", 
    value: "$82.50",
    trend: "+2.1%"
  },
  { 
    icon: Wallet, 
    label: "Next Payout", 
    value: "$320,000",
    date: "July 15"
  },
];

const revenueData = [
  { month: "Jan", revenue: 150000 },
  { month: "Feb", revenue: 220000 },
  { month: "Mar", revenue: 280000 },
  { month: "Apr", revenue: 350000 },
  { month: "May", revenue: 420000 },
  { month: "Jun", revenue: 520000 },
];

export function PerformanceMetrics() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {metrics.map((metric) => (
          <Card key={metric.label} className="p-4 bg-eden-light border-eden-accent">
            <div className="flex items-start justify-between">
              <div>
                <metric.icon className="h-8 w-8 text-eden-primary mb-2" />
                <p className="text-sm text-gray-400">{metric.label}</p>
                <h3 className="text-xl font-bold text-white mt-1">{metric.value}</h3>
                {metric.trend && (
                  <p className="text-sm text-eden-secondary mt-1">
                    {metric.trend}
                  </p>
                )}
                {metric.date && (
                  <p className="text-sm text-gray-400 mt-1">
                    Due {metric.date}
                  </p>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Card className="p-6 bg-eden-light border-eden-accent">
        <h3 className="text-lg font-semibold text-white mb-4">Revenue Growth</h3>
        <div className="h-[300px]">
          <ChartContainer
            className="h-full"
            config={{
              revenue: {
                theme: {
                  light: "#8B5CF6",
                  dark: "#8B5CF6",
                },
              },
            }}
          >
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2D3748" />
              <XAxis dataKey="month" stroke="#4A5568" />
              <YAxis
                stroke="#4A5568"
                tickFormatter={(value) => `$${value / 1000}k`}
              />
              <ChartTooltip>
                {({ active, payload }) => {
                  if (!active || !payload?.length) return null;
                  return (
                    <div className="rounded-lg bg-eden-dark p-2 shadow-md">
                      <p className="text-sm text-white">
                        Revenue: {new Intl.NumberFormat("en-US", {
                          style: "currency",
                          currency: "USD",
                        }).format(payload[0].value as number)}
                      </p>
                    </div>
                  );
                }}
              </ChartTooltip>
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="var(--color-revenue)"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ChartContainer>
        </div>
      </Card>
    </div>
  );
}