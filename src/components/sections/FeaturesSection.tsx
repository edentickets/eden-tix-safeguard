import FeatureCard from "@/components/FeatureCard";
import { motion } from "framer-motion";

const features = [
  {
    icon: "security" as const,
    title: "Secure & Trustworthy",
    description: "Advanced blockchain technology ensures your tickets are authentic and protected.",
    details: "Our platform uses state-of-the-art encryption and blockchain verification to eliminate fraud. Every ticket is uniquely encoded and tracked, making counterfeiting impossible and giving you peace of mind."
  },
  {
    icon: "pricing" as const,
    title: "Fair Market Pricing",
    description: "Dynamic pricing system that benefits both buyers and sellers.",
    details: "Experience transparent pricing driven by real market demand. Our smart pricing algorithm prevents scalping while ensuring fair value for both parties. Sellers get optimal returns while buyers pay reasonable prices."
  },
  {
    icon: "rewards" as const,
    title: "Exclusive Benefits",
    description: "Earn points and unlock special perks with every transaction.",
    details: "Join our rewards program to earn points on every purchase. Unlock exclusive pre-sales, VIP upgrades, and special event access. The more you use Eden, the more benefits you receive!"
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