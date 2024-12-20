import { Gift, Star, Trophy, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const UserRewardsSection = () => {
  const rewards = [
    {
      icon: Gift,
      title: "Purchase Rewards",
      description: "Earn points for every ticket you buy. Use them for discounts on future purchases.",
      color: "text-eden-primary"
    },
    {
      icon: Star,
      title: "Attendance Bonuses",
      description: "Check in to events and earn bonus points. Unlock exclusive perks and early access.",
      color: "text-eden-secondary"
    },
    {
      icon: Trophy,
      title: "Referral Benefits",
      description: "Invite friends and earn rewards when they make their first purchase.",
      color: "text-eden-accent"
    }
  ];

  return (
    <section className="py-20 bg-eden-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-eden-primary/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-4">
            Earn While You Enjoy
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Get rewarded for every ticket purchase, event attendance, and friend referral.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {rewards.map((reward, index) => (
            <motion.div
              key={reward.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="glass-card p-8 space-y-4 h-full">
                <reward.icon className={`w-12 h-12 ${reward.color}`} />
                <h3 className="text-xl font-semibold text-white">{reward.title}</h3>
                <p className="text-white/70">{reward.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Link to="/explore">
            <Button size="lg" className="btn-gradient text-white">
              Start Earning Rewards
              <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};