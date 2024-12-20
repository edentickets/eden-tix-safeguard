import { HeroSection } from "@/components/landing/sections/HeroSection";
import { FeaturesSection } from "@/components/landing/sections/FeaturesSection";
import { ClientsSection } from "@/components/landing/sections/ClientsSection";
import { RewardsSection } from "@/components/landing/sections/RewardsSection";
import { CTASection } from "@/components/landing/sections/CTASection";

const Landing = () => {
  return (
    <div className="min-h-screen bg-eden-dark">
      <HeroSection />
      <FeaturesSection />
      <ClientsSection />
      <RewardsSection />
      <CTASection />
    </div>
  );
};

export default Landing;