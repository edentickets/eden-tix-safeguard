import { motion, AnimatePresence } from "framer-motion";
import { Bell, Smartphone } from "lucide-react";

const notifications = [
  {
    title: "Price Drop Alert! 🎉",
    message: "Taylor Swift ticket now available for $150",
    time: "Just now"
  },
  {
    title: "New Listing Alert! 📢",
    message: "Ed Sheeran VIP tickets listed",
    time: "2m ago"
  }
];

export const PriceAlertNotification = () => {
  return (
    <div className="relative w-[300px] h-[600px]">
      {/* iPhone mockup */}
      <div className="absolute inset-0 bg-eden-light/30 rounded-[3rem] border-8 border-eden-light/40 backdrop-blur-xl shadow-2xl">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-eden-light/40 rounded-b-2xl" />
        <Smartphone className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 text-eden-light/10" />
        
        {/* Notifications container */}
        <div className="relative h-full pt-12 px-4 overflow-hidden">
          <AnimatePresence>
            {notifications.map((notification, index) => (
              <motion.div
                key={notification.title}
                initial={{ opacity: 0, y: -20, x: 20 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ 
                  type: "spring",
                  stiffness: 500,
                  damping: 40,
                  delay: index * 4
                }}
                className="mb-4 bg-white/10 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-white/20 relative overflow-hidden"
              >
                {/* Shimmer effect */}
                <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite]">
                  <div className="h-full w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="mt-1 h-8 w-8 rounded-full bg-eden-primary/20 flex items-center justify-center">
                    <Bell className="h-4 w-4 text-eden-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-sm text-white">{notification.title}</h3>
                    <p className="text-sm text-white/70">{notification.message}</p>
                    <p className="text-xs text-white/50 mt-1">{notification.time}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};