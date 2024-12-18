import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { ExploreHero } from "@/components/explore/ExploreHero";
import { EventGrid } from "@/components/explore/EventGrid";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Event } from "@/types/event";
import { Loader2 } from "lucide-react";

const EVENTS_PER_PAGE = 9;

const Explore = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedEventType, setSelectedEventType] = useState("");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [sortBy, setSortBy] = useState("date_asc");
  const [currentPage, setCurrentPage] = useState(1);

  const { data: events, isLoading } = useQuery({
    queryKey: ["events", sortBy, currentPage],
    queryFn: async () => {
      let query = supabase
        .from("events")
        .select("*", { count: "exact" });

      // Apply sorting
      switch (sortBy) {
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

      // Apply pagination
      const from = (currentPage - 1) * EVENTS_PER_PAGE;
      const to = from + EVENTS_PER_PAGE - 1;
      query = query.range(from, to);

      const { data, error, count } = await query;

      if (error) throw error;
      return { events: data as Event[], totalCount: count || 0 };
    },
  });

  const filteredEvents = events?.events.filter((event) => {
    const matchesSearch = 
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLocation = !selectedLocation || event.location.includes(selectedLocation);
    const matchesPrice = event.price >= priceRange[0] && event.price <= priceRange[1];
    return matchesSearch && matchesLocation && matchesPrice;
  });

  const totalPages = Math.ceil((events?.totalCount || 0) / EVENTS_PER_PAGE);

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
        onSearchChange={setSearchQuery}
        onLocationChange={setSelectedLocation}
        onEventTypeChange={setSelectedEventType}
        onPriceRangeChange={setPriceRange}
        onSortChange={setSortBy}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
      <EventGrid 
        title={searchQuery ? "Search Results" : "All Events"} 
        events={filteredEvents || []} 
      />
    </div>
  );
};

export default Explore;