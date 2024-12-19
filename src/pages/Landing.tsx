import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Navbar } from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import ProblemStatementSection from "@/components/sections/ProblemStatementSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import RewardsSection from "@/components/sections/RewardsSection";
import CTASection from "@/components/sections/CTASection";
import ClientsSection from "@/components/sections/ClientsSection";
import { CreateEventSection } from "@/components/landing/CreateEventSection";
import { AuthModal } from "@/components/auth/AuthModal";
import { useToast } from "@/hooks/use-toast";

const Landing = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN" && session) {
        toast({
          title: "Welcome back!",
          description: "You've successfully signed in.",
        });
        navigate("/explore");
      }
    });
  }, [navigate, toast]);

  return (
    <div className="min-h-screen bg-eden-dark">
      <Navbar />
      
      <main>
        <HeroSection />
        <ProblemStatementSection />
        <FeaturesSection />
        <RewardsSection />
        <CreateEventSection />
        <ClientsSection />
        <CTASection />
      </main>

      <AuthModal />
    </div>
  );
};

export default Landing;