import { motion } from "framer-motion";

export const HeroTitle = () => {
  return (
    <motion.h1 
      className="text-5xl md:text-7xl font-bold tracking-tight leading-tight"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <span className="gradient-text">Smart Ticketing</span>
      <span className="block text-white mt-2">For Modern Events</span>
    </motion.h1>
  );
};