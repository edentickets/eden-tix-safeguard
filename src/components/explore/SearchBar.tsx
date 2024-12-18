import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  onSearchChange: (value: string) => void;
}

export const SearchBar = ({ onSearchChange }: SearchBarProps) => {
  return (
    <div className="relative">
      <Input
        type="text"
        placeholder="Search Events, Artists, or Venues"
        className="w-full h-14 pl-12 pr-4 rounded-lg bg-eden-light/50 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-eden-primary"
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
    </div>
  );
};