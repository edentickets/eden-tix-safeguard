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
        <Button size="lg" className="bg-eden-primary hover:bg-eden-primary/90 text-white px-8 py-6">
          Explore Events
          <ArrowRight className="ml-2" />
        </Button>
      </Link>
      <Link to="/creators">
        <Button 
          size="lg" 
          variant="outline" 
          className="border-eden-primary text-eden-primary hover:bg-eden-primary/10 px-8 py-6"
        >
          Join as Creator
        </Button>
      </Link>
    </motion.div>
  );
};

export default HeroCTAs;