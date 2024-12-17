import { motion } from "framer-motion";
import { Shield, QrCode, BarChart3, Bell, CreditCard, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-eden-primary" />,
      title: "Blockchain-Powered Security",
      description: "Every ticket is a unique NFT, making fraud impossible and transfers secure."
    },
    {
      icon: <QrCode className="w-8 h-8 text-eden-secondary" />,
      title: "Dynamic QR Protection",
      description: "Scrambled QR codes prevent unauthorized transfers outside Eden."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-eden-accent" />,
      title: "Fair Price Resale",
      description: "Stock exchange-style bidding system ensures fair market prices."
    },
    {
      icon: <Bell className="w-8 h-8 text-eden-primary" />,
      title: "Smart Notifications",
      description: "Get alerts for price changes, drops, and favorite events."
    },
    {
      icon: <CreditCard className="w-8 h-8 text-eden-secondary" />,
      title: "Multiple Payment Options",
      description: "Pay with Apple Pay, crypto, or traditional payment methods."
    },
    {
      icon: <Users className="w-8 h-8 text-eden-accent" />,
      title: "Creator Revenue Share",
      description: "Earn from every resale with transparent revenue sharing."
    }
  ];

  return (
    <section className="py-32 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-secondary opacity-5" />
      <div className="max-w-7xl mx-auto relative">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-medium text-center mb-16 gradient-text"
        >
          The Future of Ticketing is Here
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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