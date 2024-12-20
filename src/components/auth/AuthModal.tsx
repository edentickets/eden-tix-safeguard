import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "@/integrations/supabase/client";
import { X } from "lucide-react";

export const AuthModal = () => {
  const handleClose = () => {
    const modal = document.getElementById('auth-modal');
    if (modal) modal.classList.add('hidden');
  };

  return (
    <div 
      id="auth-modal" 
      className="hidden fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      <div className="bg-eden-dark p-4 sm:p-8 rounded-xl max-w-md w-full mx-auto my-8 relative">
        <button
          onClick={handleClose}
          className="absolute right-2 top-2 sm:right-4 sm:top-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="h-5 w-5" />
        </button>
        
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">Welcome to Eden</h2>
        
        <Auth
          supabaseClient={supabase}
          appearance={{
            theme: ThemeSupa,
            variables: {
              default: {
                colors: {
                  brand: '#7c3aed',
                  brandAccent: '#10b981',
                  inputBackground: 'transparent',
                  inputText: 'white',
                  inputPlaceholder: 'gray',
                },
                borderWidths: {
                  buttonBorderWidth: '0px',
                  inputBorderWidth: '1px',
                },
                radii: {
                  borderRadiusButton: '8px',
                  buttonBorderRadius: '8px',
                  inputBorderRadius: '8px',
                },
              },
            },
            className: {
              container: 'text-white',
              label: 'text-white',
              button: 'bg-eden-primary hover:bg-eden-primary/90 text-white transition-colors',
              input: 'bg-white/5 border-white/10 text-white placeholder:text-gray-400',
            },
          }}
          providers={[]}
        />
      </div>
    </div>
  );
};