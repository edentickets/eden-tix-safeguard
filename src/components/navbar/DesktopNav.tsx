import { Link } from "react-router-dom";

export const DesktopNav = () => {
  return (
    <nav className="hidden md:flex items-center gap-8">
      <Link 
        to="/explore" 
        className="text-sm font-medium text-white/90 hover:text-eden-primary transition-all duration-300 hover:scale-105 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-eden-primary hover:after:w-full after:transition-all after:duration-300"
      >
        Explore Events
      </Link>
      <Link 
        to="/creators" 
        className="text-sm font-medium text-white/90 hover:text-eden-primary transition-all duration-300 hover:scale-105 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-eden-primary hover:after:w-full after:transition-all after:duration-300"
      >
        For Creators
      </Link>
      <Link 
        to="/users" 
        className="text-sm font-medium text-white/90 hover:text-eden-primary transition-all duration-300 hover:scale-105 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-eden-primary hover:after:w-full after:transition-all after:duration-300"
      >
        For Users
      </Link>
    </nav>
  );
};