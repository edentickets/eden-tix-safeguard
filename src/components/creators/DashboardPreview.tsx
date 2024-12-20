import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { PerformanceMetrics } from "@/components/dashboard/PerformanceMetrics";

export const DashboardPreview = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative mx-auto"
      >
        <div className="relative rounded-lg overflow-hidden border border-white/10 shadow-2xl bg-gradient-to-br from-eden-dark/95 to-eden-light/5">
          <div className="backdrop-blur-sm p-6 rounded-lg">
            <div className="transform scale-[0.85] origin-top">
              <DashboardHeader />
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-6"
              >
                <PerformanceMetrics />
              </motion.div>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-eden-dark/90 to-transparent pointer-events-none" />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="absolute -bottom-4 -right-4 bg-eden-dark/90 backdrop-blur-sm p-4 rounded-lg border border-eden-primary/20 shadow-xl"
        >
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-eden-primary/80 to-eden-accent/80 border-2 border-eden-dark"
                />
              ))}
            </div>
            <span className="text-sm text-white/90">
              +3 new team members joined
            </span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};