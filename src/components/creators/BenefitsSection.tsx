import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Shield, Coins, TrendingUp, Users, Settings, Headphones } from "lucide-react";

const benefits = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Advanced Security",
    description: "Dynamic QR codes and proximity validation prevent unauthorized transfers"
  },
  {
    icon: <Coins className="w-8 h-8" />,
    title: "Revenue Share",
    description: "Earn from every resale with automatic revenue sharing"
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Smart Pricing",
    description: "Optimize ticket prices based on real-time demand"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Growing Community",
    description: "Access a thriving marketplace of event enthusiasts"
  },
  {
    icon: <Settings className="w-8 h-8" />,
    title: "Powerful Tools",
    description: "Comprehensive dashboard for event and audience management"
  },
  {
    icon: <Headphones className="w-8 h-8" />,
    title: "24/7 Support",
    description: "Dedicated support team to help you succeed"
  }
];

export const BenefitsSection = () => {
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
            Why Choose Eden
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Everything you need to create successful events and maximize revenue
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-colors">
                <div className="p-3 rounded-lg bg-eden-primary/10 w-fit mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-medium text-white mb-2">{benefit.title}</h3>
                <p className="text-white/70">{benefit.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};