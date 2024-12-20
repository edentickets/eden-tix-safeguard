import { motion } from "framer-motion";
import { Crown } from "lucide-react";

export const RewardsTitle = () => {
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
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2
          }
        }
      }}
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
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          className="text-sm font-medium text-eden-primary uppercase tracking-wider"
        >
          VIP Members Only
        </motion.span>
      </div>
      <motion.h2
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 }
        }}
        className="text-4xl md:text-6xl font-medium gradient-text"
      >
        Join Our Elite Membership
      </motion.h2>
      <motion.p
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 }
        }}
        className="text-xl text-white/70 max-w-2xl mx-auto"
      >
        Unlock exclusive benefits, priority access, and premium rewards as a VIP member. 
        Experience events like never before.
      </motion.p>
    </motion.div>
  );
};