import { useState } from "react";
import { Event } from "@/types/event";

export interface EventFilters {
  searchQuery: string;
  location: string;
  eventType: string;
  sortBy: string;
}

export const useEventFilters = () => {
  const [filters, setFilters] = useState<EventFilters>({
    searchQuery: "",
    location: "",
    eventType: "",
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
      return matchesSearch && matchesLocation;
    });
  };

  return {
    filters,
    updateFilter,
    filterEvents,
  };
};