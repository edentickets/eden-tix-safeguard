import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import ClientsSection from "@/components/sections/ClientsSection";
import CTASection from "@/components/sections/CTASection";

const Landing = () => {
  return (
    <div className="min-h-screen bg-eden-dark">
      <HeroSection />
      <FeaturesSection />
      <ClientsSection />
      <CTASection />
    </div>
  );
};

export default Landing;