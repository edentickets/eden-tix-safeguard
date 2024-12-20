import { Bell, Shield, Ticket } from "lucide-react";
import { motion } from "framer-motion";
import { PriceAlertNotification } from "@/components/hero/PriceAlertNotification";

export const FeaturesSection = () => {
  return (
    <section className="py-20 bg-eden-dark/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 gradient-text">
          Never Miss a Great Deal Again
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="glass-card p-8 space-y-4">
              <Bell className="w-12 h-12 text-eden-primary" />
              <h3 className="text-xl font-semibold text-white">Smart Price Alerts</h3>
              <p className="text-white/70">
                Set your target price and let Eden notify you when tickets become available. 
                Our smart notification system ensures you never miss out on the perfect deal.
              </p>
            </div>

            <div className="glass-card p-8 space-y-4">
              <Shield className="w-12 h-12 text-eden-secondary" />
              <h3 className="text-xl font-semibold text-white">Secure Purchases</h3>
              <p className="text-white/70">
                Buy with confidence knowing every transaction is protected. Our secure platform 
                ensures your tickets are authentic and your payment is safe.
              </p>
            </div>

            <div className="glass-card p-8 space-y-4">
              <Ticket className="w-12 h-12 text-eden-accent" />
              <h3 className="text-xl font-semibold text-white">Easy Transfers</h3>
              <p className="text-white/70">
                Need to transfer your ticket? Do it instantly through our app with just a few taps. 
                No paperwork, no hassle.
              </p>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <PriceAlertNotification />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};