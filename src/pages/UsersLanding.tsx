import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Ticket, Star, Heart, Gift } from "lucide-react";

const UsersLanding = () => {
  return (
    <div className="min-h-screen bg-eden-dark">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold gradient-text mb-6">
              Discover Amazing Events
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join Eden's community of event enthusiasts. Find and book tickets to the most exciting events,
              earn rewards, and connect with other attendees.
            </p>
            <Button className="btn-gradient text-lg px-8 py-6">Start Exploring</Button>
          </div>
        </div>
        
        {/* Features Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-eden-dark/50 backdrop-blur-md p-6 rounded-xl border border-white/10">
              <Ticket className="w-12 h-12 text-eden-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Easy Booking</h3>
              <p className="text-gray-400">Book tickets securely in just a few clicks</p>
            </div>
            <div className="bg-eden-dark/50 backdrop-blur-md p-6 rounded-xl border border-white/10">
              <Star className="w-12 h-12 text-eden-secondary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Exclusive Events</h3>
              <p className="text-gray-400">Get access to unique and exciting events</p>
            </div>
            <div className="bg-eden-dark/50 backdrop-blur-md p-6 rounded-xl border border-white/10">
              <Heart className="w-12 h-12 text-eden-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Follow Creators</h3>
              <p className="text-gray-400">Stay updated with your favorite event creators</p>
            </div>
            <div className="bg-eden-dark/50 backdrop-blur-md p-6 rounded-xl border border-white/10">
              <Gift className="w-12 h-12 text-eden-secondary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Earn Rewards</h3>
              <p className="text-gray-400">Get points for attending and sharing events</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersLanding;