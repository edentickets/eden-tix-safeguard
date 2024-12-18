import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AuthModal = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN') {
        // Close the modal
        const modal = document.getElementById('auth-modal');
        if (modal) {
          modal.classList.add('hidden');
        }

        // Show success toast
        toast({
          title: "Successfully signed in",
          description: "Welcome to the creator platform!",
        });

        // Redirect to creator dashboard
        navigate('/dashboard');
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate, toast]);

  return (
    <div id="auth-modal" className="hidden fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-eden-dark p-8 rounded-xl max-w-md w-full mx-4">
        <Auth
          supabaseClient={supabase}
          appearance={{
            theme: ThemeSupa,
            variables: {
              default: {
                colors: {
                  brand: '#7c3aed',
                  brandAccent: '#10b981',
                },
              },
            },
          }}
          providers={[]}
          redirectTo={`${window.location.origin}/dashboard`}
        />
      </div>
    </div>
  );
};