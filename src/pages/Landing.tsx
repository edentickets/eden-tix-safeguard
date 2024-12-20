import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { RewardsSection } from "@/components/sections/RewardsSection";
import { CTASection } from "@/components/sections/CTASection";
import { ClientsSection } from "@/components/sections/ClientsSection";
import { Navbar } from "@/components/Navbar";

const Landing = () => {
  return (
    <div className="min-h-screen bg-eden-dark">
      <Navbar />
      <HeroSection />
      <ClientsSection />
      <FeaturesSection />
      <RewardsSection />
      <CTASection />
    </div>
  );
};

export default Landing;