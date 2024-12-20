import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import Landing from "@/pages/Landing";
import Explore from "@/pages/Explore";
import Event from "@/pages/Event";
import UserProfile from "@/pages/UserProfile";
import EventsManagement from "@/pages/dashboard/EventsManagement";
import CheckoutSuccess from "@/pages/checkout/Success";
import CheckoutFailure from "@/pages/checkout/Failure";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/event/:id" element={<Event />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/dashboard/events" element={<EventsManagement />} />
        <Route path="/checkout/success" element={<CheckoutSuccess />} />
        <Route path="/checkout/failure" element={<CheckoutFailure />} />
      </Routes>
      <Toaster />
    </Router>
  );
}