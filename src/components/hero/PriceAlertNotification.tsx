import { motion, AnimatePresence } from "framer-motion";
import { Bell } from "lucide-react";

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
    <div className="absolute right-0 top-32 max-w-sm px-4 mt-2 pointer-events-none select-none">
      <AnimatePresence>
        {notifications.map((notification, index) => (
          <motion.div
            key={notification.title}
            initial={{ opacity: 0, y: -20, x: 50 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ 
              type: "spring",
              stiffness: 500,
              damping: 40,
              delay: index * 4
            }}
            className={`
              mb-4 bg-white/10 backdrop-blur-lg rounded-xl p-4 shadow-lg
              border border-white/20 relative overflow-hidden
              transform transition-all duration-500
            `}
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
  );
};