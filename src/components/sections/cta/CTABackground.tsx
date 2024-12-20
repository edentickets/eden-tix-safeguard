import { motion } from "framer-motion";
import { Sparkles, Ticket } from "lucide-react";

export const CTABackground = () => {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-secondary opacity-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-eden-accent/20 via-eden-primary/10 to-transparent" />
      
      {/* Decorative Elements */}
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-8 -right-8"
      >
        <Sparkles className="w-16 h-16 text-eden-primary opacity-30" />
      </motion.div>
      
      <motion.div
        animate={{ 
          y: [0, -10, 0],
          rotate: [-5, 5, -5]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -bottom-8 -left-8"
      >
        <Ticket className="w-16 h-16 text-eden-secondary opacity-30" />
      </motion.div>
    </>
  );
};