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
    <div 
      className="relative w-full h-[350px] perspective-[1000px] cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={`relative w-full h-full transition-all duration-500 transform-gpu preserve-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front of card */}
        <Card className="absolute w-full h-full glass-card p-6 backface-hidden">
          <div className="flex flex-col items-center text-center space-y-6">
            {getIcon()}
            <h3 className="text-2xl font-semibold text-white">{title}</h3>
            <p className="text-white/70">{description}</p>
            <p className="text-sm text-eden-primary/60">Click to learn more</p>
          </div>
        </Card>

        {/* Back of card */}
        <Card className="absolute w-full h-full glass-card p-6 backface-hidden rotate-y-180">
          <div className="flex flex-col items-center text-center justify-center h-full">
            <p className="text-white/90 text-lg leading-relaxed">{details}</p>
            <p className="mt-4 text-sm text-eden-primary/60">Click to go back</p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default FeatureCard;