import Background3D from "@/components/Background3D";
import { Navbar } from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import CTASection from "@/components/sections/CTASection";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Landing = () => {
  return (
    <div className="min-h-screen bg-eden-dark overflow-hidden">
      <div className="relative">
        <Background3D />
        
        {/* Animated gradient overlays */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-eden-primary/20 rounded-full filter blur-[150px]" 
        />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 2, delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-eden-secondary/20 rounded-full filter blur-[150px]" 
        />
        
        {/* Interactive floating elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/4 left-1/4 w-12 h-12 bg-eden-primary/10 rounded-full blur-sm"
          />
          <motion.div
            animate={{
              y: [0, 20, 0],
              rotate: [0, -5, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/3 right-1/4 w-16 h-16 bg-eden-secondary/10 rounded-full blur-sm"
          />
        </div>
        
        {/* Main content with enhanced animations */}
        <div className="relative">
          <Navbar />
          <HeroSection />
          <FeaturesSection />
          
          {/* Interactive CTA section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="py-20 text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-8 gradient-text">
              Ready to Experience the Future?
            </h2>
            <Button 
              size="lg"
              className="bg-eden-secondary hover:bg-eden-secondary/90 group relative overflow-hidden"
            >
              Get Started
              <motion.span
                className="inline-block ml-2"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="h-5 w-5" />
              </motion.span>
            </Button>
          </motion.div>
          
          <CTASection />
        </div>
      </div>
    </div>
  );
};

export default Landing;