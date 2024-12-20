import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

interface SearchBarProps {
  onSearchChange: (value: string) => void;
}

export const SearchBar = ({ onSearchChange }: SearchBarProps) => {
  return (
    <motion.div 
      className="relative"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Input
        type="text"
        placeholder="Search Events, Artists, or Venues"
        className="w-full h-14 pl-12 pr-4 rounded-lg bg-eden-light/30 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-eden-primary transition-all duration-200"
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
      <div className="absolute inset-0 -z-10 animate-pulse bg-eden-primary/5 rounded-lg blur-xl" />
    </motion.div>
  );
};