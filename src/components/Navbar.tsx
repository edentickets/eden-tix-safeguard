import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LayoutDashboard } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="bg-eden-dark/50 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center space-x-6">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold gradient-text">Eden</span>
            </Link>
            <Link to="/explore">
              <Button variant="ghost" className="text-white hover:text-eden-primary">
                Explore
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button variant="ghost" className="text-white hover:text-eden-primary flex items-center gap-2">
                <LayoutDashboard className="w-4 h-4" />
                Dashboard
              </Button>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-white hover:text-eden-primary">
              Sign In
            </Button>
            <Button className="btn-gradient">Sign Up</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};