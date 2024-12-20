import { motion } from "framer-motion";
import { BarChart3, Shield, Ticket, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { DashboardPreview } from "./DashboardPreview";

export const Features = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure Ticketing",
      description: "Dynamic QR codes with time-based validation ensure maximum security"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community-Driven",
      description: "Connect with event organizers and attendees in a trusted marketplace"
    },
    {
      icon: <Ticket className="w-8 h-8" />,
      title: "Smart Features",
      description: "Automated check-ins, instant transfers, and real-time updates"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Market Insights",
      description: "Make informed decisions with comprehensive analytics and trends"
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
          The Future of Event Management
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
            Join thousands of event creators who trust Eden for their ticketing needs. 
            Experience the next generation of event management.
          </p>
        </motion.div>

        {/* Dashboard preview */}
        <DashboardPreview />
      </div>
    </section>
  );
};