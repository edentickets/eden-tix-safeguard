import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

// Lazy load pages for better initial load performance
const Landing = lazy(() => import("./pages/Landing"));
const Explore = lazy(() => import("./pages/Explore"));
const EventDetails = lazy(() => import("./pages/EventDetails"));
const CreatorDashboard = lazy(() => import("./pages/CreatorDashboard"));
const CreatorProfile = lazy(() => import("./pages/CreatorProfile"));
const UserProfile = lazy(() => import("./pages/UserProfile"));
const CreatorsLanding = lazy(() => import("./pages/CreatorsLanding"));
const UsersLanding = lazy(() => import("./pages/UsersLanding"));

// Optimized loading state
const LoadingFallback = () => (
  <div className="min-h-screen bg-eden-dark animate-pulse" />
);

// Error fallback component
const ErrorFallback = ({ error }: { error: Error }) => (
  <div className="min-h-screen bg-eden-dark flex items-center justify-center">
    <div className="text-center space-y-4">
      <h2 className="text-2xl font-semibold text-white">Something went wrong</h2>
      <p className="text-white/70">{error.message}</p>
    </div>
  </div>
);

// Optimized query client configuration
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
      retry: 1,
      refetchOnWindowFocus: false,
      gcTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<LoadingFallback />}>
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
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </BrowserRouter>
        </Suspense>
      </ErrorBoundary>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;