import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Navbar } from "@/components/Navbar";
import { HeroContent } from "@/components/landing/HeroContent";
import { HeroFeatures } from "@/components/landing/HeroFeatures";
import FeaturesSection from "@/components/sections/FeaturesSection";
import CTASection from "@/components/sections/CTASection";
import ClientsSection from "@/components/sections/ClientsSection";
import { CreateEventSection } from "@/components/landing/CreateEventSection";
import { AuthModal } from "@/components/auth/AuthModal";

const Landing = () => {
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN" && session) {
        navigate("/explore");
      }
    });
  }, [navigate]);

  return (
    <div className="min-h-screen bg-eden-dark">
      <Navbar />
      
      <main>
        <div className="relative min-h-screen flex items-center justify-center py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-primary opacity-10" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-eden-accent/20 via-eden-primary/10 to-transparent" />
          
          <div className="relative max-w-7xl mx-auto">
            <HeroContent />
            <HeroFeatures />
          </div>
        </div>

        <FeaturesSection />
        <CreateEventSection />
        <ClientsSection />
        <CTASection />
      </main>

      <AuthModal />
    </div>
  );
};

export default Landing;