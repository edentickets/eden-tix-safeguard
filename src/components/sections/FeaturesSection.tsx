import FeatureCard from "@/components/FeatureCard";
import { motion } from "framer-motion";

const features = [
  {
    icon: "security" as const,
    title: "Security First",
    description: "Your tickets are protected by blockchain technology",
    details: "Every ticket is uniquely encoded and tracked on the blockchain, making counterfeiting impossible. Our platform ensures that your tickets are authentic and your transactions are secure."
  },
  {
    icon: "pricing" as const,
    title: "Fair Pricing",
    description: "Market-driven prices that benefit everyone",
    details: "Our dynamic pricing system prevents scalping while ensuring fair market value. Sellers get optimal returns and buyers pay reasonable prices, creating a balanced marketplace."
  },
  {
    icon: "rewards" as const,
    title: "Rewards Program",
    description: "Earn points with every transaction",
    details: "Join our rewards program to earn points on purchases. Get access to exclusive pre-sales, VIP upgrades, and special event access. The more you participate, the more benefits you receive."
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
          Why Choose Eden
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