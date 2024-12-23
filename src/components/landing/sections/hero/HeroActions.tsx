import { motion } from "framer-motion";
import { ArrowRight, Users, Calendar, Ticket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const HeroActions = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
      <Link to="/users">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button 
            size="lg" 
            className="bg-eden-primary hover:bg-eden-primary/90 text-white px-8 py-6 text-lg group w-full sm:w-auto"
          >
            For Event Goers
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
    </div>
  );
};