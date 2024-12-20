import HeroSection from "@/components/sections/HeroSection";
import { Features } from "@/components/creators/Features";
import ClientsSection from "@/components/sections/ClientsSection";
import { CTASection } from "@/components/creators/CTASection";

const Landing = () => {
  return (
    <div className="min-h-screen bg-eden-dark">
      <HeroSection />
      <Features />
      <ClientsSection />
      <CTASection />
    </div>
  );
};

export default Landing;