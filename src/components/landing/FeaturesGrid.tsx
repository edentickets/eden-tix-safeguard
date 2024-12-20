import { motion } from "framer-motion";
import { Shield, Ticket, Bell, Check } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Shield,
    title: "Secure Ticketing",
    description: "Dynamic QR codes with time-based validation ensure maximum security"
  },
  {
    icon: Check,
    title: "Easy Management",
    description: "Intuitive tools to manage your events, sales, and attendees"
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Real-time alerts for sales, check-ins, and important updates"
  },
  {
    icon: Ticket,
    title: "Flexible Pricing",
    description: "Set custom ticket tiers and dynamic pricing strategies"
  }
];

export const FeaturesGrid = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-primary opacity-5" />
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="max-w-7xl mx-auto"
      >
        <motion.div className="text-center mb-16 space-y-4">
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-medium gradient-text"
          >
            Powerful Features
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-white/70"
          >
            Everything you need to create successful events
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="glass-card p-6 space-y-4 h-full">
                <feature.icon className="w-8 h-8 text-eden-primary" />
                <h3 className="text-lg font-medium text-white">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};