import Background3D from "@/components/Background3D";
import { HeroSection } from "@/components/users/HeroSection";
import { FeaturesSection } from "@/components/users/FeaturesSection";
import { StepsSection } from "@/components/users/StepsSection";
import { UserRewardsSection } from "@/components/users/UserRewardsSection";
import RewardsSection from "@/components/sections/RewardsSection";
import CTASection from "@/components/sections/CTASection";

const UsersLanding = () => {
  return (
    <div className="min-h-screen bg-eden-dark">
      <Background3D />
      <HeroSection />
      <FeaturesSection />
      <StepsSection />
      <RewardsSection />
      <UserRewardsSection />
      <CTASection />
    </div>
  );
};

export default UsersLanding;