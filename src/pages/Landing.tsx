import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Ticket, RefreshCw } from "lucide-react";
import Background3D from "@/components/Background3D";

const Landing = () => {
  return (
    <div className="min-h-screen bg-eden-dark overflow-hidden">
      <div className="relative">
        {/* 3D Background with reduced opacity */}
        <Background3D />
        
        {/* Subtle gradient overlays */}
        <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-eden-primary/20 rounded-full filter blur-[150px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-eden-secondary/20 rounded-full filter blur-[150px] animate-pulse delay-700" />
        
        {/* Main content */}
        <div className="relative">
          {/* Minimal Navigation */}
          <nav className="absolute top-0 w-full z-10 backdrop-blur-sm border-b border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16">
                <Link to="/" className="flex items-center">
                  <span className="text-2xl font-medium gradient-text">Eden</span>
                </Link>
                <div className="flex items-center space-x-8">
                  <Link to="/explore">
                    <Button variant="ghost" className="text-white/80 hover:text-white transition-colors duration-300">
                      Explore
                    </Button>
                  </Link>
                  <Button className="bg-white text-eden-dark hover:bg-white/90 transition-colors duration-300">
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
          </nav>

          {/* Hero Section with Apple-like Typography */}
          <div className="pt-40 pb-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center space-y-8">
                <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white animate-fade-in">
                  The future of
                  <span className="block gradient-text">event ticketing</span>
                </h1>
                <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto font-light animate-fade-in delay-100">
                  Secure. Transparent. Revolutionary.
                </p>
                <div className="flex justify-center gap-6 pt-8 animate-fade-in delay-200">
                  <Link to="/explore">
                    <Button size="lg" className="bg-white text-eden-dark hover:bg-white/90 transition-colors duration-300 group px-8">
                      Explore Events
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Features Section with Minimal Design */}
          <div className="py-32 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="group">
                  <div className="h-12 w-12 rounded-lg bg-eden-primary/10 flex items-center justify-center mb-6 group-hover:bg-eden-primary/20 transition-colors duration-300">
                    <Shield className="text-eden-primary" />
                  </div>
                  <h3 className="text-xl font-medium mb-3 text-white">Secure Tickets</h3>
                  <p className="text-white/70 leading-relaxed">
                    NFT-powered tickets that prevent fraud and unauthorized resales
                  </p>
                </div>

                <div className="group">
                  <div className="h-12 w-12 rounded-lg bg-eden-secondary/10 flex items-center justify-center mb-6 group-hover:bg-eden-secondary/20 transition-colors duration-300">
                    <Ticket className="text-eden-secondary" />
                  </div>
                  <h3 className="text-xl font-medium mb-3 text-white">Fair Pricing</h3>
                  <p className="text-white/70 leading-relaxed">
                    Transparent marketplace with controlled resale options
                  </p>
                </div>

                <div className="group">
                  <div className="h-12 w-12 rounded-lg bg-eden-accent/10 flex items-center justify-center mb-6 group-hover:bg-eden-accent/20 transition-colors duration-300">
                    <RefreshCw className="text-eden-accent" />
                  </div>
                  <h3 className="text-xl font-medium mb-3 text-white">Easy Transfers</h3>
                  <p className="text-white/70 leading-relaxed">
                    Seamless ticket transfers and resales within the platform
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section with Minimal Glass Effect */}
          <div className="py-32 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="relative overflow-hidden rounded-3xl">
                <div className="absolute inset-0 bg-gradient-secondary opacity-10" />
                <div className="relative bg-eden-light/30 backdrop-blur-md p-16 text-center">
                  <h2 className="text-4xl md:text-5xl font-medium mb-8 gradient-text">
                    Ready to Experience the Future?
                  </h2>
                  <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto font-light">
                    Join Eden today and discover a new way to buy, sell, and manage event tickets.
                  </p>
                  <Button size="lg" className="bg-white text-eden-dark hover:bg-white/90 transition-colors duration-300 px-8">
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;