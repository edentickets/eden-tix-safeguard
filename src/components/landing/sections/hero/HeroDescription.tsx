import { motion } from "framer-motion";

export const HeroDescription = () => {
  return (
    <motion.p 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.8 }}
      className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto font-light leading-relaxed"
    >
      Experience the future of event ticketing with smart alerts, dynamic QR security, and guaranteed authenticity. 
      Never miss out on your perfect event tickets again.
    </motion.p>
  );
};