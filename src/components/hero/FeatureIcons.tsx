import { Shield, Ticket, Bell } from "lucide-react";
import { motion } from "framer-motion";

const FeatureIcons = () => {
  const features = [
    { icon: Shield, text: "Dynamic Security" },
    { icon: Ticket, text: "Smart Ticketing" },
    { icon: Bell, text: "Real-time Alerts" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-8 py-8">
      {features.map(({ icon: Icon, text }, index) => (
        <motion.div
          key={text}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          className="flex flex-col items-center gap-2"
        >
          <div className="p-4 rounded-full bg-eden-primary/10 border border-eden-primary/20">
            <Icon className="w-6 h-6 text-eden-primary" />
          </div>
          <span className="text-sm text-white/70">{text}</span>
        </motion.div>
      ))}
    </div>
  );
};

export default FeatureIcons;