import { Bell, Shield, Ticket, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { PriceAlertNotification } from "@/components/hero/PriceAlertNotification";

export const TicketFeatures = () => {
  return (
    <section className="py-20 bg-eden-dark/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-center mb-12 gradient-text"
        >
          Never Miss Your Perfect Ticket
        </motion.h2>
        
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-6 space-y-3 hover:border-eden-primary/30 transition-all duration-300"
            >
              <Bell className="w-6 h-6 text-eden-primary" />
              <h3 className="text-lg font-semibold text-white">Smart Price Alerts</h3>
              <p className="text-white/70">
                Set your target price and let Eden notify you instantly when tickets match your budget. 
                Never miss out on the perfect deal with our intelligent notification system.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card p-6 space-y-3 hover:border-eden-secondary/30 transition-all duration-300"
            >
              <TrendingUp className="w-6 h-6 text-eden-secondary" />
              <h3 className="text-lg font-semibold text-white">Dynamic Price Tracking</h3>
              <p className="text-white/70">
                Our AI-powered system tracks price trends and market demand in real-time, 
                helping you make informed decisions about when to buy or sell tickets.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card p-6 space-y-3 hover:border-eden-accent/30 transition-all duration-300"
            >
              <Shield className="w-6 h-6 text-eden-accent" />
              <h3 className="text-lg font-semibold text-white">Guaranteed Authenticity</h3>
              <p className="text-white/70">
                Every ticket is verified using our dynamic QR technology and blockchain security. 
                Buy with complete confidence knowing your tickets are 100% authentic.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="glass-card p-6 space-y-3 hover:border-eden-primary/30 transition-all duration-300"
            >
              <Ticket className="w-6 h-6 text-eden-primary" />
              <h3 className="text-lg font-semibold text-white">Smart Waitlist</h3>
              <p className="text-white/70">
                Sold out event? Join our smart waitlist and get instant notifications when tickets 
                become available through our verified resale marketplace.
              </p>
            </motion.div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <PriceAlertNotification />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};