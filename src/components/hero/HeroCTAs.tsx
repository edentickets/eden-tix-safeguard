import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HeroCTAs = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2 }}
      className="flex flex-col sm:flex-row justify-center gap-4 pt-8"
    >
      <Link to="/explore">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button 
            size="lg" 
            className="bg-eden-primary hover:bg-eden-primary/90 text-white px-8 py-6 group"
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
            className="border-eden-primary text-eden-primary hover:bg-eden-primary/10 px-8 py-6"
          >
            Join as Creator
          </Button>
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default HeroCTAs;