import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Ticket } from "lucide-react";

const CTASection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: { scale: 0.95 }
  };

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-secondary opacity-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-eden-accent/20 via-eden-primary/10 to-transparent" />
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-7xl mx-auto relative"
      >
        <div className="relative bg-eden-light/30 backdrop-blur-md rounded-3xl p-16 border border-white/10">
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

          {/* Content */}
          <div className="text-center space-y-8">
            <motion.h2 
              variants={itemVariants}
              className="text-4xl md:text-6xl font-medium gradient-text"
            >
              Your Next Event Begins with Eden
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl text-white/70 mb-12 max-w-2xl mx-auto font-light"
            >
              Discover events. Resell tickets seamlessly. Experience fair pricing and rewards. 
              The future of ticketing is here.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Link to="/explore">
                <motion.div
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Button 
                    size="lg" 
                    className="bg-eden-secondary text-white hover:bg-eden-secondary/90 px-8 py-6 text-lg group"
                  >
                    Browse Events
                    <motion.span
                      className="inline-block ml-2"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ 
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </motion.span>
                  </Button>
                </motion.div>
              </Link>
              
              <Link to="/users">
                <motion.div
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-eden-primary text-eden-primary hover:bg-eden-primary/10 px-8 py-6 text-lg"
                  >
                    Join Eden
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CTASection;