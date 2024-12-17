import { Card } from "@/components/ui/card";
import { Shield, TrendingUp, Gift } from "lucide-react";

interface FeatureCardProps {
  icon: "security" | "pricing" | "rewards";
  title: string;
  description: string;
  details: string;
}

const FeatureCard = ({ icon, title, description, details }: FeatureCardProps) => {
  const getIcon = () => {
    switch (icon) {
      case "security":
        return <Shield className="w-12 h-12 text-white" />;
      case "pricing":
        return <TrendingUp className="w-12 h-12 text-white" />;
      case "rewards":
        return <Gift className="w-12 h-12 text-white" />;
    }
  };

  return (
    <div className="relative w-full h-[350px] perspective-[1000px] group">
      <div className="relative w-full h-full transition-transform duration-500 transform-gpu preserve-3d group-hover:rotate-y-180">
        {/* Front of card (gradient side) - Shows by default */}
        <Card className="absolute w-full h-full bg-gradient-secondary p-6 backface-hidden">
          <div className="flex flex-col items-center text-center space-y-6">
            {getIcon()}
            <h3 className="text-2xl font-semibold text-white">{title}</h3>
            <p className="text-white/90 text-lg">{description}</p>
          </div>
        </Card>

        {/* Back of card (detailed side) - Shows on hover */}
        <Card className="absolute w-full h-full glass-card p-6 backface-hidden rotate-y-180">
          <div className="flex flex-col items-center text-center justify-center h-full rotate-y-180">
            <p className="text-white/90 text-lg leading-relaxed rotate-y-180">{details}</p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default FeatureCard;