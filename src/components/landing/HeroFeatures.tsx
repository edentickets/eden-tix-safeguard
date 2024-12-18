import { motion } from "framer-motion";
import { Shield, Banknote, Users } from "lucide-react";

export const HeroFeatures = () => {
  const features = [
    {
      icon: <Shield className="w-6 h-6 text-eden-primary" />,
      title: "Secure Ticketing",
      description: "Dynamic QR codes with time-based validation"
    },
    {
      icon: <Banknote className="w-6 h-6 text-eden-secondary" />,
      title: "Revenue Share",
      description: "Earn from every resale automatically"
    },
    {
      icon: <Users className="w-6 h-6 text-eden-accent" />,
      title: "Growing Community",
      description: "Join thousands of event creators"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-16">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="flex flex-col items-center text-center space-y-4"
        >
          <div className="p-3 rounded-lg bg-eden-dark/50">
            {feature.icon}
          </div>
          <h3 className="text-lg font-medium text-white">{feature.title}</h3>
          <p className="text-white/70">{feature.description}</p>
        </motion.div>
      ))}
    </div>
  );
};