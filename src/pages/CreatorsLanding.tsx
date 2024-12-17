import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Ticket, BarChart3, Users, Zap, Gift, CreditCard } from "lucide-react";
import { Card } from "@/components/ui/card";

const CreatorsLanding = () => {
  return (
    <div className="min-h-screen bg-eden-dark">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
              Unlock the Future of Ticketing for Your Events
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto">
              Sell smarter, resell securely, and engage your fans like never before—Join Eden today.
            </p>
            <Button size="lg" className="bg-eden-secondary hover:bg-eden-secondary/90">
              Start Selling on Eden
              <ArrowRight className="ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Problem-Solution Section */}
      <section className="py-20 px-4 bg-eden-light/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 gradient-text">
            Traditional Ticketing is Broken—Eden Fixes It
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="glass-card p-6 space-y-4">
              <Shield className="w-12 h-12 text-eden-primary" />
              <h3 className="text-xl font-semibold text-white">Secure & Safe Resales</h3>
              <p className="text-white/70">
                Every ticket is unique and encrypted, ensuring it's safely resold only through our platform at fair market prices.
              </p>
            </Card>
            <Card className="glass-card p-6 space-y-4">
              <Ticket className="w-12 h-12 text-eden-secondary" />
              <h3 className="text-xl font-semibold text-white">Complete Control</h3>
              <p className="text-white/70">
                Take a cut from every resale transaction, ensuring you benefit each time a ticket changes hands.
              </p>
            </Card>
            <Card className="glass-card p-6 space-y-4">
              <Users className="w-12 h-12 text-eden-accent" />
              <h3 className="text-xl font-semibold text-white">Broader Reach</h3>
              <p className="text-white/70">
                Connect with a wider audience through our marketplace, reaching fans you never could before.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 gradient-text">
            Eden's Powerful Features for Event Creators
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Shield className="w-8 h-8" />,
                title: "NFT-Style Tickets",
                description: "Unique, encrypted, and secure tickets"
              },
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: "Revenue from Resales",
                description: "Earn from every ticket resale"
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Dynamic Pricing",
                description: "Market-driven resale prices"
              },
              {
                icon: <Gift className="w-8 h-8" />,
                title: "Customizable Options",
                description: "Multiple ticket tiers and types"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Event Dashboard",
                description: "Complete event management"
              },
              {
                icon: <CreditCard className="w-8 h-8" />,
                title: "Easy Payments",
                description: "Multiple payment methods"
              }
            ].map((feature, index) => (
              <Card key={index} className="glass-card p-6 space-y-4">
                <div className="text-eden-primary">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-secondary">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
            Join the Future of Ticketing Today
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Experience the power of secure, transparent, and profitable event ticketing with Eden.
          </p>
          <Button size="lg" className="bg-eden-dark hover:bg-eden-dark/90">
            Get Started with Eden
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default CreatorsLanding;