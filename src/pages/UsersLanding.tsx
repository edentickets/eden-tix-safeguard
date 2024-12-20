import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Ticket, Bell, Gift, Star, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import Background3D from "@/components/Background3D";
import { PriceAlertNotification } from "@/components/hero/PriceAlertNotification";
import { motion } from "framer-motion";

const UsersLanding = () => {
  return (
    <div className="min-h-screen bg-eden-dark">
      <Navbar />
      <Background3D />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3"
            alt="Concert crowd"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-eden-dark/90 to-eden-dark/70" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-7xl font-bold text-white">
              The Future of Event Ticketing
              <span className="block gradient-text">Is Here</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto">
              Discover, Buy, and Resell Tickets with Confidence—Only on Eden.
            </p>
            <Button size="lg" className="btn-gradient text-white text-lg px-8 py-6">
              Get Started with Eden
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Problem-Solution Section with iPhone Notification Demo */}
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

      {/* How It Works Section */}
      <section className="py-20 bg-eden-light/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 gradient-text">
            3 Easy Steps to Enjoy the Best Ticketing Experience
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Discover Events You Love",
                description: "Explore a wide range of events, from concerts to sports games.",
              },
              {
                step: "02",
                title: "Buy Securely with Confidence",
                description: "Purchase tickets through our secure system with multiple payment options.",
              },
              {
                step: "03",
                title: "Resell and Get Notified",
                description: "Easily resell tickets and get alerts for price changes.",
              },
            ].map((item) => (
              <div key={item.step} className="glass-card p-8 space-y-4 relative overflow-hidden">
                <span className="absolute -right-4 -top-4 text-8xl font-bold text-eden-primary/10">
                  {item.step}
                </span>
                <h3 className="text-xl font-semibold text-white relative z-10">{item.title}</h3>
                <p className="text-white/70 relative z-10">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rewards Section */}
      <section className="py-20 bg-eden-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-eden-primary/5 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-4">
              Earn While You Enjoy
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Get rewarded for every ticket purchase, event attendance, and friend referral.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Gift,
                title: "Purchase Rewards",
                description: "Earn points for every ticket you buy. Use them for discounts on future purchases.",
                color: "text-eden-primary"
              },
              {
                icon: Star,
                title: "Attendance Bonuses",
                description: "Check in to events and earn bonus points. Unlock exclusive perks and early access.",
                color: "text-eden-secondary"
              },
              {
                icon: Trophy,
                title: "Referral Benefits",
                description: "Invite friends and earn rewards when they make their first purchase.",
                color: "text-eden-accent"
              }
            ].map((reward, index) => (
              <motion.div
                key={reward.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="glass-card p-8 space-y-4 h-full">
                  <reward.icon className={`w-12 h-12 ${reward.color}`} />
                  <h3 className="text-xl font-semibold text-white">{reward.title}</h3>
                  <p className="text-white/70">{reward.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 text-center"
          >
            <Link to="/explore">
              <Button size="lg" className="btn-gradient text-white">
                Start Earning Rewards
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold gradient-text">
              Join the Eden Revolution
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Experience the future of event ticketing today. Get started with Eden and never miss
              out on your favorite events again.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/explore">
                <Button size="lg" className="btn-gradient text-white w-full sm:w-auto">
                  Explore Events
                  <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <Link to="/signup">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-eden-primary text-eden-primary w-full sm:w-auto"
                >
                  Sign Up Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UsersLanding;
