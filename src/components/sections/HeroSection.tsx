import { motion } from "framer-motion";
import Background3D from "@/components/Background3D";
import FeatureIcons from "@/components/hero/FeatureIcons";
import HeroCTAs from "@/components/hero/HeroCTAs";
import NFTTicketPreview from "@/components/hero/NFTTicketPreview";
import { PriceAlertNotification } from "@/components/hero/PriceAlertNotification";

const HeroSection = () => {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-primary opacity-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-eden-accent/20 via-eden-primary/10 to-transparent" />
      
      <Background3D />
      <PriceAlertNotification />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-7xl mx-auto text-center"
      >
        {/* Main Content */}
        <div className="space-y-8">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
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
              The Future of Events is Here
            </motion.span>
          </h1>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Discover, buy, and resell tickets with confidence. Experience seamless ticketing 
            with state of the art digital dynamic security and real-time alerts.
          </motion.p>

          {/* NFT Ticket Preview */}
          <div className="relative z-10">
            <NFTTicketPreview />
          </div>

          {/* Feature Icons */}
          <div className="relative z-0">
            <FeatureIcons />
          </div>

          {/* CTAs */}
          <HeroCTAs />
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;