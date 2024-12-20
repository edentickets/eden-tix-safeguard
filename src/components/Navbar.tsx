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
import { User } from "lucide-react";

export function Navbar() {
  const { user } = useAuthState();
  const { openModal } = useAuthModal();

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

        <div className="flex items-center gap-4">
          <CartDropdown />
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link to="/profile">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/dashboard">Dashboard</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button variant="secondary" onClick={() => openModal()}>
              Sign In
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}