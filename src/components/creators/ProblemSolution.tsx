import { motion } from "framer-motion";
import { Shield, Ticket, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

export const ProblemSolution = () => {
  const solutions = [
    {
      icon: <Shield className="w-12 h-12 text-eden-primary" />,
      title: "Secure & Safe Resales",
      description: "Every ticket is unique and encrypted, ensuring it's safely resold only through our platform at fair market prices."
    },
    {
      icon: <Ticket className="w-12 h-12 text-eden-secondary" />,
      title: "Complete Control",
      description: "Take a cut from every resale transaction, ensuring you benefit each time a ticket changes hands."
    },
    {
      icon: <Users className="w-12 h-12 text-eden-accent" />,
      title: "Broader Reach",
      description: "Connect with a wider audience through our marketplace, reaching fans you never could before."
    }
  ];

  return (
    <section className="relative py-32 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-medium text-center mb-16 gradient-text"
        >
          Traditional Ticketing is Broken—Eden Fixes It
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="glass-card p-8 space-y-6 hover:border-eden-primary/30 transition-all duration-300">
                {solution.icon}
                <h3 className="text-2xl font-medium text-white">{solution.title}</h3>
                <p className="text-white/70 leading-relaxed">{solution.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};