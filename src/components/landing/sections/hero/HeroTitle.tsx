import { motion } from "framer-motion";

export const HeroTitle = () => {
  return (
    <motion.h1 
      className="text-5xl md:text-7xl font-bold tracking-tight leading-tight"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <motion.span 
        className="gradient-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Next-Gen Digital
      </motion.span>
      <motion.span 
        className="block text-white mt-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        Event Ticketing
      </motion.span>
    </motion.h1>
  );
};