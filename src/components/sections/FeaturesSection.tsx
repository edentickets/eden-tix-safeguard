import FeatureCard from "@/components/FeatureCard";
import { motion } from "framer-motion";

const features = [
  {
    icon: "security" as const,
    title: "Secure & Trustworthy",
    description: "Say goodbye to unsafe ticket sales.",
    details: "Every transaction is verified and secure on our platform."
  },
  {
    icon: "pricing" as const,
    title: "Fair Pricing",
    description: "No more price gouging.",
    details: "Market-driven pricing ensures the best value for everyone."
  },
  {
    icon: "rewards" as const,
    title: "Exclusive Benefits",
    description: "Earn rewards and get early access.",
    details: "Unlock special perks and benefits as you use Eden."
  }
] as const;

const FeaturesSection = () => {
  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-medium text-center mb-16 gradient-text"
        >
          Why Eden Changes the Game
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;