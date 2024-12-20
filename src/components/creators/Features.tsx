import { motion } from "framer-motion";
import { BarChart3, Shield, Ticket, Users, TrendingUp, Gift } from "lucide-react";
import { Card } from "@/components/ui/card";
import { DashboardPreview } from "./DashboardPreview";

export const Features = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-eden-primary" />,
      title: "Dynamic Security",
      description: "Real-time QR validation and proximity-based activation prevent unauthorized transfers"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-eden-secondary" />,
      title: "Revenue Growth",
      description: "Capture value from every resale with automatic revenue sharing and smart pricing"
    },
    {
      icon: <Users className="w-8 h-8 text-eden-accent" />,
      title: "Growing Community",
      description: "Access a thriving marketplace of event enthusiasts ready to discover your events"
    },
    {
      icon: <Gift className="w-8 h-8 text-eden-primary" />,
      title: "Creator Benefits",
      description: "Unlock exclusive tools and priority support as your events grow"
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-medium text-center mb-16 gradient-text"
        >
          Powerful Tools for Growth
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mb-24"
        >
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Join thousands of successful event creators who have transformed their business with Eden.
            Experience the next generation of event management.
          </p>
        </motion.div>

        {/* Dashboard preview */}
        <DashboardPreview />
      </div>
    </section>
  );
};