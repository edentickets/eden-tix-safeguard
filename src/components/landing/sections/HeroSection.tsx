import { motion } from "framer-motion";
import { ArrowRight, Ticket, Users, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Background3D from "@/components/Background3D";
import { HeroTitle } from "./hero/HeroTitle";
import { HeroDescription } from "./hero/HeroDescription";

const HeroSection = () => {
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
        <HeroTitle />
        <HeroDescription />
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/explore">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="bg-eden-primary hover:bg-eden-primary/90 text-white px-8 py-6 text-lg group w-full sm:w-auto"
              >
                Explore Events
                <Ticket className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </Link>
          
          <Link to="/creators">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                variant="outline"
                className="border-eden-primary text-eden-primary hover:bg-eden-primary/10 px-8 py-6 text-lg w-full sm:w-auto"
              >
                For Event Creators
                <Users className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </Link>

          <Link to="/create-event">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="bg-eden-secondary hover:bg-eden-secondary/90 text-white px-8 py-6 text-lg group w-full sm:w-auto"
              >
                Create Event
                <Calendar className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </Link>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="pt-12"
        >
          <p className="text-white/60 text-sm">
            Join over 100,000+ event enthusiasts worldwide
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;