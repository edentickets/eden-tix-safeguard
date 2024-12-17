import FeatureCard from "@/components/FeatureCard";
import { motion } from "framer-motion";

const FeaturesSection = () => {
  const features = [
    {
      icon: "security" as const,
      title: "Secure & Trustworthy Transactions",
      description: "Say goodbye to unsafe peer-to-peer ticket sales.",
      details: "With Eden's blockchain-powered platform, every ticket is verified, and every transaction is secure. Experience peace of mind with every purchase."
    },
    {
      icon: "pricing" as const,
      title: "Fair Resale Prices",
      description: "No more price gouging.",
      details: "Our live, market-driven pricing system ensures buyers and sellers get the best value—always. Transparent and fair pricing for everyone."
    },
    {
      icon: "rewards" as const,
      title: "Exclusive Rewards & Benefits",
      description: "Earn points, unlock rewards, and get early access.",
      details: "Earn points, unlock rewards, and get early access to events by engaging on Eden. It's ticketing reimagined for the modern era."
    }
  ];

  return (
    <div className="py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
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
              transition={{ duration: 0.8, delay: index * 0.2 }}
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