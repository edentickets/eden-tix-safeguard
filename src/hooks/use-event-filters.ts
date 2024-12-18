import { useState } from "react";
import { Event } from "@/types/event";

export interface EventFilters {
  searchQuery: string;
  location: string;
  eventType: string;
  priceRange: [number, number];
  sortBy: string;
}

export const useEventFilters = () => {
  const [filters, setFilters] = useState<EventFilters>({
    searchQuery: "",
    location: "",
    eventType: "",
    priceRange: [0, 1000],
    sortBy: "date_asc",
  });

  const updateFilter = <K extends keyof EventFilters>(
    key: K,
    value: EventFilters[K]
  ) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const filterEvents = (events: Event[]) => {
    return events.filter((event) => {
      const matchesSearch = 
        event.title.toLowerCase().includes(filters.searchQuery.toLowerCase()) ||
        event.description?.toLowerCase().includes(filters.searchQuery.toLowerCase());
      const matchesLocation = !filters.location || event.location.includes(filters.location);
      const matchesPrice = event.price >= filters.priceRange[0] && event.price <= filters.priceRange[1];
      return matchesSearch && matchesLocation && matchesPrice;
    });
  };

  return {
    filters,
    updateFilter,
    filterEvents,
  };
};