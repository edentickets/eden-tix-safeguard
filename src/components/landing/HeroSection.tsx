import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Background3D from "@/components/Background3D";

export const LandingHero = () => {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <Background3D />
      
      {/* Background Effects */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-primary"
      />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-eden-accent/20 via-eden-primary/10 to-transparent"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-7xl mx-auto text-center space-y-8"
      >
        <motion.h1 
          className="text-5xl md:text-7xl font-bold tracking-tight leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="gradient-text">Next-Gen Digital</span>
          <span className="block text-white mt-2">Event Ticketing</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto font-light leading-relaxed"
        >
          Create, manage, and sell tickets with confidence using our secure digital platform. 
          Experience the future of event ticketing.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <Link to="/explore">
            <Button 
              size="lg" 
              className="bg-eden-secondary hover:bg-eden-secondary/90 text-white px-8 py-6 text-lg group"
            >
              Explore Events
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          
          <Link to="/creators">
            <Button 
              size="lg" 
              variant="outline"
              className="border-eden-primary text-eden-primary hover:bg-eden-primary/10 px-8 py-6 text-lg"
            >
              Create Event
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};