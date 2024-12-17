import { motion } from "framer-motion";

const ClientsSection = () => {
  const clients = [
    { name: "Rolling Loud", logo: "https://placehold.co/200x80/1A1F2C/8B5CF6/png?text=Rolling+Loud" },
    { name: "Rawayana", logo: "https://placehold.co/200x80/1A1F2C/8B5CF6/png?text=Rawayana" },
    { name: "Client 3", logo: "https://placehold.co/200x80/1A1F2C/8B5CF6/png?text=Client+3" },
    { name: "Client 4", logo: "https://placehold.co/200x80/1A1F2C/8B5CF6/png?text=Client+4" },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center text-white/50 text-sm uppercase tracking-wider mb-12"
        >
          Trusted by Leading Event Creators
        </motion.h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex justify-center"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-12 object-contain opacity-50 hover:opacity-100 transition-opacity"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;