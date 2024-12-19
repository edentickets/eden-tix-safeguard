import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { ExploreHero } from "@/components/explore/ExploreHero";
import { EventGrid } from "@/components/explore/EventGrid";
import { CategorySection } from "@/components/explore/CategorySection";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Event } from "@/types/event";
import { Loader2 } from "lucide-react";
import { useEventFilters } from "@/hooks/use-event-filters";
import { usePagination } from "@/hooks/use-pagination";

const EVENTS_PER_PAGE = 9;

const Explore = () => {
  const { filters, updateFilter, filterEvents } = useEventFilters();
  const { currentPage, setCurrentPage, calculateTotalPages, getPageRange } = 
    usePagination(EVENTS_PER_PAGE);

  const { data: events, isLoading } = useQuery({
    queryKey: ["events", filters.sortBy, currentPage],
    queryFn: async () => {
      let query = supabase
        .from("events")
        .select("*", { count: "exact" });

      switch (filters.sortBy) {
        case "date_asc":
          query = query.order("start_date", { ascending: true });
          break;
        case "date_desc":
          query = query.order("start_date", { ascending: false });
          break;
        case "price_asc":
          query = query.order("price", { ascending: true });
          break;
        case "price_desc":
          query = query.order("price", { ascending: false });
          break;
      }

      const { from, to } = getPageRange();
      query = query.range(from, to);

      const { data, error, count } = await query;
      if (error) throw error;
      
      return { events: data as Event[], totalCount: count || 0 };
    },
  });

  const filteredEvents = events ? filterEvents(events.events) : [];
  const totalPages = events ? calculateTotalPages(events.totalCount) : 0;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-eden-dark">
        <Navbar />
        <div className="flex items-center justify-center h-[calc(100vh-4rem)]">
          <Loader2 className="w-8 h-8 animate-spin text-eden-primary" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-eden-dark">
      <Navbar />
      <ExploreHero 
        onSearchChange={(value) => updateFilter("searchQuery", value)}
        onLocationChange={(value) => updateFilter("location", value)}
        onEventTypeChange={(value) => updateFilter("eventType", value)}
        onPriceRangeChange={(value) => updateFilter("priceRange", value as [number, number])}
        onSortChange={(value) => updateFilter("sortBy", value)}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
      <CategorySection />
      <EventGrid 
        title={filters.searchQuery ? "Search Results" : "All Events"} 
        events={filteredEvents} 
      />
    </div>
  );
};

export default Explore;