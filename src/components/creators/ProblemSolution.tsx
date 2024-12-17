import { motion } from "framer-motion";
import { 
  Banknote, 
  Shield, 
  Users, 
  TrendingUp,
  Ticket,
  BarChart3
} from "lucide-react";

const features = [
  {
    icon: <Banknote className="w-6 h-6" />,
    title: "Revenue from Every Resale",
    description: "Earn from secondary market sales that previously generated zero revenue for creators."
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Dynamic Security",
    description: "Real-time QR validation and proximity-based activation prevent unauthorized transfers."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Growing Marketplace",
    description: "Access a thriving community of event enthusiasts with industry-lowest transaction fees."
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Smart Pricing",
    description: "Set dynamic pricing rules and earn from both primary sales and controlled resales."
  },
  {
    icon: <Ticket className="w-6 h-6" />,
    title: "Controlled Resale",
    description: "Set your own resale rules while earning from every ticket transfer in the secondary market."
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Live Analytics",
    description: "Track sales, monitor resale trends, and optimize revenue with real-time insights."
  }
];

export const ProblemSolution = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-medium mb-6 gradient-text">
            The Future of Event Ticketing Revenue
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Traditional ticketing platforms ignore the secondary market, leaving money on the table. 
            Eden helps you capture revenue from every ticket sale and resale, with industry-lowest fees.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-colors"
            >
              <div className="h-12 w-12 rounded-lg bg-eden-accent/10 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};