import { motion } from "framer-motion";
import { Check, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const features = [
  {
    text: "Dynamic QR security",
    tooltip: "Time-based validation and proximity activation"
  },
  {
    text: "Secondary market revenue",
    tooltip: "Earn from ticket resales automatically"
  },
  {
    text: "Industry-low fees",
    tooltip: "Competitive pricing for primary ticket sales"
  },
  {
    text: "Real-time analytics",
    tooltip: "Track sales and monitor market trends"
  },
  {
    text: "Event management tools",
    tooltip: "Complete control over your events"
  },
  {
    text: "Priority support",
    tooltip: "24/7 dedicated support team"
  }
];

export const PricingSection = () => {
  return (
    <section className="py-32 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-primary opacity-5" />
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-medium gradient-text mb-6">
            Start Creating Events
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            No monthly fees or hidden charges. We only succeed when you do, with transparent transaction fees and revenue sharing on resales.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white/5 backdrop-blur-sm rounded-xl p-8 hover:bg-white/10 transition-colors border border-white/10 max-w-2xl mx-auto"
        >
          <div className="mb-8">
            <h3 className="text-2xl font-medium mb-2">Everything You Need</h3>
            <div className="text-4xl font-bold mb-4 text-eden-primary">Free</div>
            <p className="text-white/70">
              Access all features with no monthly charges. Simple transaction fees on sales and automatic revenue sharing on resales.
            </p>
          </div>

          <ul className="space-y-4 mb-8">
            {features.map((feature, featureIndex) => (
              <li key={featureIndex} className="flex items-start gap-2">
                <Check className="w-5 h-5 text-eden-secondary mt-0.5" />
                <span className="flex-1">{feature.text}</span>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Info className="w-4 h-4 text-white/40 hover:text-white/60 transition-colors" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{feature.tooltip}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </li>
            ))}
          </ul>

          <Button 
            className="w-full bg-eden-primary"
          >
            Start Creating Events
          </Button>

          <p className="text-sm text-white/50 mt-4 text-center">
            Simple transaction fee applies to ticket sales. No hidden charges.
          </p>
        </motion.div>
      </div>
    </section>
  );
};