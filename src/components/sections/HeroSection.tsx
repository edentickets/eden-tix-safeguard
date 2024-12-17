import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="pt-40 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8"
        >
          <h1 className="text-4xl md:text-7xl font-medium tracking-tight text-white">
            Revolutionizing Event Ticketing
            <span className="block gradient-text">with Blockchain Technology</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto font-light">
            Secure. Fair. Seamless. Unlock exclusive tickets, effortless resales, and rewards—all on one platform.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-8">
            <Button size="lg" className="bg-eden-secondary text-white hover:bg-eden-secondary/90">
              Buy Tickets
            </Button>
            <Link to="/explore">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Explore Events
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;