import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-2">
      <div className="relative size-8">
        <div className="absolute inset-0 bg-gradient-primary rounded-lg rotate-180" />
        <div className="absolute inset-0.5 bg-eden-dark rounded-lg" />
        <div className="absolute inset-0 bg-gradient-primary opacity-50 rounded-lg animate-pulse" />
      </div>
      <span className="font-bold text-xl">eden</span>
    </Link>
  );
};