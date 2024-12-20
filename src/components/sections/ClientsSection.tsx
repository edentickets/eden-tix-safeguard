import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const ClientsSection = () => {
  const clients = [
    { 
      name: "Ultra Music Festival", 
      logo: "https://placehold.co/200x80/1A1F2C/8B5CF6/png?text=Ultra+Music",
      delay: 0.2 
    },
    { 
      name: "Electric Daisy Carnival", 
      logo: "https://placehold.co/200x80/1A1F2C/8B5CF6/png?text=EDC",
      delay: 0.3 
    },
    { 
      name: "Tomorrowland", 
      logo: "https://placehold.co/200x80/1A1F2C/8B5CF6/png?text=Tomorrowland",
      delay: 0.4 
    },
    { 
      name: "Coachella", 
      logo: "https://placehold.co/200x80/1A1F2C/8B5CF6/png?text=Coachella",
      delay: 0.5 
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
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
    <section className="py-32 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-primary opacity-5" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-eden-accent/20 via-eden-primary/10 to-transparent" />
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto relative"
      >
        <motion.div
          variants={containerVariants}
          className="text-center space-y-6 mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-medium gradient-text"
          >
            Trusted by Leading Event Creators
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-white/70 max-w-2xl mx-auto"
          >
            Join the world's most innovative event organizers who are revolutionizing 
            their ticketing experience with Eden's smart digital platform.
          </motion.p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center"
        >
          {clients.map((client) => (
            <motion.div
              key={client.name}
              variants={itemVariants}
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
                    src={client.logo}
                    alt={client.name}
                    className="h-12 w-full object-contain transition-all duration-500"
                  />
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="mt-16 text-center"
        >
          <motion.p
            variants={itemVariants}
            className="text-white/60 text-sm"
          >
            Join over 1,000+ event creators worldwide
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ClientsSection;