import { LandingHero } from "@/components/landing/HeroSection";
import { FeaturesGrid } from "@/components/landing/FeaturesGrid";
import ClientsSection from "@/components/sections/ClientsSection";
import { UserRewardsSection } from "@/components/users/UserRewardsSection";
import CTASection from "@/components/sections/CTASection";

const Landing = () => {
  return (
    <div className="min-h-screen bg-eden-dark">
      <LandingHero />
      <FeaturesGrid />
      <ClientsSection />
      <UserRewardsSection />
      <CTASection />
    </div>
  );
};

export default Landing;