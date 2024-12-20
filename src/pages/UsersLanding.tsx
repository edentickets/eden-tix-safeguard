import { HeroSection } from "@/components/users/HeroSection";
import { StepsSection } from "@/components/users/StepsSection";
import { FeaturesSection } from "@/components/users/FeaturesSection";
import { UserRewardsSection } from "@/components/users/UserRewardsSection";
import CTASection from "@/components/sections/CTASection";

const UsersLanding = () => {
  return (
    <div className="min-h-screen bg-eden-dark">
      <HeroSection />
      <StepsSection />
      <FeaturesSection />
      <UserRewardsSection />
      <CTASection />
    </div>
  );
};

export default UsersLanding;