import { Shield, Ticket, Bell } from "lucide-react";
import { motion } from "framer-motion";

const FeatureIcons = () => {
  const features = [
    { icon: Shield, text: "Dynamic Security", delay: 1.8 },
    { icon: Ticket, text: "Smart Ticketing", delay: 2.0 },
    { icon: Bell, text: "Real-time Alerts", delay: 2.2 },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-8 pt-16">
      {features.map(({ icon: Icon, text, delay }, index) => (
        <motion.div
          key={text}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            delay,
            type: "spring",
            stiffness: 100,
            damping: 10
          }}
          whileHover={{ 
            scale: 1.05,
            transition: { duration: 0.2 }
          }}
          className="flex flex-col items-center gap-2 group cursor-pointer"
        >
          <motion.div 
            className="p-4 rounded-full bg-eden-primary/10 border border-eden-primary/20 group-hover:bg-eden-primary/20 transition-colors duration-300"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <Icon className="w-6 h-6 text-eden-primary" />
          </motion.div>
          <motion.span 
            className="text-sm text-white/70 group-hover:text-white transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
          >
            {text}
          </motion.span>
        </motion.div>
      ))}
    </div>
  );
};

export default FeatureIcons;