import { Card } from "@/components/ui/card";
import { useState } from "react";
import { Shield, TrendingUp, Gift } from "lucide-react";

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
        return <Shield className="w-12 h-12 text-eden-primary" />;
      case "pricing":
        return <TrendingUp className="w-12 h-12 text-eden-secondary" />;
      case "rewards":
        return <Gift className="w-12 h-12 text-eden-accent" />;
    }
  };

  return (
    <div className="relative w-full h-[300px] perspective-[1000px]">
      <div
        className={`relative w-full h-full transition-transform duration-500 transform-gpu preserve-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
      >
        <Card className="absolute w-full h-full glass-card p-6 backface-hidden">
          <div className="flex flex-col items-center text-center space-y-4">
            {getIcon()}
            <h3 className="text-xl font-semibold text-white">{title}</h3>
            <p className="text-white/70">{description}</p>
          </div>
        </Card>

        <Card className="absolute w-full h-full glass-card p-6 backface-hidden rotate-y-180">
          <div className="flex flex-col items-center text-center justify-center h-full">
            <p className="text-white/90">{details}</p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default FeatureCard;