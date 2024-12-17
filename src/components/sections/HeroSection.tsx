import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Shield, Ticket, Coins, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Background3D from "@/components/Background3D";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-primary opacity-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-eden-accent/20 via-eden-primary/10 to-transparent" />
      
      <Background3D />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-7xl mx-auto text-center space-y-8"
      >
        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="gradient-text"
          >
            Revolutionize Ticketing.
          </motion.span>
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="block text-white mt-2"
          >
            Secure. Transparent. Fair.
          </motion.span>
        </h1>

        {/* Feature Icons */}
        <div className="flex justify-center gap-8 py-8">
          {[
            { icon: Shield, text: "Blockchain-Secured NFTs" },
            { icon: Ticket, text: "Dynamic QR Protection" },
            { icon: Coins, text: "Fair Price Resale" },
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
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto font-light leading-relaxed"
        >
          Experience the future of event ticketing with blockchain security, 
          exclusive resale rights, and real-time price alerts.
        </motion.p>

        {/* CTAs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col sm:flex-row justify-center gap-4 pt-8"
        >
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
        </motion.div>

        {/* NFT Ticket Preview */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-12"
        >
          <div className="relative w-full max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-secondary opacity-20 blur-xl" />
            <div className="relative glass-card p-6 space-y-4">
              <div className="flex justify-between items-center">
                <div className="text-left">
                  <p className="text-sm text-white/60">NFT Ticket Preview</p>
                  <h3 className="text-lg font-semibold text-white">Rolling Loud 2024</h3>
                </div>
                <div className="h-16 w-16 bg-eden-primary/20 rounded-lg flex items-center justify-center">
                  <Ticket className="w-8 h-8 text-eden-primary" />
                </div>
              </div>
              <div className="h-32 bg-eden-light/20 rounded-lg animate-pulse" />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;