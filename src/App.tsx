import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Landing from "@/pages/Landing";
import CreatorsLanding from "@/pages/CreatorsLanding";
import UsersLanding from "@/pages/UsersLanding";
import Explore from "@/pages/Explore";
import Event from "@/pages/Event";
import UserProfile from "@/pages/UserProfile";
import EventsManagement from "@/pages/dashboard/EventsManagement";
import CheckoutSuccess from "@/pages/checkout/Success";
import CheckoutFailure from "@/pages/checkout/Failure";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60, // 1 minute
      retry: 1,
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/creators" element={<CreatorsLanding />} />
          <Route path="/users" element={<UsersLanding />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/event/:id" element={<Event />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/dashboard/events" element={<EventsManagement />} />
          <Route path="/checkout/success" element={<CheckoutSuccess />} />
          <Route path="/checkout/failure" element={<CheckoutFailure />} />
        </Routes>
        <Toaster />
      </Router>
    </QueryClientProvider>
  );
}