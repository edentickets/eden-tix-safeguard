import { motion } from "framer-motion";
import { Crown, Gift, Star, BadgeDollarSign } from "lucide-react";
import { Card } from "@/components/ui/card";

const vipFeatures = [
  {
    icon: <Crown className="w-8 h-8 text-eden-primary" />,
    title: "Priority Access",
    description: "Get exclusive pre-sale access and reserve tickets before they go public"
  },
  {
    icon: <Gift className="w-8 h-8 text-eden-secondary" />,
    title: "VIP Rewards",
    description: "Earn points on every purchase to redeem for merchandise, upgrades, and exclusive access"
  },
  {
    icon: <BadgeDollarSign className="w-8 h-8 text-eden-accent" />,
    title: "Reduced Fees",
    description: "Enjoy industry-lowest transaction fees and special VIP pricing on select events"
  },
  {
    icon: <Star className="w-8 h-8 text-eden-primary" />,
    title: "Premium Benefits",
    description: "Access member-only events, exclusive content, and special promotional offers"
  }
];

const RewardsSection = () => {
  return (
    <section className="py-32 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-secondary opacity-5" />
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-medium gradient-text mb-8">
            Join Our Elite Membership
          </h2>
          
          <div className="relative -mt-4 mb-6">
            <div className="flex items-center justify-center gap-2 bg-eden-dark/80 backdrop-blur-sm py-2 px-4 rounded-full inline-block mx-auto">
              <Crown className="w-6 h-6 text-eden-primary" />
              <span className="text-sm font-medium text-eden-primary uppercase tracking-wider">VIP Members Only</span>
            </div>
          </div>

          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Unlock exclusive benefits, priority access, and premium rewards as a VIP member. Experience events like never before.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {vipFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="glass-card p-6 space-y-4 hover:border-eden-primary/30 transition-all duration-300">
                <div className="text-eden-primary">{feature.icon}</div>
                <h3 className="text-lg font-medium text-white">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RewardsSection;