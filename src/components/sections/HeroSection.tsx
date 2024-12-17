import { motion } from "framer-motion";
import Background3D from "@/components/Background3D";
import FeatureIcons from "@/components/hero/FeatureIcons";
import HeroCTAs from "@/components/hero/HeroCTAs";
import NFTTicketPreview from "@/components/hero/NFTTicketPreview";

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
        <FeatureIcons />

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
        <HeroCTAs />

        {/* NFT Ticket Preview */}
        <NFTTicketPreview />
      </motion.div>
    </div>
  );
};

export default HeroSection;