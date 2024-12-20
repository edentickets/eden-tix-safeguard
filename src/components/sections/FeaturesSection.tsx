import { motion } from "framer-motion";
import { Shield, Ticket, Users, Globe, Lock, CreditCard } from "lucide-react";
import { Card } from "@/components/ui/card";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-eden-primary" />,
      title: "Secure & Authentic",
      description: "Dynamic QR codes and real-time validation ensure zero counterfeits"
    },
    {
      icon: <Ticket className="w-8 h-8 text-eden-secondary" />,
      title: "Smart Resale",
      description: "Fair market prices and instant transfers in our trusted marketplace"
    },
    {
      icon: <Users className="w-8 h-8 text-eden-accent" />,
      title: "Community-Driven",
      description: "Join thousands of event enthusiasts in a vibrant ecosystem"
    },
    {
      icon: <Globe className="w-8 h-8 text-eden-primary" />,
      title: "Worldwide Events",
      description: "Access exclusive events and experiences from around the globe"
    },
    {
      icon: <Lock className="w-8 h-8 text-eden-secondary" />,
      title: "Fraud Protection",
      description: "Advanced security measures protect your tickets and funds"
    },
    {
      icon: <CreditCard className="w-8 h-8 text-eden-accent" />,
      title: "Instant Rewards",
      description: "Earn points and unlock exclusive perks with every purchase"
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
            Experience the Future of Events
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Join thousands of event-goers who trust Eden for secure, seamless, and rewarding experiences
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-white/60">
            Trusted by over <span className="text-eden-secondary">100,000+</span> event enthusiasts worldwide
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;