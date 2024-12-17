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
    title: "Profit From Every Resale",
    description: "Finally earn your share from secondary market sales. Every ticket transfer puts money in your pocket."
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Bulletproof Security",
    description: "Our proximity-based QR codes and real-time validation make ticket fraud impossible."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Industry-Lowest Fees",
    description: "Keep more of your revenue with our unbeatable transaction fees. No hidden charges, ever."
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Smart Price Control",
    description: "Set your rules for resale pricing. Maintain control while maximizing your revenue."
  },
  {
    icon: <Ticket className="w-6 h-6" />,
    title: "Your Market, Your Rules",
    description: "Define how tickets can be resold while earning from every transfer. No more scalper profits."
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Real-Time Insights",
    description: "Watch your revenue grow with instant analytics on primary sales and resale earnings."
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
            Stop Letting Scalpers Profit From Your Events
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            The secondary market generates billions in revenue that should belong to creators. 
            Eden ensures you get your fair share from every ticket resale, while keeping your 
            primary sales costs at industry-lows.
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