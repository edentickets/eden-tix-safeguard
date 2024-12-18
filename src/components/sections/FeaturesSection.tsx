import { motion } from "framer-motion";
import { Shield, Ticket, Bell, Check } from "lucide-react";
import { Card } from "@/components/ui/card";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-eden-primary" />,
      title: "Smart Ticket Security",
      description: "Dynamic QR codes with time-based validation and proximity activation"
    },
    {
      icon: <Check className="w-8 h-8 text-eden-secondary" />,
      title: "Revenue Optimization",
      description: "Earn from every ticket resale while maintaining industry-low primary sale fees"
    },
    {
      icon: <Bell className="w-8 h-8 text-eden-accent" />,
      title: "Real-time Management",
      description: "Instant validation and live event controls through our secure platform"
    },
    {
      icon: <Ticket className="w-8 h-8 text-eden-primary" />,
      title: "Premium Benefits",
      description: "Access exclusive features and priority support as an event creator"
    }
  ];

  return (
    <section className="py-32 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-secondary opacity-5" />
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-medium gradient-text">
            Powerful Features for Event Creators
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Everything you need to manage and optimize your event ticketing
          </p>
        </motion.div>

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