import { SearchBar } from "./SearchBar";
import { FilterSection } from "./FilterSection";
import { LoadingSkeleton } from "@/components/ui/loading-skeleton";
import { motion } from "framer-motion";
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
  isLoading?: boolean;
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
  isLoading = false,
}: ExploreHeroProps) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-eden-dark">
        <div className="absolute inset-0 bg-gradient-to-r from-eden-primary/20 to-eden-secondary/20 opacity-50" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px] animate-pulse" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold mb-6 gradient-text"
        >
          Find Your Next Unforgettable Experience
        </motion.h1>

        <div className="max-w-2xl mx-auto space-y-8">
          {isLoading ? (
            <LoadingSkeleton className="h-14 w-full" />
          ) : (
            <motion.div variants={itemVariants}>
              <SearchBar onSearchChange={onSearchChange} />
            </motion.div>
          )}
          
          {isLoading ? (
            <LoadingSkeleton className="h-48 w-full" />
          ) : (
            <motion.div variants={itemVariants}>
              <FilterSection
                onLocationChange={onLocationChange}
                onEventTypeChange={onEventTypeChange}
                onPriceRangeChange={onPriceRangeChange}
                onSortChange={onSortChange}
              />
            </motion.div>
          )}

          {totalPages > 1 && (
            <motion.div
              variants={itemVariants}
              className="mt-8"
            >
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      onClick={() => onPageChange(currentPage - 1)}
                      className={`transition-opacity duration-200 ${
                        currentPage === 1 ? "pointer-events-none opacity-50" : ""
                      }`}
                    />
                  </PaginationItem>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <PaginationItem key={page}>
                      <PaginationLink
                        onClick={() => onPageChange(page)}
                        isActive={currentPage === page}
                        className="transition-colors duration-200 hover:bg-eden-primary/20"
                      >
                        {page}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                  <PaginationItem>
                    <PaginationNext
                      onClick={() => onPageChange(currentPage + 1)}
                      className={`transition-opacity duration-200 ${
                        currentPage === totalPages ? "pointer-events-none opacity-50" : ""
                      }`}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
};