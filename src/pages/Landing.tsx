import Background3D from "@/components/Background3D";
import { Navbar } from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import CTASection from "@/components/sections/CTASection";

const Landing = () => {
  return (
    <div className="min-h-screen bg-eden-dark">
      <Background3D />
      <div className="relative">
        <Navbar />
        <HeroSection />
        <FeaturesSection />
        <CTASection />
      </div>
    </div>
  );
};

export default Landing;