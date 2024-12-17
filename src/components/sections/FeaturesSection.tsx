import FeatureCard from "@/components/FeatureCard";

const features = [
  {
    icon: "security" as const,
    title: "Secure Ticket Resales",
    description: "Blockchain-Protected Transactions",
    details: "Every ticket is uniquely encoded and tracked on the blockchain, making counterfeiting impossible. Our platform ensures that your tickets are authentic and your transactions are secure."
  },
  {
    icon: "pricing" as const,
    title: "Dynamic Pricing",
    description: "Market-Driven Value",
    details: "Our dynamic pricing system prevents scalping while ensuring fair market value. Sellers get optimal returns and buyers pay reasonable prices, creating a balanced marketplace."
  },
  {
    icon: "rewards" as const,
    title: "Rewards Program",
    description: "Earn While You Trade",
    details: "Join our rewards program to earn points on purchases. Get access to exclusive pre-sales, VIP upgrades, and special event access. The more you participate, the more benefits you receive."
  }
] as const;

const FeaturesSection = () => {
  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-medium text-center mb-16 gradient-text">
          Why Choose Eden
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;