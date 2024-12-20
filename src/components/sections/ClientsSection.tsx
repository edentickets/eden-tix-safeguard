import { motion } from "framer-motion";
import { ClientsTitle } from "./clients/ClientsTitle";
import { ClientsGrid } from "./clients/ClientsGrid";

const ClientsSection = () => {
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
        <ClientsTitle />
        <ClientsGrid />

        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
          }}
          className="mt-16 text-center"
        >
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
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