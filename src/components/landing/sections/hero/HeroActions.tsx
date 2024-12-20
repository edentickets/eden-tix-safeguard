import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const HeroActions = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
      className="flex flex-col sm:flex-row justify-center gap-4 mt-8"
    >
      <Link to="/explore">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button 
            size="lg" 
            className="bg-eden-secondary hover:bg-eden-secondary/90 text-white px-8 py-6 text-lg group"
          >
            Explore Events
            <motion.span
              className="inline-block ml-2"
              animate={{ x: [0, 4, 0] }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.span>
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
            className="border-eden-primary text-eden-primary hover:bg-eden-primary/10 px-8 py-6 text-lg"
          >
            Create Event
          </Button>
        </motion.div>
      </Link>
    </motion.div>
  );
};