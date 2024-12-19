import { motion } from "framer-motion";
import Background3D from "@/components/Background3D";
import FeatureIcons from "@/components/hero/FeatureIcons";
import HeroCTAs from "@/components/hero/HeroCTAs";
import NFTTicketPreview from "@/components/hero/NFTTicketPreview";

const HeroSection = () => {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Effects */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-primary"
      />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-eden-accent/20 via-eden-primary/10 to-transparent"
      />
      
      <Background3D />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative max-w-7xl mx-auto text-center"
      >
        {/* Main Content */}
        <div className="space-y-8">
          {/* Main Heading */}
          <motion.h1 
            className="text-5xl md:text-7xl font-bold tracking-tight leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.span 
              className="gradient-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Revolutionize Ticketing.
            </motion.span>
            <motion.span 
              className="block text-white mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              The Future of Events is Here
            </motion.span>
          </motion.h1>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Discover, buy, and resell tickets with confidence. Experience seamless ticketing 
            with state of the art digital dynamic security and real-time alerts.
          </motion.p>

          {/* NFT Ticket Preview */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="relative z-10"
          >
            <NFTTicketPreview />
          </motion.div>

          {/* Feature Icons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="relative z-0"
          >
            <FeatureIcons />
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <HeroCTAs />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;