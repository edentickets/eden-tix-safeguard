import HeroSection from "@/components/landing/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import ProblemStatementSection from "@/components/sections/ProblemStatementSection";
import RewardsSection from "@/components/sections/RewardsSection";
import ClientsSection from "@/components/sections/ClientsSection";
import CTASection from "@/components/sections/CTASection";

const Landing = () => {
  return (
    <div className="bg-eden-dark text-white">
      <HeroSection />
      <FeaturesSection />
      <ProblemStatementSection />
      <RewardsSection />
      <ClientsSection />
      <CTASection />
    </div>
  );
};

export default Landing;