import { motion } from "framer-motion";

export const ClientsTitle = () => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2
          }
        }
      }}
      className="text-center space-y-6 mb-16"
    >
      <motion.h2 
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 }
        }}
        className="text-4xl md:text-5xl font-medium gradient-text"
      >
        Trusted by Leading Event Creators
      </motion.h2>
      <motion.p 
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 }
        }}
        className="text-lg text-white/70 max-w-2xl mx-auto"
      >
        Join the world's most innovative event organizers who are revolutionizing 
        their ticketing experience with Eden's smart digital platform.
      </motion.p>
    </motion.div>
  );
};