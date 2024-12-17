import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Mic, Calendar, CreditCard, Users } from "lucide-react";

const CreatorsLanding = () => {
  return (
    <div className="min-h-screen bg-eden-dark">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold gradient-text mb-6">
              Create Unforgettable Events
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join Eden's community of event creators and reach thousands of passionate attendees.
              Transform your vision into reality with our powerful event management platform.
            </p>
            <Button className="btn-gradient text-lg px-8 py-6">Start Creating</Button>
          </div>
        </div>
        
        {/* Features Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-eden-dark/50 backdrop-blur-md p-6 rounded-xl border border-white/10">
              <Mic className="w-12 h-12 text-eden-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Powerful Tools</h3>
              <p className="text-gray-400">Create and manage events with our intuitive dashboard</p>
            </div>
            <div className="bg-eden-dark/50 backdrop-blur-md p-6 rounded-xl border border-white/10">
              <Calendar className="w-12 h-12 text-eden-secondary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Flexible Scheduling</h3>
              <p className="text-gray-400">Set up multiple event dates and ticket tiers</p>
            </div>
            <div className="bg-eden-dark/50 backdrop-blur-md p-6 rounded-xl border border-white/10">
              <CreditCard className="w-12 h-12 text-eden-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
              <p className="text-gray-400">Get paid quickly with our reliable payment system</p>
            </div>
            <div className="bg-eden-dark/50 backdrop-blur-md p-6 rounded-xl border border-white/10">
              <Users className="w-12 h-12 text-eden-secondary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Growing Community</h3>
              <p className="text-gray-400">Connect with attendees and other creators</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorsLanding;