import { Card } from "@/components/ui/card";
import { useState } from "react";
import { Shield, TrendingUp, Gift, ArrowUpDown } from "lucide-react";
import { motion } from "framer-motion";

interface FeatureCardProps {
  icon: "security" | "pricing" | "rewards";
  title: string;
  description: string;
  details: string;
}

const FeatureCard = ({ icon, title, description, details }: FeatureCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const getIcon = () => {
    switch (icon) {
      case "security":
        return (
          <div className="relative">
            <Shield className="w-16 h-16 text-eden-primary animate-pulse" />
            <motion.div
              className="absolute -inset-2 bg-eden-primary/20 rounded-full -z-10"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        );
      case "pricing":
        return (
          <div className="relative">
            <TrendingUp className="w-16 h-16 text-eden-secondary animate-pulse" />
            <motion.div
              className="absolute -inset-2 bg-eden-secondary/20 rounded-full -z-10"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        );
      case "rewards":
        return (
          <div className="relative">
            <Gift className="w-16 h-16 text-eden-accent animate-pulse" />
            <motion.div
              className="absolute -inset-2 bg-eden-accent/20 rounded-full -z-10"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        );
    }
  };

  return (
    <div 
      className="relative w-full h-[350px] perspective-[1000px] cursor-pointer group"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-gpu preserve-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front of card */}
        <Card className="absolute w-full h-full glass-card p-6 backface-hidden">
          <div className="flex flex-col items-center text-center space-y-6">
            {getIcon()}
            <h3 className="text-2xl font-semibold text-white">{title}</h3>
            <p className="text-white/70">{description}</p>
            <motion.div
              animate={{
                y: [0, 5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-4 left-1/2 -translate-x-1/2"
            >
              <ArrowUpDown className="w-6 h-6 text-eden-primary/60" />
            </motion.div>
          </div>
        </Card>

        {/* Back of card */}
        <Card className="absolute w-full h-full glass-card p-6 backface-hidden rotate-y-180">
          <div className="flex flex-col items-center text-center justify-center h-full space-y-6">
            <p className="text-white/90 text-lg leading-relaxed">{details}</p>
            <motion.div
              animate={{
                y: [0, 5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-4 left-1/2 -translate-x-1/2"
            >
              <ArrowUpDown className="w-6 h-6 text-eden-primary/60" />
            </motion.div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default FeatureCard;