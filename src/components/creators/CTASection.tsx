import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CTASection = () => {
  return (
    <section className="py-32 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-primary opacity-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-eden-accent/20 via-eden-primary/10 to-transparent" />
      <div className="max-w-7xl mx-auto text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-6xl font-medium text-white mb-8">
            Transform Your Event Experience
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto font-light">
            Join Eden to create secure digital events with smart features, while earning from 
            both primary sales and resales through industry-low fees.
          </p>
          <Button 
            size="lg" 
            className="bg-eden-dark hover:bg-eden-dark/90 text-lg px-8 py-6"
          >
            Start Creating Events
            <ArrowRight className="ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};