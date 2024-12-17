import { motion } from "framer-motion";
import { Check, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const tiers = [
  {
    name: "Basic",
    price: "$99",
    description: "Perfect for small events and single venues",
    features: [
      {
        text: "Up to 500 tickets per event",
        tooltip: "Manage up to 500 unique tickets for each event"
      },
      {
        text: "Dynamic QR security",
        tooltip: "Time-based validation and proximity activation"
      },
      {
        text: "Email notifications",
        tooltip: "Automated email updates for important events"
      },
      {
        text: "Basic analytics",
        tooltip: "Essential event performance metrics"
      }
    ]
  },
  {
    name: "Pro",
    price: "$299",
    description: "Ideal for medium-sized events and multiple venues",
    features: [
      {
        text: "Unlimited tickets",
        tooltip: "No limit on ticket quantity per event"
      },
      {
        text: "Advanced security features",
        tooltip: "Additional venue-specific authentication"
      },
      {
        text: "Priority support",
        tooltip: "24/7 dedicated support team"
      },
      {
        text: "Custom branding",
        tooltip: "Add your logo and customize ticket design"
      },
      {
        text: "Advanced analytics",
        tooltip: "Detailed insights and custom reports"
      }
    ]
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large-scale events and festival organizers",
    features: [
      {
        text: "Multi-event management",
        tooltip: "Manage multiple events simultaneously"
      },
      {
        text: "Custom integration",
        tooltip: "Integration with your existing systems"
      },
      {
        text: "Dedicated account manager",
        tooltip: "Personal support and consulting"
      },
      {
        text: "White-label solution",
        tooltip: "Fully customizable branding and features"
      },
      {
        text: "Advanced API access",
        tooltip: "Build custom features using our API"
      }
    ]
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
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Choose the perfect plan for your events. All plans include our core security features.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-8 hover:bg-white/10 transition-colors border border-white/10"
            >
              <div className="mb-8">
                <h3 className="text-2xl font-medium mb-2">{tier.name}</h3>
                <div className="text-4xl font-bold mb-4 text-eden-primary">{tier.price}</div>
                <p className="text-white/70">{tier.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, featureIndex) => (
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
                className={index === 1 ? "w-full bg-eden-primary" : "w-full"} 
                variant={index === 1 ? "default" : "outline"}
              >
                Get Started
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};