import { motion } from "framer-motion";
import { CTABackground } from "./cta/CTABackground";
import { CTAContent } from "./cta/CTAContent";
import { CTAButtons } from "./cta/CTAButtons";

const CTASection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <CTABackground />
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-7xl mx-auto relative"
      >
        <div className="relative bg-eden-light/30 backdrop-blur-md rounded-3xl p-16 border border-white/10">
          <CTAContent />
          <CTAButtons />
        </div>
      </motion.div>
    </section>
  );
};

export default CTASection;