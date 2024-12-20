import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const CTAButtons = () => {
  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: { scale: 0.95 }
  };

  return (
    <motion.div 
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      className="flex flex-col sm:flex-row justify-center gap-4"
    >
      <Link to="/explore">
        <motion.div
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <Button 
            size="lg" 
            className="bg-eden-secondary text-white hover:bg-eden-secondary/90 px-8 py-6 text-lg group"
          >
            Browse Events
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
      
      <Link to="/users">
        <motion.div
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <Button 
            size="lg" 
            variant="outline"
            className="border-eden-primary text-eden-primary hover:bg-eden-primary/10 px-8 py-6 text-lg"
          >
            Join Eden
          </Button>
        </motion.div>
      </Link>
    </motion.div>
  );
};