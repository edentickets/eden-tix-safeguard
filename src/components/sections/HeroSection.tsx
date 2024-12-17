import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Ticket, Coins } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-primary opacity-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-eden-accent/20 via-eden-primary/10 to-transparent" />
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-eden-dark/90" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(139,92,246,0.1)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px] animate-pulse" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-7xl mx-auto text-center space-y-8"
      >
        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
          <span className="gradient-text">Revolutionize Ticketing.</span>
          <span className="block text-white mt-2">Secure. Transparent. Fair.</span>
        </h1>

        {/* Feature Icons */}
        <div className="flex justify-center gap-8 py-8">
          {[
            { icon: Shield, text: "Blockchain-Secured" },
            { icon: Ticket, text: "NFT Tickets" },
            { icon: Coins, text: "Fair Resale" },
          ].map(({ icon: Icon, text }, index) => (
            <motion.div
              key={text}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col items-center gap-2"
            >
              <div className="p-4 rounded-full bg-eden-primary/10 border border-eden-primary/20">
                <Icon className="w-6 h-6 text-eden-primary" />
              </div>
              <span className="text-sm text-white/70">{text}</span>
            </motion.div>
          ))}
        </div>

        {/* Description */}
        <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto font-light leading-relaxed">
          Experience the future of event ticketing with blockchain security, 
          exclusive resale rights, and real-time price alerts.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-8">
          <Link to="/explore">
            <Button size="lg" className="bg-eden-primary hover:bg-eden-primary/90 text-white px-8 py-6">
              Explore Events
              <ArrowRight className="ml-2" />
            </Button>
          </Link>
          <Link to="/creators">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-eden-primary text-eden-primary hover:bg-eden-primary/10 px-8 py-6"
            >
              Join as Creator
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;