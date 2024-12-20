import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

interface ClientCardProps {
  name: string;
  logo: string;
}

export const ClientCard = ({ name, logo }: ClientCardProps) => {
  const logoVariants = {
    initial: { filter: "grayscale(100%)", opacity: 0.5 },
    hover: { 
      filter: "grayscale(0%)", 
      opacity: 1,
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <motion.div
      variants={{
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
      }}
      className="relative group"
    >
      <Card className="glass-card p-6 hover:bg-white/5 transition-all duration-500 backdrop-blur-lg">
        <motion.div
          initial="initial"
          whileHover="hover"
          variants={logoVariants}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-eden-primary/10 to-eden-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
          <img
            src={logo}
            alt={name}
            className="h-12 w-full object-contain transition-all duration-500"
          />
        </motion.div>
      </Card>
    </motion.div>
  );
};