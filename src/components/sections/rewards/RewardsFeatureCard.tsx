import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface RewardsFeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const RewardsFeatureCard = ({ icon: Icon, title, description }: RewardsFeatureCardProps) => {
  const iconVariants = {
    hidden: { scale: 0.8, rotate: -10 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200
      }
    },
    hover: {
      scale: 1.2,
      rotate: 10,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 8
      }
    }
  };

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      whileHover={{ scale: 1.02 }}
      className="h-full"
    >
      <Card className="glass-card p-6 space-y-4 hover:border-eden-primary/30 transition-all duration-300 h-full">
        <motion.div
          variants={iconVariants}
          whileHover="hover"
          className="text-eden-primary"
        >
          <Icon className="w-8 h-8" />
        </motion.div>
        <h3 className="text-lg font-medium text-white">{title}</h3>
        <p className="text-white/70">{description}</p>
      </Card>
    </motion.div>
  );
};