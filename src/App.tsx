import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import { supabase } from "@/integrations/supabase/client";
import { lazy, Suspense } from 'react';
import { Navbar } from "@/components/Navbar";
import Background3D from "@/components/Background3D";
import { AuthProvider } from "@/contexts/auth-context";

// Lazy load page components
const Landing = lazy(() => import("./pages/Landing"));
const Explore = lazy(() => import("./pages/Explore"));
const EventDetails = lazy(() => import("./pages/EventDetails"));
const CreatorDashboard = lazy(() => import("./pages/CreatorDashboard"));
const CreatorProfile = lazy(() => import("./pages/CreatorProfile"));
const UserProfile = lazy(() => import("./pages/UserProfile"));
const CreatorsLanding = lazy(() => import("./pages/CreatorsLanding"));
const UsersLanding = lazy(() => import("./pages/UsersLanding"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      gcTime: 1000 * 60 * 30, // 30 minutes
      retry: 1,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      suspense: true,
    },
  },
});

// Layout component with shared elements
const Layout = () => (
  <div className="min-h-screen bg-eden-dark overflow-hidden">
    <Background3D />
    <Navbar />
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-eden-primary" />
      </div>
    }>
      <Outlet />
    </Suspense>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <SessionContextProvider supabaseClient={supabase}>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Landing />} />
                <Route path="/creators" element={<CreatorsLanding />} />
                <Route path="/users" element={<UsersLanding />} />
                <Route path="/explore" element={<Explore />} />
                <Route path="/event/:id" element={<EventDetails />} />
                <Route path="/dashboard" element={<CreatorDashboard />} />
                <Route path="/profile" element={<CreatorProfile />} />
                <Route path="/user-profile" element={<UserProfile />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </SessionContextProvider>
  </QueryClientProvider>
);

export default App;