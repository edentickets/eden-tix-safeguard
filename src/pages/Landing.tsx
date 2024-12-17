import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Background3D from "@/components/Background3D";
import FeatureCard from "@/components/FeatureCard";
import { Navbar } from "@/components/Navbar";
import { motion } from "framer-motion";

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
          <Navbar />

          {/* Hero Section with Mockups */}
          <div className="pt-40 pb-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center space-y-8"
              >
                <h1 className="text-4xl md:text-7xl font-medium tracking-tight text-white">
                  Revolutionizing Event Ticketing
                  <span className="block gradient-text">with Blockchain Technology</span>
                </h1>
                <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto font-light">
                  Secure. Fair. Seamless. Unlock exclusive tickets, effortless resales, and rewards—all on one platform.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 pt-8">
                  <Button size="lg" className="bg-eden-secondary text-white hover:bg-eden-secondary/90">
                    Buy Tickets
                  </Button>
                  <Link to="/explore">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto">
                      Explore Events
                      <ArrowRight className="ml-2" />
                    </Button>
                  </Link>
                </div>

                {/* Mockup Images */}
                <motion.div 
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative mt-16"
                >
                  <div className="relative mx-auto max-w-[1200px]">
                    {/* Main Laptop Mockup */}
                    <div className="relative z-20">
                      <img
                        src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
                        alt="Eden App Interface"
                        className="w-full rounded-xl shadow-2xl"
                      />
                      {/* QR Code Animation Overlay */}
                      <div className="absolute top-1/2 right-8 transform -translate-y-1/2 w-32 h-32 bg-eden-secondary/20 rounded-lg animate-pulse" />
                    </div>
                    
                    {/* Secondary Device Mockups */}
                    <div className="absolute -bottom-10 right-0 w-1/3 z-10 hidden md:block">
                      <img
                        src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                        alt="Eden Mobile Interface"
                        className="rounded-lg shadow-xl"
                      />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
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

          {/* How It Works Section with Visual Mockups */}
          <div className="py-32 px-4 sm:px-6 lg:px-8 bg-eden-light/5">
            <div className="max-w-7xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-medium mb-16 gradient-text">
                The Eden Experience in 3 Simple Steps
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {/* Step 1: Discover Events */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0 }}
                  className="glass-card p-8 rounded-xl"
                >
                  <img
                    src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
                    alt="Discover Events"
                    className="w-full h-48 object-cover rounded-lg mb-6"
                  />
                  <div className="text-2xl font-medium mb-4 gradient-text">
                    Discover Events
                  </div>
                  <p className="text-white/70">
                    Browse top events from your favorite creators and global venues—seamlessly.
                  </p>
                </motion.div>

                {/* Step 2: Buy & Sell */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="glass-card p-8 rounded-xl"
                >
                  <img
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                    alt="Buy & Sell"
                    className="w-full h-48 object-cover rounded-lg mb-6"
                  />
                  <div className="text-2xl font-medium mb-4 gradient-text">
                    Buy & Sell Tickets
                  </div>
                  <p className="text-white/70">
                    Purchase tickets or resell them through our verified, market-driven platform.
                  </p>
                </motion.div>

                {/* Step 3: Enjoy Perks */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="glass-card p-8 rounded-xl"
                >
                  <img
                    src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b"
                    alt="Enjoy Perks"
                    className="w-full h-48 object-cover rounded-lg mb-6"
                  />
                  <div className="text-2xl font-medium mb-4 gradient-text">
                    Enjoy Exclusive Perks
                  </div>
                  <p className="text-white/70">
                    Unlock rewards, notifications, and premium event experiences tailored just for you.
                  </p>
                </motion.div>
              </div>
              <Button size="lg" className="mt-16 bg-eden-secondary text-white hover:bg-eden-secondary/90">
                Get Started Today
              </Button>
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
