import { HeroSection } from "@/components/users/HeroSection";
import { StepsSection } from "@/components/users/StepsSection";
import { FeaturesSection } from "@/components/users/FeaturesSection";
import { UserRewardsSection } from "@/components/users/UserRewardsSection";
import CTASection from "@/components/sections/CTASection";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, Ticket } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const UsersLanding = () => {
  return (
    <div className="min-h-screen bg-eden-dark">
      <HeroSection />
      
      {/* Floating CTA */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed bottom-8 right-8 z-50"
      >
        <Link to="/explore">
          <Button 
            size="lg"
            className="bg-eden-secondary hover:bg-eden-secondary/90 text-white px-8 py-6 text-lg shadow-lg"
          >
            Explore Events
            <Search className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </motion.div>

      <StepsSection />
      <FeaturesSection />
      
      {/* Mid-page CTA */}
      <div className="py-16 text-center">
        <Link to="/explore">
          <Button 
            size="lg"
            className="bg-eden-primary hover:bg-eden-primary/90 text-white px-8 py-6 text-lg"
          >
            Find Your Next Event
            <Ticket className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>

      <UserRewardsSection />
      <CTASection />
    </div>
  );
};

export default UsersLanding;