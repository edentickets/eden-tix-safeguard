import Background3D from "@/components/Background3D";
import { HeroSection } from "@/components/creators/HeroSection";
import { HowItWorks } from "@/components/creators/HowItWorks";
import { RevenueModel } from "@/components/creators/RevenueModel";
import { TrustedCreators } from "@/components/creators/TrustedCreators";
import { BenefitsSection } from "@/components/creators/BenefitsSection";
import { PricingSection } from "@/components/creators/PricingSection";
import { CTASection } from "@/components/creators/CTASection";
import { DashboardPreview } from "@/components/creators/DashboardPreview";
import ClientsSection from "@/components/sections/ClientsSection";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CreatorsLanding = () => {
  return (
    <div className="min-h-screen bg-eden-dark overflow-hidden">
      <Background3D />
      <HeroSection />
      
      {/* Floating CTA */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed bottom-8 right-8 z-50"
      >
        <Link to="/dashboard/create-campaign">
          <Button 
            size="lg"
            className="bg-eden-secondary hover:bg-eden-secondary/90 text-white px-8 py-6 text-lg shadow-lg"
          >
            Create Event
            <Calendar className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </motion.div>

      <ClientsSection />
      <HowItWorks />
      
      {/* Mid-page CTA */}
      <div className="py-16 text-center">
        <Link to="/dashboard">
          <Button 
            size="lg"
            className="bg-eden-primary hover:bg-eden-primary/90 text-white px-8 py-6 text-lg"
          >
            Start Creating Events
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>

      <DashboardPreview />
      <RevenueModel />
      <TrustedCreators />
      <BenefitsSection />
      <PricingSection />
      <CTASection />
    </div>
  );
};

export default CreatorsLanding;