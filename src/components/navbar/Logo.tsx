import { Link } from "react-router-dom";
import { Building2 } from "lucide-react";

export const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-2">
      <Building2 className="h-8 w-8 text-eden-primary" />
      <span className="font-bold text-xl text-white">eden</span>
    </Link>
  );
};