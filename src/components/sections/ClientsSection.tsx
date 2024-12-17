import { motion } from "framer-motion";

const ClientsSection = () => {
  const clients = [
    { 
      name: "Rolling Loud", 
      logo: "https://placehold.co/200x80/1A1F2C/8B5CF6/png?text=Rolling+Loud",
      delay: 0.2 
    },
    { 
      name: "Rawayana", 
      logo: "https://placehold.co/200x80/1A1F2C/8B5CF6/png?text=Rawayana",
      delay: 0.4 
    },
    { 
      name: "Ultra Music", 
      logo: "https://placehold.co/200x80/1A1F2C/8B5CF6/png?text=Ultra+Music",
      delay: 0.6 
    },
    { 
      name: "EDC", 
      logo: "https://placehold.co/200x80/1A1F2C/8B5CF6/png?text=EDC",
      delay: 0.8 
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-white/50 text-sm uppercase tracking-wider mb-12"
        >
          Trusted by Leading Event Creators
        </motion.h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {clients.map((client) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: client.delay }}
              className="flex justify-center group"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-12 object-contain opacity-50 group-hover:opacity-100 transition-opacity duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;