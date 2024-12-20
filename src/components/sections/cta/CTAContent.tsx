import { motion } from "framer-motion";

export const CTAContent = () => {
  return (
    <div className="text-center space-y-8">
      <motion.h2 
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 }
        }}
        className="text-4xl md:text-6xl font-medium gradient-text"
      >
        Your Next Event Begins with Eden
      </motion.h2>
      
      <motion.p 
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 }
        }}
        className="text-xl text-white/70 mb-12 max-w-2xl mx-auto font-light"
      >
        Discover events. Resell tickets seamlessly. Experience fair pricing and rewards. 
        The future of ticketing is here.
      </motion.p>
    </div>
  );
};