import { Navbar } from "@/components/Navbar";
import Background3D from "@/components/Background3D";
import { HeroSection } from "@/components/hero/HeroSection";
import { FeaturesSection } from "@/components/users/FeaturesSection";
import { UserRewardsSection } from "@/components/users/UserRewardsSection";
import CTASection from "@/components/sections/CTASection";
import ClientsSection from "@/components/sections/ClientsSection";

const Landing = () => {
  return (
    <div className="min-h-screen bg-eden-dark">
      <Background3D />
      <Navbar />
      <HeroSection />
      <ClientsSection />
      <FeaturesSection />
      <UserRewardsSection />
      <CTASection />
    </div>
  );
};

export default Landing;