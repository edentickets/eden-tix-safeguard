import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "@/integrations/supabase/client";
import { Navbar } from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import CTASection from "@/components/sections/CTASection";
import ClientsSection from "@/components/sections/ClientsSection";

const Landing = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check authentication status
    supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN" && session) {
        navigate("/explore");
      }
    });
  }, [navigate]);

  return (
    <div className="min-h-screen bg-eden-dark">
      <Navbar />
      
      {/* Main Content */}
      <main>
        <HeroSection />
        <FeaturesSection />
        <ClientsSection />
        <CTASection />
      </main>

      {/* Auth Modal */}
      <div id="auth-modal" className="hidden fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="bg-eden-dark p-8 rounded-xl max-w-md w-full mx-4">
          <Auth
            supabaseClient={supabase}
            appearance={{
              theme: ThemeSupa,
              variables: {
                default: {
                  colors: {
                    brand: '#7c3aed', // eden-primary
                    brandAccent: '#10b981', // eden-secondary
                  },
                },
              },
            }}
            providers={[]}
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;