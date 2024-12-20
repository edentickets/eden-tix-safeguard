import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { DollarSign, TrendingUp, RefreshCcw } from "lucide-react";

const revenueStreams = [
  {
    icon: <DollarSign className="w-8 h-8" />,
    title: "Primary Sales",
    description: "Keep 100% of your primary ticket sales",
    example: "Sell 1000 tickets at $100 each",
    potential: "$100,000 revenue"
  },
  {
    icon: <RefreshCcw className="w-8 h-8" />,
    title: "Resale Revenue",
    description: "Earn from every ticket resale transaction",
    example: "250 tickets resold at $150 each (50% markup)",
    potential: "$1,875 additional revenue" // 250 * $150 * 0.05 (half of 10% fee)
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Dynamic Pricing",
    description: "Optimize pricing based on demand",
    example: "Increase prices by 25% for last 200 tickets",
    potential: "$5,000 extra revenue" // 200 * $100 * 0.25
  }
];

export const RevenueModel = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-primary opacity-5" />
      
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-medium gradient-text mb-6">
            Revenue Potential
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Multiple revenue streams to maximize your event's earning potential
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {revenueStreams.map((stream, index) => (
            <motion.div
              key={stream.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="h-full p-6 bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-colors">
                <div className="flex flex-col h-full">
                  <div className="p-3 rounded-lg bg-eden-primary/10 w-fit mb-4">
                    {stream.icon}
                  </div>
                  <h3 className="text-xl font-medium text-white mb-2">{stream.title}</h3>
                  <p className="text-white/70 mb-4">{stream.description}</p>
                  <div className="mt-auto pt-4 border-t border-white/10">
                    <p className="text-sm text-white/60 mb-2">{stream.example}</p>
                    <p className="text-lg font-medium text-eden-secondary">{stream.potential}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};