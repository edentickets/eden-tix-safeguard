import { Navbar } from "@/components/Navbar";
import Background3D from "@/components/Background3D";
import { HeroSection } from "@/components/users/HeroSection";
import { FeaturesSection } from "@/components/users/FeaturesSection";
import { StepsSection } from "@/components/users/StepsSection";
import { UserRewardsSection } from "@/components/users/UserRewardsSection";
import CTASection from "@/components/sections/CTASection";

const UsersLanding = () => {
  return (
    <div className="min-h-screen bg-eden-dark">
      <Navbar />
      <Background3D />
      <HeroSection />
      <FeaturesSection />
      <StepsSection />
      <UserRewardsSection />
      <CTASection />
    </div>
  );
};

export default UsersLanding;