import { Card } from "@/components/ui/card";
import { Icons } from "@/components/icons";
import { LucideIcon } from "lucide-react";
import { memo } from "react";

interface FeatureCardProps {
  icon: keyof typeof Icons;
  title: string;
  description: string;
  details: string;
}

const FeatureCard = memo(({ icon, title, description, details }: FeatureCardProps) => {
  const Icon = Icons[icon] as LucideIcon;

  return (
    <div className="relative h-[300px] group perspective-[1000px]">
      <div className="relative w-full h-full transition-all duration-500 transform-style-preserve-3d group-hover:rotate-y-180">
        {/* Front of card */}
        <Card className="absolute inset-0 glass-card p-6 backface-hidden">
          <div className="flex flex-col items-center text-center justify-center h-full space-y-4">
            <div className="p-3 rounded-full bg-white/10 backdrop-blur-sm">
              <Icon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white">{title}</h3>
            <p className="text-white/70">{description}</p>
          </div>
        </Card>

        {/* Back of card */}
        <Card className="absolute inset-0 glass-card p-6 backface-hidden rotate-y-180">
          <div className="flex flex-col items-center text-center justify-center h-full">
            <p className="text-white/90 text-lg leading-relaxed">{details}</p>
          </div>
        </Card>
      </div>
    </div>
  );
});

FeatureCard.displayName = "FeatureCard";

export default FeatureCard;