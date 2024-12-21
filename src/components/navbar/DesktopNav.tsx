import { Link } from "react-router-dom";

export const DesktopNav = () => {
  return (
    <nav className="hidden md:flex items-center gap-6">
      <Link to="/explore" className="text-sm font-medium hover:text-eden-primary transition-colors">
        Explore Events
      </Link>
      <Link to="/creators" className="text-sm font-medium hover:text-eden-primary transition-colors">
        For Creators
      </Link>
      <Link to="/users" className="text-sm font-medium hover:text-eden-primary transition-colors">
        For Users
      </Link>
    </nav>
  );
};