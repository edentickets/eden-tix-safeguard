import { motion } from "framer-motion";

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

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-primary opacity-5" />
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-medium gradient-text">
            Trusted by Leading Event Creators
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Join the world's most innovative event organizers who are revolutionizing 
            their ticketing experience with Eden's smart digital platform.
          </p>
        </motion.div>
        
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {clients.map((client) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: client.delay }}
              className="flex justify-center group"
            >
              <div className="glass-card p-6 w-full h-24 flex items-center justify-center hover:border-eden-primary/30">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-12 object-contain opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;