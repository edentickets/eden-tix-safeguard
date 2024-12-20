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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0.8, rotate: -10 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200
      }
    },
    hover: {
      scale: 1.2,
      rotate: 10,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 8
      }
    }
  };

  const crownVariants = {
    initial: { y: 0 },
    float: {
      y: [-5, 5, -5],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="py-32 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-secondary opacity-5" />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto relative"
      >
        <motion.div
          variants={containerVariants}
          className="text-center space-y-4 mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <motion.div
              initial="initial"
              animate="float"
              variants={crownVariants}
            >
              <Crown className="w-8 h-8 text-eden-primary" />
            </motion.div>
            <motion.span
              variants={itemVariants}
              className="text-sm font-medium text-eden-primary uppercase tracking-wider"
            >
              VIP Members Only
            </motion.span>
          </div>
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl font-medium gradient-text"
          >
            Join Our Elite Membership
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-white/70 max-w-2xl mx-auto"
          >
            Unlock exclusive benefits, priority access, and premium rewards as a VIP member. 
            Experience events like never before.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {vipFeatures.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="h-full"
            >
              <Card className="glass-card p-6 space-y-4 hover:border-eden-primary/30 transition-all duration-300 h-full">
                <motion.div
                  variants={iconVariants}
                  whileHover="hover"
                  className="text-eden-primary"
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-lg font-medium text-white">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default RewardsSection;
