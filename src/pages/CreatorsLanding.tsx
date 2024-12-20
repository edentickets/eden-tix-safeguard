import Background3D from "@/components/Background3D";
import { HeroSection } from "@/components/creators/HeroSection";
import { HowItWorks } from "@/components/creators/HowItWorks";
import { RevenueModel } from "@/components/creators/RevenueModel";
import { TrustedCreators } from "@/components/creators/TrustedCreators";
import { BenefitsSection } from "@/components/creators/BenefitsSection";
import { PricingSection } from "@/components/creators/PricingSection";
import { CTASection } from "@/components/creators/CTASection";
import ClientsSection from "@/components/sections/ClientsSection";

const CreatorsLanding = () => {
  return (
    <div className="min-h-screen bg-eden-dark overflow-hidden">
      <Background3D />
      <HeroSection />
      <ClientsSection />
      <HowItWorks />
      <RevenueModel />
      <TrustedCreators />
      <BenefitsSection />
      <PricingSection />
      <CTASection />
    </div>
  );
};

export default CreatorsLanding;