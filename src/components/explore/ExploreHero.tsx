import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface ExploreHeroProps {
  onSearchChange: (value: string) => void;
  onLocationChange: (value: string) => void;
  onEventTypeChange: (value: string) => void;
  onPriceRangeChange: (value: [number, number]) => void;
  onSortChange: (value: string) => void;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const ExploreHero = ({
  onSearchChange,
  onLocationChange,
  onEventTypeChange,
  onPriceRangeChange,
  onSortChange,
  currentPage,
  totalPages,
  onPageChange,
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            <Select onValueChange={onLocationChange}>
              <SelectTrigger className="bg-eden-light/30 border border-white/10 text-white">
                <SelectValue placeholder="All Locations" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Locations</SelectItem>
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
                <SelectItem value="">All Event Types</SelectItem>
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

          <div className="mt-6">
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

          {totalPages > 1 && (
            <div className="mt-8">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      onClick={() => onPageChange(currentPage - 1)}
                      className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                    />
                  </PaginationItem>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <PaginationItem key={page}>
                      <PaginationLink
                        onClick={() => onPageChange(page)}
                        isActive={currentPage === page}
                      >
                        {page}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                  <PaginationItem>
                    <PaginationNext
                      onClick={() => onPageChange(currentPage + 1)}
                      className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};