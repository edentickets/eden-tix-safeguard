import { motion } from "framer-motion";
import { Ban, Users, TrendingUp } from "lucide-react";
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
  }
];

const ProblemStatementSection = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-primary opacity-5" />
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center space-y-4 mb-16">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-medium gradient-text"
          >
            Traditional Ticketing Is Broken
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-white/70"
          >
            We're here to fix that
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="glass-card p-6 space-y-4 hover:border-eden-primary/30 transition-all duration-300">
                <div className="text-eden-primary">{problem.icon}</div>
                <h3 className="text-lg font-medium text-white">{problem.title}</h3>
                <p className="text-white/70">{problem.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemStatementSection;