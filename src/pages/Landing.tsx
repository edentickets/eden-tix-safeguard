import HeroSection from "@/components/landing/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import ProblemStatementSection from "@/components/sections/ProblemStatementSection";
import RewardsSection from "@/components/sections/RewardsSection";
import ClientsSection from "@/components/sections/ClientsSection";
import CTASection from "@/components/sections/CTASection";
import { StepsSection } from "@/components/users/StepsSection";
import { UserRewardsSection } from "@/components/users/UserRewardsSection";

const Landing = () => {
  return (
    <div className="bg-eden-dark text-white">
      <HeroSection />
      <StepsSection />
      <FeaturesSection />
      <ProblemStatementSection />
      <RewardsSection />
      <UserRewardsSection />
      <ClientsSection />
      <CTASection />
    </div>
  );
};

export default Landing;