import { motion } from "framer-motion";
import { 
  Banknote, 
  Shield, 
  Users, 
  TrendingUp,
  Ticket,
  BarChart3
} from "lucide-react";

const features = [
  {
    icon: <Banknote className="w-6 h-6" />,
    title: "Smart Revenue Share",
    description: "Earn from both primary sales and resales with our innovative revenue sharing model."
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Advanced Security",
    description: "Unique digital tickets with dynamic QR scrambling ensure maximum security and prevent unauthorized transfers."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Large Market Exposure",
    description: "Access a growing community of event enthusiasts and maximize your ticket sales."
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Smart Pricing",
    description: "Set dynamic pricing rules and optimize revenue with our AI-powered pricing engine."
  },
  {
    icon: <Ticket className="w-6 h-6" />,
    title: "Controlled Resale",
    description: "Set your own resale rules and maintain control over your ticket market."
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Real-time Analytics",
    description: "Track sales, monitor trends, and make data-driven decisions with comprehensive analytics."
  }
];

export const ProblemSolution = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-medium mb-6 gradient-text">
            The Future of Event Ticketing
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Traditional ticketing platforms struggle with fraud, scalping, and revenue leakage. 
            Eden solves these problems with advanced digital security and smart features.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-colors"
            >
              <div className="h-12 w-12 rounded-lg bg-eden-accent/10 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};