import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ExploreHero = () => {
  return (
    <div className="relative py-20 overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute inset-0 bg-eden-dark">
        <div className="absolute inset-0 bg-gradient-to-r from-eden-primary/20 to-eden-secondary/20 opacity-50" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px] animate-pulse" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
          Find Your Next Unforgettable Experience
        </h1>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search Events, Artists, or Venues"
              className="w-full h-14 pl-12 pr-4 rounded-lg bg-eden-light/50 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-eden-primary"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 mt-4 justify-center">
            {["Location", "Date", "Event Type", "Price Range"].map((filter) => (
              <Button
                key={filter}
                variant="outline"
                className="bg-eden-light/30 border-white/10 hover:bg-eden-light/50"
              >
                {filter}
              </Button>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mt-8 justify-center">
            <Button className="btn-gradient">Explore Trending</Button>
            <Button variant="outline" className="border-eden-primary text-eden-primary">
              Upcoming Near Me
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};