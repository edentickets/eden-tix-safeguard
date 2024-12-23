import { motion } from "framer-motion";
import { Shield, Bell, Ticket, TrendingUp, Lock, Gift } from "lucide-react";
import { Card } from "@/components/ui/card";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Bell className="w-8 h-8 text-eden-primary" />,
      title: "Smart Price Alerts",
      description: "Get notified instantly when tickets match your target price"
    },
    {
      icon: <Shield className="w-8 h-8 text-eden-secondary" />,
      title: "Guaranteed Authentic",
      description: "Dynamic QR codes and real-time validation ensure zero counterfeits"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-eden-accent" />,
      title: "Market Insights",
      description: "Make informed decisions with live price tracking and availability alerts"
    },
    {
      icon: <Lock className="w-8 h-8 text-eden-primary" />,
      title: "Secure Transfers",
      description: "Transfer or resell tickets safely with built-in fraud protection"
    },
    {
      icon: <Gift className="w-8 h-8 text-eden-secondary" />,
      title: "Loyalty Rewards",
      description: "Earn points on every purchase and unlock exclusive perks"
    },
    {
      icon: <Ticket className="w-8 h-8 text-eden-accent" />,
      title: "Priority Access",
      description: "Get early access to high-demand events and presales"
    }
  ];

  return (
    <section className="py-32 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-primary opacity-5" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-eden-accent/20 via-eden-primary/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-medium gradient-text mb-6">
            The Future of Event Access
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Experience seamless ticketing with smart features that put you in control
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="glass-card p-6 space-y-4 hover:border-eden-primary/30 transition-all duration-300 h-full">
                <motion.div 
                  className="text-eden-primary"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {feature.icon}
                </motion.div>
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

export default FeaturesSection;