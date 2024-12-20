import React from "react";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  Calendar, 
  BarChart2, 
  Users,
  RefreshCcw, 
  Megaphone,
  Users2,
  Wallet,
  Settings,
  GripVertical
} from "lucide-react";

const menuItems = [
  { icon: LayoutDashboard, label: "Overview", href: "/dashboard" },
  { icon: Calendar, label: "Events Management", href: "/dashboard/events" },
  { icon: BarChart2, label: "Sales & Analytics", href: "/dashboard/analytics" },
  { icon: Users, label: "Audience Insights", href: "/dashboard/audience" },
  { icon: RefreshCcw, label: "Resale Activity", href: "/dashboard/resale" },
  { icon: Megaphone, label: "Promotions", href: "/dashboard/promotions" },
  { icon: Users2, label: "Team Management", href: "/dashboard/team" },
  { icon: Wallet, label: "Payouts", href: "/dashboard/payouts" },
  { icon: Settings, label: "Settings", href: "/dashboard/settings" },
];

export function Sidebar() {
  const [items, setItems] = React.useState(menuItems);
  const location = useLocation();

  const handleDragStart = (e: React.DragEvent, index: number) => {
    e.dataTransfer.setData('text/plain', index.toString());
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent, dropIndex: number) => {
    e.preventDefault();
    const dragIndex = Number(e.dataTransfer.getData('text/plain'));
    const newItems = [...items];
    const [draggedItem] = newItems.splice(dragIndex, 1);
    newItems.splice(dropIndex, 0, draggedItem);
    setItems(newItems);
  };

  return (
    <aside className="w-64 min-h-screen bg-eden-light p-4">
      <div className="mb-8">
        <h2 className="text-xl font-bold text-white">Eden Creator</h2>
        <p className="text-sm text-gray-400 mt-1">Manage your events</p>
      </div>
      <nav className="space-y-2">
        {items.map((item, index) => (
          <div
            key={item.href}
            draggable
            onDragStart={(e) => handleDragStart(e, index)}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, index)}
            className="group cursor-move"
          >
            <Link
              to={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-md text-gray-300",
                "hover:bg-eden-primary/10 hover:text-eden-primary transition-colors",
                location.pathname === item.href && "bg-eden-primary/10 text-eden-primary"
              )}
            >
              <GripVertical className="w-4 h-4 opacity-0 group-hover:opacity-50" />
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </Link>
          </div>
        ))}
      </nav>
    </aside>
  );
}