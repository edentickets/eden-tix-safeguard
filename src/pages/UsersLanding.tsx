import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { 
  Shield, 
  Ticket, 
  Bell, 
  CreditCard, 
  RefreshCw,
  ArrowRight,
  Star
} from "lucide-react";

const UsersLanding = () => {
  return (
    <div className="min-h-screen bg-eden-dark">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-[url('https://source.unsplash.com/random/1920x1080/?concert')] bg-cover bg-center">
          <div className="absolute inset-0 bg-gradient-to-r from-eden-dark via-eden-dark/80 to-transparent" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
              The Future of Event Ticketing Is Here
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8">
              Discover, Buy, and Resell Tickets with Confidence—Only on Eden.
            </p>
            <Button size="lg" className="bg-eden-secondary hover:bg-eden-secondary/90 text-white">
              Get Started with Eden
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Problem-Solution Section */}
      <section className="py-24 bg-eden-light/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 gradient-text">
            Traditional Ticketing Is Broken—Eden Fixes It
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-white">Price Gouging & Fraudulent Resales</h3>
              <p className="text-gray-400 mb-6">
                Say goodbye to inflated prices and fake tickets. Eden ensures fair pricing and authenticity through blockchain technology.
              </p>
            </div>
            
            <div className="glass-card p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-white">Limited Availability & Scalping</h3>
              <p className="text-gray-400 mb-6">
                Never miss out on tickets again. Our transparent marketplace ensures fair access and real-time price tracking.
              </p>
            </div>
            
            <div className="glass-card p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-white">Lack of Integration & Convenience</h3>
              <p className="text-gray-400 mb-6">
                Experience seamless ticketing with multiple payment options and an intuitive platform designed for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 gradient-text">
            Why Eden Is Perfect for Fans Like You
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Feature
              icon={<Shield className="h-8 w-8 text-eden-secondary" />}
              title="Secure & Transparent"
              description="NFT-style tickets ensure authenticity and prevent fraud"
            />
            <Feature
              icon={<Ticket className="h-8 w-8 text-eden-primary" />}
              title="Fair Market Prices"
              description="Real-time pricing based on actual market demand"
            />
            <Feature
              icon={<Bell className="h-8 w-8 text-eden-accent" />}
              title="Price Alerts"
              description="Get notified when tickets hit your target price"
            />
            <Feature
              icon={<CreditCard className="h-8 w-8 text-eden-secondary" />}
              title="Multiple Payment Options"
              description="Pay with cards, crypto, or mobile payments"
            />
            <Feature
              icon={<RefreshCw className="h-8 w-8 text-eden-primary" />}
              title="Easy Reselling"
              description="Resell tickets securely through our platform"
            />
            <Feature
              icon={<Star className="h-8 w-8 text-eden-accent" />}
              title="Exclusive Access"
              description="Get early access to the hottest events"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-eden-light/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 gradient-text">
            Fans Love Eden
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Testimonial
              quote="I've been using Eden for months, and it's the best ticketing platform I've ever used. No more worrying about fake tickets or being scammed!"
              author="Emma"
              title="Music Lover"
            />
            <Testimonial
              quote="Eden's bidding system and price alerts helped me snag tickets for a sold-out event that I thought I missed. So glad I joined!"
              author="Jake"
              title="Concert Goer"
            />
            <Testimonial
              quote="I've sold and resold tickets on Eden, and it's the only platform I trust. The whole process is seamless, and the fees are fair."
              author="Ana"
              title="Event Enthusiast"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 gradient-text">
            Join the Eden Revolution
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Experience the future of ticketing today. Start buying and selling tickets with confidence.
          </p>
          <Button size="lg" className="bg-eden-secondary hover:bg-eden-secondary/90 text-white">
            Get Started with Eden
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

// Feature Component
const Feature = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="glass-card p-6 rounded-xl hover:scale-105 transition-transform duration-300">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

// Testimonial Component
const Testimonial = ({ quote, author, title }: { quote: string; author: string; title: string }) => (
  <div className="glass-card p-8 rounded-xl">
    <div className="mb-6">
      <Star className="h-8 w-8 text-eden-secondary" />
    </div>
    <p className="text-gray-300 mb-6 italic">"{quote}"</p>
    <div>
      <p className="font-semibold text-white">{author}</p>
      <p className="text-eden-accent">{title}</p>
    </div>
  </div>
);

export default UsersLanding;