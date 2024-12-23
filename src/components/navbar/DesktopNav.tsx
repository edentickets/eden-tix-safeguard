import { Link } from "react-router-dom";

export const DesktopNav = () => {
  return (
    <nav className="hidden md:flex items-center gap-8">
      <Link 
        to="/explore" 
        className="text-sm font-medium text-white hover:text-eden-primary transition-all duration-200 px-3 py-2 rounded-md hover:bg-white/5 relative group"
      >
        <span className="relative z-10">Explore Events</span>
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-eden-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
      </Link>
      <Link 
        to="/creators" 
        className="text-sm font-medium text-white hover:text-eden-primary transition-all duration-200 px-3 py-2 rounded-md hover:bg-white/5 relative group"
      >
        <span className="relative z-10">For Creators</span>
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-eden-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
      </Link>
      <Link 
        to="/users" 
        className="text-sm font-medium text-white hover:text-eden-primary transition-all duration-200 px-3 py-2 rounded-md hover:bg-white/5 relative group"
      >
        <span className="relative z-10">For Users</span>
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-eden-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
      </Link>
    </nav>
  );
};