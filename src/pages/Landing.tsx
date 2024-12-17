import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Ticket, RefreshCw } from "lucide-react";

const Landing = () => {
  return (
    <div className="min-h-screen bg-eden-dark overflow-hidden">
      <div className="relative">
        {/* Background gradient effects */}
        <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-eden-primary/30 rounded-full filter blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-eden-secondary/30 rounded-full filter blur-[120px]" />
        
        {/* Main content */}
        <div className="relative">
          <nav className="absolute top-0 w-full z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-20">
                <Link to="/" className="flex items-center space-x-2">
                  <span className="text-2xl font-bold gradient-text">Eden</span>
                </Link>
                <div className="flex items-center space-x-4">
                  <Link to="/explore">
                    <Button variant="ghost" className="text-white hover:text-eden-primary">
                      Explore Events
                    </Button>
                  </Link>
                  <Button className="btn-gradient">Sign Up</Button>
                </div>
              </div>
            </div>
          </nav>

          {/* Hero Section */}
          <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center space-y-8">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight gradient-text animate-fade-in">
                  The Future of Event Ticketing
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto animate-fade-in">
                  Secure, transparent, and fair ticketing powered by blockchain technology.
                </p>
                <div className="flex justify-center gap-4 pt-8 animate-fade-in">
                  <Link to="/explore">
                    <Button size="lg" className="btn-gradient group">
                      Explore Events
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="glass-card p-6 rounded-xl hover:scale-105 transition-transform duration-300">
                  <div className="h-12 w-12 rounded-lg bg-eden-primary/20 flex items-center justify-center mb-4">
                    <Shield className="text-eden-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Secure Tickets</h3>
                  <p className="text-gray-400">
                    NFT-powered tickets that prevent fraud and unauthorized resales
                  </p>
                </div>

                <div className="glass-card p-6 rounded-xl hover:scale-105 transition-transform duration-300">
                  <div className="h-12 w-12 rounded-lg bg-eden-secondary/20 flex items-center justify-center mb-4">
                    <Ticket className="text-eden-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Fair Pricing</h3>
                  <p className="text-gray-400">
                    Transparent marketplace with controlled resale options
                  </p>
                </div>

                <div className="glass-card p-6 rounded-xl hover:scale-105 transition-transform duration-300">
                  <div className="h-12 w-12 rounded-lg bg-eden-accent/20 flex items-center justify-center mb-4">
                    <RefreshCw className="text-eden-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Easy Transfers</h3>
                  <p className="text-gray-400">
                    Seamless ticket transfers and resales within the platform
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="glass-card rounded-2xl p-12 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-secondary opacity-10" />
                <div className="relative z-10">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
                    Ready to Experience the Future?
                  </h2>
                  <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                    Join Eden today and discover a new way to buy, sell, and manage event tickets.
                  </p>
                  <Button size="lg" className="btn-gradient">
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