import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";

interface ExploreHeroProps {
  onSearchChange: (value: string) => void;
  onLocationChange: (value: string) => void;
  onEventTypeChange: (value: string) => void;
  onPriceRangeChange: (value: [number, number]) => void;
}

export const ExploreHero = ({
  onSearchChange,
  onLocationChange,
  onEventTypeChange,
  onPriceRangeChange,
}: ExploreHeroProps) => {
  const [priceRange, setPriceRange] = useState([0]);

  const handlePriceRangeChange = (value: number[]) => {
    setPriceRange(value);
    onPriceRangeChange([0, value[0]]);
  };

  return (
    <div className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-eden-dark">
        <div className="absolute inset-0 bg-gradient-to-r from-eden-primary/20 to-eden-secondary/20 opacity-50" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px] animate-pulse" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
          Find Your Next Unforgettable Experience
        </h1>

        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search Events, Artists, or Venues"
              className="w-full h-14 pl-12 pr-4 rounded-lg bg-eden-light/50 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-eden-primary"
              onChange={(e) => onSearchChange(e.target.value)}
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>

          <div className="flex flex-wrap gap-2 mt-4 justify-center">
            <select
              className="bg-eden-light/30 border border-white/10 rounded-lg px-4 py-2 text-white"
              onChange={(e) => onLocationChange(e.target.value)}
            >
              <option value="">All Locations</option>
              <option value="Miami">Miami</option>
              <option value="New York">New York</option>
              <option value="Los Angeles">Los Angeles</option>
            </select>

            <select
              className="bg-eden-light/30 border border-white/10 rounded-lg px-4 py-2 text-white"
              onChange={(e) => onEventTypeChange(e.target.value)}
            >
              <option value="">All Event Types</option>
              <option value="concert">Concerts</option>
              <option value="festival">Festivals</option>
              <option value="conference">Conferences</option>
            </select>

            <div className="w-full max-w-xs mt-4">
              <label className="block text-white text-sm mb-2">
                Price Range: Up to ${priceRange[0]}
              </label>
              <Slider
                defaultValue={[500]}
                max={1000}
                step={50}
                onValueChange={handlePriceRangeChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};