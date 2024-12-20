import { SearchBar } from "./SearchBar";
import { FilterSection } from "./FilterSection";
import { LoadingSkeleton } from "@/components/ui/loading-skeleton";
import { motion } from "framer-motion";
import { HeroBackground } from "./HeroBackground";
import { HeroTitle } from "./HeroTitle";
import { ExplorePagination } from "./ExplorePagination";

interface ExploreHeroProps {
  onSearchChange: (value: string) => void;
  onLocationChange: (value: string) => void;
  onEventTypeChange: (value: string) => void;
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
      <HeroBackground />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <HeroTitle variants={itemVariants} />

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
                onSortChange={onSortChange}
              />
            </motion.div>
          )}

          <ExplorePagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={onPageChange}
            variants={itemVariants}
          />
        </div>
      </motion.div>
    </div>
  );
};