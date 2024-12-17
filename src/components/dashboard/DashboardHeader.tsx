import React from "react";
import { Button } from "@/components/ui/button";
import { PlusCircle, BarChart2 } from "lucide-react";
import { LiveMetrics } from "./LiveMetrics";
import { motion } from "framer-motion";

export function DashboardHeader() {
  const organizerName = "Sarah";

  return (
    <div className="relative space-y-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card p-8 rounded-xl bg-gradient-to-r from-eden-dark to-eden-light border border-eden-accent/20 hover:shadow-2xl transition-all duration-300"
      >
        <div className="flex flex-col md:flex-row justify-between items-start gap-6">
          <div className="space-y-2">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent"
            >
              Welcome Back, {organizerName}
            </motion.h1>
            <p className="text-lg text-gray-400">
              Your events, your revenue, your way—built for creators like you.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <Button 
              className="btn-gradient w-full sm:w-auto"
              size="lg"
            >
              <PlusCircle className="mr-2 h-5 w-5" />
              Create New Event
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-eden-accent text-eden-accent hover:bg-eden-accent/10 w-full sm:w-auto backdrop-blur-sm"
            >
              <BarChart2 className="mr-2 h-5 w-5" />
              Explore Analytics
            </Button>
          </div>
        </div>
        <LiveMetrics />
      </motion.div>
    </div>
  );
}