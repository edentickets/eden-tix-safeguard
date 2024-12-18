import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";

interface FilterSectionProps {
  onLocationChange: (value: string) => void;
  onEventTypeChange: (value: string) => void;
  onPriceRangeChange: (value: [number, number]) => void;
  onSortChange: (value: string) => void;
}

export const FilterSection = ({
  onLocationChange,
  onEventTypeChange,
  onPriceRangeChange,
  onSortChange,
}: FilterSectionProps) => {
  const [priceRange, setPriceRange] = useState([0]);

  const handlePriceRangeChange = (value: number[]) => {
    setPriceRange(value);
    onPriceRangeChange([0, value[0]]);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Select onValueChange={onLocationChange}>
          <SelectTrigger className="bg-eden-light/30 border border-white/10 text-white">
            <SelectValue placeholder="All Locations" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Locations</SelectItem>
            <SelectItem value="Miami">Miami</SelectItem>
            <SelectItem value="New York">New York</SelectItem>
            <SelectItem value="Los Angeles">Los Angeles</SelectItem>
          </SelectContent>
        </Select>

        <Select onValueChange={onEventTypeChange}>
          <SelectTrigger className="bg-eden-light/30 border border-white/10 text-white">
            <SelectValue placeholder="All Event Types" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Event Types</SelectItem>
            <SelectItem value="concert">Concerts</SelectItem>
            <SelectItem value="festival">Festivals</SelectItem>
            <SelectItem value="conference">Conferences</SelectItem>
          </SelectContent>
        </Select>

        <Select onValueChange={onSortChange}>
          <SelectTrigger className="bg-eden-light/30 border border-white/10 text-white">
            <SelectValue placeholder="Sort By" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="date_asc">Date: Earliest First</SelectItem>
            <SelectItem value="date_desc">Date: Latest First</SelectItem>
            <SelectItem value="price_asc">Price: Low to High</SelectItem>
            <SelectItem value="price_desc">Price: High to Low</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="block text-white text-sm mb-2">
          Price Range: Up to ${priceRange[0]}
        </label>
        <Slider
          defaultValue={[500]}
          max={1000}
          step={50}
          onValueChange={handlePriceRangeChange}
          className="mt-2"
        />
      </div>
    </div>
  );
};