import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Background3D from "@/components/Background3D";
import FeatureCard from "@/components/FeatureCard";

const Landing = () => {
  return (
    <div className="min-h-screen bg-eden-dark overflow-hidden">
      <div className="relative">
        <Background3D />
        
        {/* Gradient overlays */}
        <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-eden-primary/20 rounded-full filter blur-[150px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-eden-secondary/20 rounded-full filter blur-[150px] animate-pulse delay-700" />
        
        {/* Main content */}
        <div className="relative">
          {/* Navigation */}
          <nav className="absolute top-0 w-full z-10 backdrop-blur-sm border-b border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16">
                <Link to="/" className="flex items-center">
                  <span className="text-2xl font-medium gradient-text">Eden</span>
                </Link>
                <div className="hidden md:flex items-center space-x-8">
                  <Link to="#how-it-works" className="text-white/80 hover:text-white transition-colors">How It Works</Link>
                  <Link to="/explore" className="text-white/80 hover:text-white transition-colors">Events</Link>
                  <Link to="#resell" className="text-white/80 hover:text-white transition-colors">Resell</Link>
                  <Link to="#contact" className="text-white/80 hover:text-white transition-colors">Contact</Link>
                  <Button className="bg-white text-eden-dark hover:bg-white/90 transition-colors">
                    Sign In
                  </Button>
                </div>
              </div>
            </div>
          </nav>

          {/* Hero Section */}
          <div className="pt-40 pb-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center space-y-8">
                <h1 className="text-4xl md:text-7xl font-medium tracking-tight text-white animate-fade-in">
                  Revolutionizing Event Ticketing
                  <span className="block gradient-text">with Blockchain Technology</span>
                </h1>
                <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto font-light animate-fade-in delay-100">
                  Secure. Fair. Seamless. Unlock exclusive tickets, effortless resales, and rewards—all on one platform.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 pt-8 animate-fade-in delay-200">
                  <Button size="lg" className="bg-eden-secondary text-white hover:bg-eden-secondary/90 transition-colors">
                    Buy Tickets
                  </Button>
                  <Link to="/explore">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto">
                      Explore Events
                      <ArrowRight className="ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Features Section with Flip Cards */}
          <div className="py-32 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-medium text-center mb-16 gradient-text">
                Why Eden Changes the Game
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <FeatureCard
                  icon="security"
                  title="Secure & Trustworthy Transactions"
                  description="Say goodbye to unsafe peer-to-peer ticket sales."
                  details="With Eden's blockchain-powered platform, every ticket is verified, and every transaction is secure. Experience peace of mind with every purchase."
                />
                <FeatureCard
                  icon="pricing"
                  title="Fair Resale Prices"
                  description="No more price gouging."
                  details="Our live, market-driven pricing system ensures buyers and sellers get the best value—always. Transparent and fair pricing for everyone."
                />
                <FeatureCard
                  icon="rewards"
                  title="Exclusive Rewards & Benefits"
                  description="Earn points, unlock rewards, and get early access."
                  details="Earn points, unlock rewards, and get early access to events by engaging on Eden. It's ticketing reimagined for the modern era."
                />
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="py-32 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="relative overflow-hidden rounded-3xl">
                <div className="absolute inset-0 bg-gradient-secondary opacity-10" />
                <div className="relative bg-eden-light/30 backdrop-blur-md p-16 text-center">
                  <h2 className="text-4xl md:text-5xl font-medium mb-8 gradient-text">
                    Your Next Event Begins with Eden
                  </h2>
                  <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto font-light">
                    Discover events. Resell tickets seamlessly. Experience fair pricing and rewards. The future of ticketing is here.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button size="lg" className="bg-eden-secondary text-white hover:bg-eden-secondary/90">
                      Browse Events
                    </Button>
                    <Button size="lg" variant="outline">
                      Join Eden
                    </Button>
                  </div>
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