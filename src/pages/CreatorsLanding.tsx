import Background3D from "@/components/Background3D";
import { HeroSection } from "@/components/creators/HeroSection";
import { ProblemSolution } from "@/components/creators/ProblemSolution";
import { Features } from "@/components/creators/Features";
import { CTASection } from "@/components/creators/CTASection";
import { PricingSection } from "@/components/creators/PricingSection";
import { TestimonialsSection } from "@/components/creators/TestimonialsSection";
import ClientsSection from "@/components/sections/ClientsSection";

const CreatorsLanding = () => {
  return (
    <div className="min-h-screen bg-eden-dark overflow-hidden">
      <Background3D />
      <HeroSection />
      <ClientsSection />
      <ProblemSolution />
      <Features />
      <TestimonialsSection />
      <PricingSection />
      <CTASection />
    </div>
  );
};

export default CreatorsLanding;