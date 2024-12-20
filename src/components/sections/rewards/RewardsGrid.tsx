import { motion } from "framer-motion";
import { Crown, Gift, Star, BadgeDollarSign } from "lucide-react";
import { RewardsFeatureCard } from "./RewardsFeatureCard";

const vipFeatures = [
  {
    icon: Crown,
    title: "Priority Access",
    description: "Get exclusive pre-sale access and reserve tickets before they go public"
  },
  {
    icon: Gift,
    title: "VIP Rewards",
    description: "Earn points on every purchase to redeem for merchandise, upgrades, and exclusive access"
  },
  {
    icon: BadgeDollarSign,
    title: "Reduced Fees",
    description: "Enjoy industry-lowest transaction fees and special VIP pricing on select events"
  },
  {
    icon: Star,
    title: "Premium Benefits",
    description: "Access member-only events, exclusive content, and special promotional offers"
  }
];

export const RewardsGrid = () => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2
          }
        }
      }}
      className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
    >
      {vipFeatures.map((feature) => (
        <RewardsFeatureCard
          key={feature.title}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </motion.div>
  );
};