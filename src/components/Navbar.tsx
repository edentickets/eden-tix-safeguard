import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LayoutDashboard } from "lucide-react";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export const Navbar = () => {
  const [user, setUser] = useState(null);
  const { toast } = useToast();

  useEffect(() => {
    // Check initial auth state
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSignIn = () => {
    const modal = document.getElementById('auth-modal');
    if (modal) modal.classList.remove('hidden');
  };

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast({
        title: "Error signing out",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Signed out successfully",
        description: "Come back soon!",
      });
    }
  };

  return (
    <nav className="bg-eden-dark/50 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center space-x-6">
            <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
              <span className="text-2xl font-bold gradient-text">Eden</span>
            </Link>

            <Link to="/creators">
              <Button variant="ghost" className="text-white hover:text-eden-primary">
                For Creators
              </Button>
            </Link>

            <Link to="/users">
              <Button variant="ghost" className="text-white hover:text-eden-primary">
                For Users
              </Button>
            </Link>

            <Link to="/explore">
              <Button variant="ghost" className="text-white hover:text-eden-primary">
                Explore
              </Button>
            </Link>

            {user && (
              <Link to="/dashboard">
                <Button variant="ghost" className="text-white hover:text-eden-primary flex items-center gap-2">
                  <LayoutDashboard className="w-4 h-4" />
                  Dashboard
                </Button>
              </Link>
            )}
          </div>

          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <Link to="/user-profile">
                  <Button variant="ghost" className="text-white hover:text-eden-primary">
                    Profile
                  </Button>
                </Link>
                <Button 
                  variant="ghost" 
                  className="text-white hover:text-eden-primary"
                  onClick={handleSignOut}
                >
                  Sign Out
                </Button>
              </>
            ) : (
              <>
                <Button 
                  variant="ghost" 
                  className="text-white hover:text-eden-primary"
                  onClick={handleSignIn}
                >
                  Sign In
                </Button>
                <Button 
                  className="btn-gradient"
                  onClick={handleSignIn}
                >
                  Sign Up
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};