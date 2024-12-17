import { motion } from "framer-motion";
import { Shield, BarChart3, Zap, Gift, Users, CreditCard } from "lucide-react";
import { Card } from "@/components/ui/card";

export const Features = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Advanced Digital Security",
      description: "Dynamic QR codes with real-time validation ensure maximum ticket security"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Smart Revenue Share",
      description: "Earn from both primary sales and controlled resales"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Real-time Updates",
      description: "Instant ticket validation and live event management"
    },
    {
      icon: <Gift className="w-8 h-8" />,
      title: "Flexible Ticketing",
      description: "Multiple tiers, packages, and custom access levels"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Event Dashboard",
      description: "Real-time analytics and comprehensive event management"
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Modern Payments",
      description: "Accept credit cards, Apple Pay, and Google Pay"
    }
  ];

  return (
    <section className="py-32 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-secondary opacity-5" />
      <div className="max-w-7xl mx-auto relative">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-medium text-center mb-16 gradient-text"
        >
          Eden's Smart Features for Event Creators
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="glass-card p-6 space-y-4 hover:border-eden-primary/30 transition-all duration-300">
                <div className="text-eden-primary">{feature.icon}</div>
                <h3 className="text-lg font-medium text-white">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};