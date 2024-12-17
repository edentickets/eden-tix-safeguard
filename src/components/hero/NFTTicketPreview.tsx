import { Ticket } from "lucide-react";
import { motion } from "framer-motion";

const NFTTicketPreview = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5 }}
      className="mt-12"
    >
      <div className="relative w-full max-w-md mx-auto animate-float">
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
  );
};

export default NFTTicketPreview;