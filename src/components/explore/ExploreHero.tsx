import { SearchBar } from "./SearchBar";
import { FilterSection } from "./FilterSection";
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

        <div className="max-w-2xl mx-auto space-y-8">
          <SearchBar onSearchChange={onSearchChange} />
          
          <FilterSection
            onLocationChange={onLocationChange}
            onEventTypeChange={onEventTypeChange}
            onPriceRangeChange={onPriceRangeChange}
            onSortChange={onSortChange}
          />

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