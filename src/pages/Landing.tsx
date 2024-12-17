import { Navbar } from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import CTASection from "@/components/sections/CTASection";
import Background3D from "@/components/Background3D";

const Landing = () => {
  return (
    <div className="min-h-screen bg-eden-dark">
      <Navbar />
      <Background3D />
      <HeroSection />
      <FeaturesSection />
      <CTASection />
    </div>
  );
};

export default Landing;