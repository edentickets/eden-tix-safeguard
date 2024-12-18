import { Ticket } from "lucide-react";
import { motion } from "framer-motion";

const NFTTicketPreview = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5 }}
      className="mt-8 -mb-8" // Increased negative margin to pull feature icons up
    >
      <div className="relative w-full max-w-md mx-auto animate-float">
        <div className="absolute inset-0 bg-gradient-secondary opacity-20 blur-xl rounded-xl" />
        <div className="relative glass-card p-6 space-y-4 border border-white/10">
          <div className="flex justify-between items-center">
            <div className="text-left">
              <p className="text-sm text-white/60">NFT Ticket Preview</p>
              <h3 className="text-lg font-semibold text-white">Rolling Loud 2024</h3>
            </div>
            <div className="h-16 w-16 bg-eden-primary/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
              <Ticket className="w-8 h-8 text-eden-primary" />
            </div>
          </div>
          <div className="h-32 bg-eden-light/20 rounded-lg animate-pulse backdrop-blur-sm" />
          <div className="flex justify-between items-center text-sm">
            <span className="text-white/60">Seat: VIP-001</span>
            <span className="text-eden-primary">$299.00</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default NFTTicketPreview;