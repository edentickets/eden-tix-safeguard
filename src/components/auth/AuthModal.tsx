import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "@/integrations/supabase/client";

export const AuthModal = () => {
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
        />
      </div>
    </div>
  );
};