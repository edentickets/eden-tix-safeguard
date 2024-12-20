import { motion } from "framer-motion";
import { ClientCard } from "./ClientCard";

const clients = [
  { 
    name: "Ultra Music Festival", 
    logo: "https://placehold.co/200x80/1A1F2C/8B5CF6/png?text=Ultra+Music",
  },
  { 
    name: "Electric Daisy Carnival", 
    logo: "https://placehold.co/200x80/1A1F2C/8B5CF6/png?text=EDC",
  },
  { 
    name: "Tomorrowland", 
    logo: "https://placehold.co/200x80/1A1F2C/8B5CF6/png?text=Tomorrowland",
  },
  { 
    name: "Coachella", 
    logo: "https://placehold.co/200x80/1A1F2C/8B5CF6/png?text=Coachella",
  },
];

export const ClientsGrid = () => {
  return (
    <motion.div 
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2
          }
        }
      }}
      className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center"
    >
      {clients.map((client) => (
        <ClientCard key={client.name} {...client} />
      ))}
    </motion.div>
  );
};