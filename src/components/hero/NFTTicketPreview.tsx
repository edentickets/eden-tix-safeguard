import { Ticket } from "lucide-react";
import { motion } from "framer-motion";

const NFTTicketPreview = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 100 }}
      className="mt-8 -mb-8"
    >
      <motion.div 
        className="relative w-full max-w-md mx-auto"
        animate={{ 
          y: [0, -10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="absolute inset-0 bg-gradient-secondary opacity-20 blur-xl rounded-xl" />
        <motion.div 
          className="relative glass-card p-6 space-y-4 border border-white/10"
          whileHover={{ 
            scale: 1.02,
            transition: { duration: 0.2 }
          }}
        >
          <div className="flex justify-between items-center">
            <div className="text-left">
              <motion.p 
                className="text-sm text-white/60"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.8 }}
              >
                NFT Ticket Preview
              </motion.p>
              <motion.h3 
                className="text-lg font-semibold text-white"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2.0 }}
              >
                Rolling Loud 2024
              </motion.h3>
            </div>
            <motion.div 
              className="h-16 w-16 bg-eden-primary/20 rounded-lg flex items-center justify-center backdrop-blur-sm"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8, type: "spring" }}
            >
              <Ticket className="w-8 h-8 text-eden-primary" />
            </motion.div>
          </div>
          <motion.div 
            className="h-32 bg-eden-light/20 rounded-lg backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.2 }}
          >
            <div className="w-full h-full animate-pulse" />
          </motion.div>
          <div className="flex justify-between items-center text-sm">
            <motion.span 
              className="text-white/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.4 }}
            >
              Seat: VIP-001
            </motion.span>
            <motion.span 
              className="text-eden-primary"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.6 }}
            >
              $299.00
            </motion.span>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default NFTTicketPreview;