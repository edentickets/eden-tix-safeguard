import { Link } from "react-router-dom";
import { Building2 } from "lucide-react";

export const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-2">
      <div className="relative">
        <Building2 className="h-8 w-8 text-eden-primary" />
        <div className="absolute inset-0 bg-gradient-primary opacity-20 rounded-lg animate-pulse" />
      </div>
      <span className="font-bold text-xl text-white tracking-wide">eden</span>
    </Link>
  );
};