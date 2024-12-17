import FeatureCard from "@/components/FeatureCard";
import { motion } from "framer-motion";

const FeaturesSection = () => {
  return (
    <div className="py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-medium text-center mb-16 gradient-text">
          Why Eden Changes the Game
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon="security"
            title="Secure & Trustworthy Transactions"
            description="Say goodbye to unsafe peer-to-peer ticket sales."
            details="With Eden's blockchain-powered platform, every ticket is verified, and every transaction is secure. Experience peace of mind with every purchase."
          />
          <FeatureCard
            icon="pricing"
            title="Fair Resale Prices"
            description="No more price gouging."
            details="Our live, market-driven pricing system ensures buyers and sellers get the best value—always. Transparent and fair pricing for everyone."
          />
          <FeatureCard
            icon="rewards"
            title="Exclusive Rewards & Benefits"
            description="Earn points, unlock rewards, and get early access."
            details="Earn points, unlock rewards, and get early access to events by engaging on Eden. It's ticketing reimagined for the modern era."
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;