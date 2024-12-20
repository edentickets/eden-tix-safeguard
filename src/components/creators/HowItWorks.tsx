import { motion } from "framer-motion";
import { ArrowRight, PlusCircle, Coins, BarChart3 } from "lucide-react";
import { Card } from "@/components/ui/card";

const steps = [
  {
    icon: <PlusCircle className="w-12 h-12 text-eden-primary" />,
    title: "Create Your Event",
    description: "Set up your event details, ticket tiers, and smart features in minutes"
  },
  {
    icon: <BarChart3 className="w-12 h-12 text-eden-secondary" />,
    title: "Manage Sales",
    description: "Track primary ticket sales and monitor market activity in real-time"
  },
  {
    icon: <Coins className="w-12 h-12 text-eden-accent" />,
    title: "Earn from Resales",
    description: "Automatically receive a share of every ticket resale transaction"
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-primary opacity-5" />
      
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-medium gradient-text mb-6">
            How It Works
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Start earning more from your events with our innovative platform
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="relative p-6 bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-colors">
                {index < steps.length - 1 && (
                  <div className="absolute hidden md:block right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-eden-primary/50" />
                  </div>
                )}
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-4 rounded-full bg-eden-primary/10">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-medium text-white">{step.title}</h3>
                  <p className="text-white/70">{step.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};