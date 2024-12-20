import React from "react";
import { Button } from "@/components/ui/button";
import { PlusCircle, BarChart2, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

export function DashboardHeader() {
  const organizerName = "Sarah";

  return (
    <div className="relative space-y-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-8 rounded-xl bg-gradient-to-br from-eden-dark/90 to-eden-light/80 border border-white/5 backdrop-blur-sm hover:border-white/10 transition-all duration-300 shadow-lg"
      >
        <div className="flex flex-col md:flex-row justify-between items-start gap-6">
          <div className="space-y-3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2"
            >
              <TrendingUp className="w-6 h-6 text-eden-secondary" />
              <span className="text-sm font-medium text-eden-secondary">+28% this month</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-4xl font-bold text-white/90"
            >
              Welcome Back, {organizerName}
            </motion.h1>
            <p className="text-lg text-gray-400/80">
              Your events are performing well. Let's keep the momentum going!
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <Button 
              className="bg-eden-primary/90 hover:bg-eden-primary transition-colors duration-300 text-white w-full sm:w-auto group"
              size="lg"
            >
              <PlusCircle className="mr-2 h-5 w-5 group-hover:rotate-90 transition-transform duration-300" />
              Create New Event
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/10 hover:bg-white/5 text-white/80 w-full sm:w-auto backdrop-blur-sm group"
            >
              <BarChart2 className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              Analytics
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}