import { motion } from "framer-motion";
import { Shield, Ticket, Bell, Check } from "lucide-react";
import { Card } from "@/components/ui/card";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-eden-primary" />,
      title: "State of the Art Security",
      description: "Our dynamic security system ensures ticket authenticity and prevents unauthorized transfers."
    },
    {
      icon: <Check className="w-8 h-8 text-eden-secondary" />,
      title: "Fair Market Prices",
      description: "Real-time pricing based on actual demand, ensuring fair prices for everyone."
    },
    {
      icon: <Bell className="w-8 h-8 text-eden-accent" />,
      title: "Smart Notifications",
      description: "Get instant alerts for price drops and ticket availability for your favorite events."
    },
    {
      icon: <Ticket className="w-8 h-8 text-eden-primary" />,
      title: "Easy Reselling",
      description: "Securely resell your tickets through our transparent marketplace."
    }
  ];

  return (
    <section className="py-32 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-secondary opacity-5" />
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center space-y-4 mb-16">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-medium gradient-text"
          >
            Why Choose Eden?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-white/70"
          >
            Because Ticketing Needs a Revolution
          </motion.p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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

export default FeaturesSection;