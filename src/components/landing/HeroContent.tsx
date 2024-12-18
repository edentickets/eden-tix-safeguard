import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const HeroContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center space-y-8"
    >
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="gradient-text"
        >
          Revolutionize Ticketing.
        </motion.span>
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="block text-white mt-2"
        >
          Secure. Transparent. Fair.
        </motion.span>
      </h1>

      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto font-light leading-relaxed"
      >
        Experience the future of event ticketing with blockchain security, 
        exclusive resale rights, and real-time price alerts.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="flex flex-col sm:flex-row justify-center gap-4"
      >
        <Link to="/explore">
          <Button size="lg" className="bg-eden-primary hover:bg-eden-primary/90">
            Browse Events
            <ArrowRight className="ml-2" />
          </Button>
        </Link>
        <Link to="/creators">
          <Button size="lg" variant="outline" className="border-white/20">
            Create Events
          </Button>
        </Link>
      </motion.div>
    </motion.div>
  );
};