import Background3D from "@/components/Background3D";
import { HeroSection } from "@/components/creators/HeroSection";
import { HowItWorks } from "@/components/creators/HowItWorks";
import { RevenueModel } from "@/components/creators/RevenueModel";
import { TrustedCreators } from "@/components/creators/TrustedCreators";
import { BenefitsSection } from "@/components/creators/BenefitsSection";
import { PricingSection } from "@/components/creators/PricingSection";
import { TestimonialsSection } from "@/components/creators/TestimonialsSection";
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
        className="fixed bottom-8 right-8 z-50 hidden md:block"
      >
        <Link to="/dashboard/create-campaign">
          <Button 
            size="lg"
            className="bg-eden-secondary hover:bg-eden-secondary/90 text-white px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            Create Event
            <Calendar className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </motion.div>

      <ClientsSection />
      <HowItWorks />
      
      {/* Mid-page CTA */}
      <div className="py-24 text-center bg-gradient-to-b from-transparent to-eden-light/5">
        <Link to="/dashboard">
          <Button 
            size="lg"
            className="bg-eden-primary hover:bg-eden-primary/90 text-white px-12 py-8 text-xl group"
          >
            Start Creating Events
            <motion.span
              className="inline-block ml-2"
              animate={{ x: [0, 4, 0] }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <ArrowRight className="h-6 w-6 group-hover:scale-110 transition-transform" />
            </motion.span>
          </Button>
        </Link>
      </div>

      <DashboardPreview />
      <RevenueModel />
      <TrustedCreators />
      <BenefitsSection />
      <PricingSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
};

export default CreatorsLanding;