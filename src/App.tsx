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

const queryClient = new QueryClient();

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
            <Route path="/profile" element={<CreatorProfile />} />
            <Route path="/user-profile" element={<UserProfile />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </SessionContextProvider>
  </QueryClientProvider>
);

export default App;