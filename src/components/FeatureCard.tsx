import { Card } from "@/components/ui/card";
import { useState } from "react";
import { Shield, TrendingUp, Gift, ArrowRightLeft } from "lucide-react";

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
      className="relative w-full h-[300px] group perspective-[1000px]"
      style={{ willChange: 'transform' }}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 transform-gpu preserve-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
        style={{ willChange: 'transform' }}
      >
        {/* Front of card */}
        <Card className="absolute w-full h-full glass-card p-6 backface-hidden">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="relative">
              {getIcon()}
              <ArrowRightLeft 
                className="absolute -right-4 -bottom-4 w-6 h-6 text-eden-primary/50" 
                style={{ animation: 'none' }} 
              />
            </div>
            <h3 className="text-xl font-semibold text-white">{title}</h3>
            <p className="text-white/70">{description}</p>
          </div>
        </Card>

        {/* Back of card */}
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