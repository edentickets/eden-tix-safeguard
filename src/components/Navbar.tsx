import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LayoutDashboard } from "lucide-react";
import { useAuthState } from "@/hooks/use-auth-state";
import { motion } from "framer-motion";

export const Navbar = () => {
  const { user, signOut } = useAuthState();

  const handleSignIn = () => {
    const modal = document.getElementById('auth-modal');
    if (modal) modal.classList.remove('hidden');
  };

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.nav 
      className="bg-eden-dark/50 backdrop-blur-md border-b border-white/10"
      initial="hidden"
      animate="visible"
      variants={navVariants}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <motion.div 
            className="flex items-center space-x-6"
            variants={itemVariants}
            transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
          >
            <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
              <motion.span 
                className="text-2xl font-bold gradient-text"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Eden
              </motion.span>
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
          </motion.div>

          <motion.div 
            className="flex items-center space-x-4"
            variants={itemVariants}
            transition={{ staggerChildren: 0.1, delayChildren: 0.4 }}
          >
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
                  onClick={signOut}
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
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    className="btn-gradient"
                    onClick={handleSignIn}
                  >
                    Sign Up
                  </Button>
                </motion.div>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
};