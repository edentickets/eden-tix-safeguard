import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { 
  BarChart3, 
  DollarSign, 
  Database,
  ArrowUp,
} from "lucide-react";

export const DashboardPreview = () => {
  return (
    <section className="py-32 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-primary opacity-5" />
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-medium gradient-text mb-6">
            Powerful Insights at Your Fingertips
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Make data-driven decisions with our comprehensive dashboard. Track sales, monitor trends, 
            and maximize revenue from both primary and secondary markets.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <Card className="p-6 bg-eden-dark/50 border-eden-primary/20 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-eden-primary/20">
                  <BarChart3 className="w-6 h-6 text-eden-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white">Real-time Analytics</h3>
                  <p className="text-white/70">Track sales performance and market trends instantly</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-eden-dark/50 border-eden-primary/20 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-eden-secondary/20">
                  <DollarSign className="w-6 h-6 text-eden-secondary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white">Secondary Market Revenue</h3>
                  <p className="text-white/70">Earn from every resale with our revenue sharing model</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-eden-dark/50 border-eden-primary/20 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-eden-accent/20">
                  <Database className="w-6 h-6 text-eden-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white">Smart Insights</h3>
                  <p className="text-white/70">AI-powered recommendations for optimal pricing</p>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="/dashboard-preview.png" 
                alt="Eden Dashboard Preview" 
                className="w-full rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-eden-dark/80 to-transparent" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="absolute -bottom-6 -right-6 bg-eden-dark/90 backdrop-blur-sm p-6 rounded-xl border border-eden-primary/20"
            >
              <div className="flex items-center gap-3">
                <ArrowUp className="w-5 h-5 text-eden-secondary" />
                <span className="text-eden-secondary font-medium">+24%</span>
                <span className="text-white/70">Revenue from Resales</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};