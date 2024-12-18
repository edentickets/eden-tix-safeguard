import { motion } from "framer-motion";
import { Award, Gift, Star, BadgeDollarSign } from "lucide-react";
import { Card } from "@/components/ui/card";

const rewardFeatures = [
  {
    icon: <BadgeDollarSign className="w-8 h-8 text-eden-primary" />,
    title: "Earn on Every Purchase",
    description: "Get 100 points for every ticket you buy. Points add up fast!"
  },
  {
    icon: <Gift className="w-8 h-8 text-eden-secondary" />,
    title: "Exclusive Rewards",
    description: "Redeem points for merchandise, VIP upgrades, and exclusive event access"
  },
  {
    icon: <Star className="w-8 h-8 text-eden-accent" />,
    title: "Member Benefits",
    description: "Unlock special discounts and early access to popular events"
  },
  {
    icon: <Award className="w-8 h-8 text-eden-primary" />,
    title: "Tier Privileges",
    description: "Earn more as you climb our membership tiers with special bonuses"
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
          <h2 className="text-4xl md:text-6xl font-medium gradient-text">
            Earn While You Experience
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Join our rewards program and turn every ticket purchase into points you can redeem for amazing benefits
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {rewardFeatures.map((feature, index) => (
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