import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import { supabase } from "@/integrations/supabase/client";
import Landing from "./pages/Landing";
import Explore from "./pages/Explore";
import EventDetails from "./pages/EventDetails";
import CreatorDashboard from "./pages/CreatorDashboard";
import CreatorProfile from "./pages/CreatorProfile";
import UserProfile from "./pages/UserProfile";
import CreatorsLanding from "./pages/CreatorsLanding";
import UsersLanding from "./pages/UsersLanding";
import EventsManagement from "./pages/dashboard/EventsManagement";
import SalesAnalytics from "./pages/dashboard/SalesAnalytics";
import AudienceInsights from "./pages/dashboard/AudienceInsights";
import ResaleActivity from "./pages/dashboard/ResaleActivity";
import Promotions from "./pages/dashboard/Promotions";
import TeamManagement from "./pages/dashboard/TeamManagement";
import Payouts from "./pages/dashboard/Payouts";
import Settings from "./pages/dashboard/Settings";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <SessionContextProvider supabaseClient={supabase}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/creators" element={<CreatorsLanding />} />
            <Route path="/users" element={<UsersLanding />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/event/:id" element={<EventDetails />} />
            <Route path="/dashboard" element={<CreatorDashboard />} />
            <Route path="/dashboard/events" element={<EventsManagement />} />
            <Route path="/dashboard/analytics" element={<SalesAnalytics />} />
            <Route path="/dashboard/audience" element={<AudienceInsights />} />
            <Route path="/dashboard/resale" element={<ResaleActivity />} />
            <Route path="/dashboard/promotions" element={<Promotions />} />
            <Route path="/dashboard/team" element={<TeamManagement />} />
            <Route path="/dashboard/payouts" element={<Payouts />} />
            <Route path="/dashboard/settings" element={<Settings />} />
            <Route path="/profile" element={<CreatorProfile />} />
            <Route path="/user-profile" element={<UserProfile />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </SessionContextProvider>
  </QueryClientProvider>
);

export default App;