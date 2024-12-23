import { motion } from "framer-motion";

export const HeroDescription = () => {
  return (
    <motion.p 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.8 }}
      className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto font-light leading-relaxed mt-6"
    >
      Never miss the perfect ticket. Get instant alerts, secure authentication, 
      and guaranteed access to your favorite events.
    </motion.p>
  );
};