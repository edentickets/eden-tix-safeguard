import Background3D from "@/components/Background3D";
import { Navbar } from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import CTASection from "@/components/sections/CTASection";

const Landing = () => {
  return (
    <div className="min-h-screen bg-eden-dark overflow-hidden">
      <div className="relative">
        <Background3D />
        
        {/* Gradient overlays */}
        <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-eden-primary/20 rounded-full filter blur-[150px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-eden-secondary/20 rounded-full filter blur-[150px] animate-pulse delay-700" />
        
        {/* Main content */}
        <div className="relative">
          <Navbar />
          <HeroSection />
          <FeaturesSection />
          <CTASection />
        </div>
      </div>
    </div>
  );
};

export default Landing;