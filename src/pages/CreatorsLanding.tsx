import { Navbar } from "@/components/Navbar";
import Background3D from "@/components/Background3D";
import { HeroSection } from "@/components/creators/HeroSection";
import { ProblemSolution } from "@/components/creators/ProblemSolution";
import { Features } from "@/components/creators/Features";
import { CTASection } from "@/components/creators/CTASection";
import { motion } from "framer-motion";

const CreatorsLanding = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-eden-dark relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-secondary opacity-5" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-eden-primary/20 via-eden-dark to-transparent" />
      <Background3D />
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <ProblemSolution />
        <Features />
        <CTASection />
      </div>
    </motion.div>
  );
};

export default CreatorsLanding;