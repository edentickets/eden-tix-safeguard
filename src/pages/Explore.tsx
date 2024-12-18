import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { ExploreHero } from "@/components/explore/ExploreHero";
import { EventGrid } from "@/components/explore/EventGrid";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Event } from "@/types/event";
import { Loader2 } from "lucide-react";

const Explore = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedEventType, setSelectedEventType] = useState("");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [sortBy, setSortBy] = useState("date_asc");

  const { data: events, isLoading } = useQuery({
    queryKey: ["events", sortBy],
    queryFn: async () => {
      let query = supabase
        .from("events")
        .select("*");

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

      const { data, error } = await query;

      if (error) throw error;
      return data as Event[];
    },
  });

  const filteredEvents = events?.filter((event) => {
    const matchesSearch = 
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLocation = !selectedLocation || event.location.includes(selectedLocation);
    const matchesPrice = event.price >= priceRange[0] && event.price <= priceRange[1];
    return matchesSearch && matchesLocation && matchesPrice;
  });

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
      />
      <EventGrid 
        title={searchQuery ? "Search Results" : "All Events"} 
        events={filteredEvents || []} 
      />
    </div>
  );
};

export default Explore;