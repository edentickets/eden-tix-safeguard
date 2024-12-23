import { motion } from "framer-motion";
import { ArrowRight, Ticket, Users } from "lucide-react";
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
            className="bg-eden-primary hover:bg-eden-primary/90 text-white px-8 py-6 text-lg group"
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
            className="border-eden-primary text-eden-primary hover:bg-eden-primary/10 px-8 py-6 text-lg"
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
            className="bg-eden-secondary hover:bg-eden-secondary/90 text-white px-8 py-6 text-lg group"
          >
            Create Event
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </Link>
    </motion.div>
  );
};