import { Sidebar } from "./Sidebar";
import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="min-h-screen bg-eden-dark">
      <div className="flex relative">
        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden fixed bottom-4 right-4 z-50 bg-eden-primary/90 hover:bg-eden-primary text-white rounded-full shadow-lg"
          onClick={toggleSidebar}
        >
          <Menu className="h-6 w-6" />
        </Button>

        {/* Sidebar with mobile overlay */}
        <div
          className={`${
            sidebarOpen || !isMobile ? "translate-x-0" : "-translate-x-full"
          } fixed inset-y-0 left-0 z-40 transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0`}
        >
          <Sidebar />
          {/* Mobile overlay backdrop */}
          {sidebarOpen && isMobile && (
            <div
              className="fixed inset-0 bg-black/50 lg:hidden"
              onClick={() => setSidebarOpen(false)}
            />
          )}
        </div>

        {/* Main content */}
        <main className="flex-1 p-4 lg:p-8 w-full lg:ml-0 overflow-x-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}