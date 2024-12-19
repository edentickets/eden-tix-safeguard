import { motion } from "framer-motion";
import { Ban, Users, TrendingUp, DollarSign } from "lucide-react";
import { Card } from "@/components/ui/card";

const problems = [
  {
    icon: <Ban className="w-8 h-8 text-eden-primary" />,
    title: "Price Gouging & Fraudulent Resales",
    description: "Say goodbye to inflated prices and fake tickets. Eden ensures fair pricing and authenticity through state-of-the-art digital security."
  },
  {
    icon: <Users className="w-8 h-8 text-eden-secondary" />,
    title: "Limited Availability & Scalping",
    description: "Never miss out on tickets again. Our transparent marketplace ensures fair access and real-time price tracking."
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-eden-accent" />,
    title: "Real-Time Market Insights",
    description: "Make informed decisions with live market data and get alerts when tickets match your target price."
  },
  {
    icon: <DollarSign className="w-8 h-8 text-eden-primary" />,
    title: "Hidden Fees & High Costs",
    description: "We believe in transparency. Zero hidden fees and industry-lowest transaction costs mean more value for everyone."
  }
];

const ProblemStatementSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-primary opacity-5" />
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto relative"
      >
        <motion.div 
          variants={containerVariants}
          className="text-center space-y-4 mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-medium gradient-text"
          >
            Traditional Ticketing Is Broken
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-white/70"
          >
            We're here to fix that
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {problems.map((problem, index) => (
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
                  {problem.icon}
                </motion.div>
                <h3 className="text-lg font-medium text-white">{problem.title}</h3>
                <p className="text-white/70">{problem.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProblemStatementSection;