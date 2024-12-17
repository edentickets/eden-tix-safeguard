import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-32 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-primary opacity-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-eden-accent/20 via-eden-primary/10 to-transparent" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-7xl mx-auto text-center space-y-8"
      >
        <h1 className="text-6xl md:text-7xl font-medium tracking-tight gradient-text mb-6 leading-tight">
          Maximize Revenue with Smart Digital Ticketing
        </h1>
        <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto font-light leading-relaxed">
          Industry-lowest transaction fees and revenue share from resales. 
          Take control of your ticket sales while earning from every transfer - 
          money that used to go to scalpers.
        </p>
        <Button 
          size="lg" 
          className="bg-eden-secondary hover:bg-eden-secondary/90 text-lg px-8 py-6 mt-8"
        >
          Start Creating Events
          <ArrowRight className="ml-2" />
        </Button>
      </motion.div>
    </section>
  );
};