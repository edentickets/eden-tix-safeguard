import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { 
  BarChart3, 
  DollarSign, 
  Database,
  ArrowUp,
} from "lucide-react";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { LiveMetrics } from "@/components/dashboard/LiveMetrics";
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
        <div className="relative rounded-lg overflow-hidden border border-white/10 shadow-2xl">
          <div className="bg-eden-dark/90 backdrop-blur-sm p-4 rounded-lg">
            <div className="transform scale-75 origin-top">
              <DashboardHeader />
              <div className="mt-4">
                <PerformanceMetrics />
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-eden-dark/80 to-transparent pointer-events-none" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="absolute -bottom-4 -right-4 bg-eden-dark/90 backdrop-blur-sm p-4 rounded-lg border border-eden-primary/20"
        >
          <div className="flex items-center gap-2">
            <ArrowUp className="w-4 h-4 text-eden-secondary" />
            <span className="text-sm text-eden-secondary font-medium">+24%</span>
            <span className="text-sm text-white/70">Revenue from Resales</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};