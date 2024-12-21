import { Link } from "react-router-dom";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNav = ({ isOpen, onClose }: MobileNavProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-x-0 top-16 bg-eden-dark/95 backdrop-blur-lg md:hidden">
      <nav className="flex flex-col p-4 space-y-4">
        <Link 
          to="/explore" 
          className="text-sm font-medium hover:text-eden-primary transition-colors px-4 py-2"
          onClick={onClose}
        >
          Explore Events
        </Link>
        <Link 
          to="/creators" 
          className="text-sm font-medium hover:text-eden-primary transition-colors px-4 py-2"
          onClick={onClose}
        >
          For Creators
        </Link>
        <Link 
          to="/users" 
          className="text-sm font-medium hover:text-eden-primary transition-colors px-4 py-2"
          onClick={onClose}
        >
          For Users
        </Link>
      </nav>
    </div>
  );
};