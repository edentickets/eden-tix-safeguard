import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuthState } from "@/hooks/use-auth-state";
import { useAuthModal } from "@/hooks/use-auth-modal";
import { CartDropdown } from "@/components/cart/CartDropdown";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, User, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const { user } = useAuthState();
  const { openModal } = useAuthModal();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-eden-dark/80 backdrop-blur supports-[backdrop-filter]:bg-eden-dark/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="relative size-8">
            <div className="absolute inset-0 bg-gradient-primary rounded-lg rotate-180" />
            <div className="absolute inset-0.5 bg-eden-dark rounded-lg" />
            <div className="absolute inset-0 bg-gradient-primary opacity-50 rounded-lg animate-pulse" />
          </div>
          <span className="font-bold text-xl">eden</span>
        </Link>

        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 text-white"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Desktop Navigation */}
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

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="fixed inset-x-0 top-16 bg-eden-dark/95 backdrop-blur-lg md:hidden">
            <nav className="flex flex-col p-4 space-y-4">
              <Link 
                to="/explore" 
                className="text-sm font-medium hover:text-eden-primary transition-colors px-4 py-2"
                onClick={toggleMobileMenu}
              >
                Explore Events
              </Link>
              <Link 
                to="/creators" 
                className="text-sm font-medium hover:text-eden-primary transition-colors px-4 py-2"
                onClick={toggleMobileMenu}
              >
                For Creators
              </Link>
              <Link 
                to="/users" 
                className="text-sm font-medium hover:text-eden-primary transition-colors px-4 py-2"
                onClick={toggleMobileMenu}
              >
                For Users
              </Link>
            </nav>
          </div>
        )}

        <div className="flex items-center gap-4">
          <CartDropdown />
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-9 w-9">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem asChild>
                  <Link to="/profile" className="w-full">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/dashboard" className="w-full">Dashboard</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button 
              variant="secondary" 
              onClick={() => openModal()}
              className="hidden md:inline-flex"
            >
              Sign In
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}