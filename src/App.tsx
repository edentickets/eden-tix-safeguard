import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import Home from "@/pages/Home";
import Explore from "@/pages/Explore";
import Event from "@/pages/Event";
import UserProfile from "@/pages/UserProfile";
import CreateEvent from "@/pages/CreateEvent";
import EditEvent from "@/pages/EditEvent";
import Dashboard from "@/pages/dashboard/Dashboard";
import EventsManagement from "@/pages/dashboard/EventsManagement";
import PromotersManagement from "@/pages/dashboard/PromotersManagement";
import GuestListsManagement from "@/pages/dashboard/GuestListsManagement";
import CheckoutSuccess from "@/pages/checkout/Success";
import CheckoutFailure from "@/pages/checkout/Failure";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/event/:id" element={<Event />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/create-event" element={<CreateEvent />} />
        <Route path="/edit-event/:id" element={<EditEvent />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/events" element={<EventsManagement />} />
        <Route path="/dashboard/promoters" element={<PromotersManagement />} />
        <Route path="/dashboard/guest-lists" element={<GuestListsManagement />} />
        <Route path="/checkout/success" element={<CheckoutSuccess />} />
        <Route path="/checkout/failure" element={<CheckoutFailure />} />
      </Routes>
      <Toaster />
    </Router>
  );
}