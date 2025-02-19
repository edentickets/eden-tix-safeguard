import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CartDropdown } from "@/components/cart/CartDropdown";
import { Logo } from "./navbar/Logo";
import { DesktopNav } from "./navbar/DesktopNav";
import { MobileNav } from "./navbar/MobileNav";
import { UserMenu } from "./navbar/UserMenu";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-eden-dark/80 backdrop-blur supports-[backdrop-filter]:bg-eden-dark/60">
      <div className="container flex h-20 items-center justify-between px-8">
        <div className="flex items-center gap-16">
          <Logo />
          <DesktopNav />
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 text-white hover:text-eden-primary transition-colors"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        <MobileNav isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />

        <div className="flex items-center gap-6">
          <CartDropdown />
          <UserMenu />
        </div>
      </div>
    </header>
  );
}