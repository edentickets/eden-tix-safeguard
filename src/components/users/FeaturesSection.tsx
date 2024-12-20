import { Bell, Shield, Ticket, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { PriceAlertNotification } from "@/components/hero/PriceAlertNotification";

export const FeaturesSection = () => {
  return (
    <section className="py-20 bg-eden-dark/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 gradient-text">
          Never Miss Your Perfect Ticket
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <div className="glass-card p-4 space-y-2">
              <Bell className="w-6 h-6 text-eden-primary" />
              <h3 className="text-lg font-semibold text-white">Smart Price Alerts</h3>
              <p className="text-sm text-white/70">
                Set your target price and let Eden notify you when tickets become available. 
                Our smart notification system ensures you never miss out on the perfect deal.
              </p>
            </div>

            <div className="glass-card p-4 space-y-2">
              <TrendingUp className="w-6 h-6 text-eden-secondary" />
              <h3 className="text-lg font-semibold text-white">Optimal Resale Pricing</h3>
              <p className="text-sm text-white/70">
                Get the best value for your tickets with our dynamic pricing algorithm. 
                Our platform analyzes market demand to help you set the perfect resale price.
              </p>
            </div>

            <div className="glass-card p-4 space-y-2">
              <Shield className="w-6 h-6 text-eden-accent" />
              <h3 className="text-lg font-semibold text-white">Secure Transactions</h3>
              <p className="text-sm text-white/70">
                Buy and sell with confidence knowing every transaction is protected. 
                Our secure platform ensures your tickets are authentic and your payment is safe.
              </p>
            </div>

            <div className="glass-card p-4 space-y-2">
              <Ticket className="w-6 h-6 text-eden-primary" />
              <h3 className="text-lg font-semibold text-white">Sold Out? Not for You</h3>
              <p className="text-sm text-white/70">
                Access tickets even after they're sold out through our verified resale marketplace. 
                Set alerts for specific events and be first in line when tickets become available.
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