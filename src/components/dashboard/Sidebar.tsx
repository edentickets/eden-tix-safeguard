import React from "react";
import { cn } from "@/lib/utils";
import { 
  LayoutDashboard, 
  Calendar, 
  BarChart2, 
  RefreshCcw, 
  Megaphone,
  Wallet,
  Settings
} from "lucide-react";

const menuItems = [
  { icon: LayoutDashboard, label: "Overview", href: "#overview" },
  { icon: Calendar, label: "Events Management", href: "#events" },
  { icon: BarChart2, label: "Sales & Analytics", href: "#analytics" },
  { icon: RefreshCcw, label: "Resale Activity", href: "#resale" },
  { icon: Megaphone, label: "Promotions", href: "#promotions" },
  { icon: Wallet, label: "Payouts", href: "#payouts" },
  { icon: Settings, label: "Settings", href: "#settings" },
];

export function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-eden-light p-4">
      <div className="mb-8">
        <h2 className="text-xl font-bold text-white">Eden Creator</h2>
      </div>
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-3 px-3 py-2 rounded-md text-gray-300",
              "hover:bg-eden-primary/10 hover:text-eden-primary transition-colors"
            )}
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </a>
        ))}
      </nav>
    </aside>
  );
}