import { Navbar } from "@/components/Navbar";
import { Sidebar } from "./Sidebar";
import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-eden-dark">
      <Navbar />
      <div className="flex relative">
        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden fixed bottom-4 right-4 z-50 bg-eden-primary/90 hover:bg-eden-primary text-white rounded-full shadow-lg"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <Menu className="h-6 w-6" />
        </Button>

        {/* Sidebar with mobile overlay */}
        <div
          className={`${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0 fixed inset-y-0 left-0 z-40 transition-transform duration-300 ease-in-out lg:relative`}
        >
          <Sidebar />
          {/* Mobile overlay backdrop */}
          {sidebarOpen && (
            <div
              className="fixed inset-0 bg-black/50 lg:hidden"
              onClick={() => setSidebarOpen(false)}
            />
          )}
        </div>

        {/* Main content */}
        <main className="flex-1 p-4 lg:p-8 w-full lg:ml-0">
          {children}
        </main>
      </div>
    </div>
  );
}