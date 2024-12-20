import { motion } from "framer-motion";
import { RewardsTitle } from "./rewards/RewardsTitle";
import { RewardsGrid } from "./rewards/RewardsGrid";

const RewardsSection = () => {
  return (
    <section className="py-32 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-secondary opacity-5" />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto relative"
      >
        <RewardsTitle />
        <RewardsGrid />
      </motion.div>
    </section>
  );
};

export default RewardsSection;