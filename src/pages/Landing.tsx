import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Navbar } from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import ProblemStatementSection from "@/components/sections/ProblemStatementSection";
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
        <HeroSection />
        <ProblemStatementSection />
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