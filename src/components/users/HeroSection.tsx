import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3"
          alt="Concert crowd"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-eden-dark/90 to-eden-dark/70" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <h1 className="text-4xl md:text-7xl font-bold text-white">
            The Future of Event Ticketing
            <span className="block gradient-text">Is Here</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto">
            Discover, Buy, and Resell Tickets with Confidence—Only on Eden.
          </p>
          <Button size="lg" className="btn-gradient text-white text-lg px-8 py-6">
            Get Started with Eden
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};