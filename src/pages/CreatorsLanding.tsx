import { Navbar } from "@/components/Navbar";
import Background3D from "@/components/Background3D";
import { HeroSection } from "@/components/creators/HeroSection";
import { ProblemSolution } from "@/components/creators/ProblemSolution";
import ClientsSection from "@/components/sections/ClientsSection";

const CreatorsLanding = () => {
  return (
    <div className="min-h-screen bg-eden-dark overflow-hidden">
      <Background3D />
      <Navbar />
      <HeroSection />
      <ProblemSolution />
      <ClientsSection />
    </div>
  );
};

export default CreatorsLanding;