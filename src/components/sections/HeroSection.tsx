import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-primary opacity-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-eden-accent/20 via-eden-primary/10 to-transparent" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-6xl mx-auto text-center space-y-6 md:space-y-8"
      >
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-medium tracking-tight gradient-text leading-tight px-4">
          Next-Generation Digital Ticketing
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white/70 max-w-2xl mx-auto font-light leading-relaxed px-4">
          Create secure digital tickets with dynamic QR technology and smart features. 
          Plus, unlock new revenue streams by earning from every resale in your secondary market.
        </p>
        <Button 
          size="lg" 
          className="bg-eden-secondary hover:bg-eden-secondary/90 text-base md:text-lg px-6 md:px-8 py-4 md:py-6 mt-8"
        >
          Start Creating Events
          <ArrowRight className="ml-2" />
        </Button>
      </motion.div>
    </section>
  );
};

export default HeroSection;