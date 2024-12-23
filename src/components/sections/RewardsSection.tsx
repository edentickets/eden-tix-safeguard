import { motion } from "framer-motion";
import { RewardsTitle } from "./rewards/RewardsTitle";
import { RewardsGrid } from "./rewards/RewardsGrid";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Gift } from "lucide-react";

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
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link to="/users">
            <Button 
              size="lg"
              className="bg-eden-secondary hover:bg-eden-secondary/90 text-white px-8 py-6"
            >
              Start Earning Rewards
              <Gift className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default RewardsSection;