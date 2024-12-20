import { motion } from "framer-motion";
import { Shield, Ticket, Bell, Check, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-eden-primary" />,
      title: "Smart Ticket Security",
      description: "Dynamic QR codes with time-based validation and proximity activation",
      delay: 0.2
    },
    {
      icon: <Check className="w-8 h-8 text-eden-secondary" />,
      title: "Revenue Optimization",
      description: "Earn from every ticket resale while maintaining industry-low primary sale fees",
      delay: 0.3
    },
    {
      icon: <Bell className="w-8 h-8 text-eden-accent" />,
      title: "Real-time Management",
      description: "Instant validation and live event controls through our secure platform",
      delay: 0.4
    },
    {
      icon: <Ticket className="w-8 h-8 text-eden-primary" />,
      title: "Premium Benefits",
      description: "Access exclusive features and priority support as an event creator",
      delay: 0.5
    }
  ];

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

  const iconVariants = {
    hidden: { scale: 0.8, rotate: -10 },
    visible: { 
      scale: 1, 
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200
      }
    },
    hover: { 
      scale: 1.1,
      rotate: 5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <section className="py-32 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-secondary opacity-5" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-eden-accent/20 via-eden-primary/10 to-transparent" />
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-7xl mx-auto relative"
      >
        <motion.div
          variants={containerVariants}
          className="text-center space-y-4 mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-6xl font-medium gradient-text"
          >
            Powerful Features for Event Creators
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-white/70 max-w-2xl mx-auto"
          >
            Everything you need to manage and optimize your event ticketing
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="h-full"
            >
              <Card className="glass-card p-6 space-y-4 hover:border-eden-primary/30 transition-all duration-300 h-full">
                <motion.div 
                  variants={iconVariants}
                  whileHover="hover"
                  className="text-eden-primary"
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-lg font-medium text-white">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={containerVariants}
          className="text-center"
        >
          <Link to="/creators">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg"
                className="bg-eden-primary hover:bg-eden-primary/90 text-white px-8 py-6 text-lg group"
              >
                Start Creating Events
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
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FeaturesSection;