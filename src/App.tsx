import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import Explore from "@/pages/Explore";
import UserProfile from "@/pages/UserProfile";
import EventsManagement from "@/pages/dashboard/EventsManagement";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Explore />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/dashboard/events" element={<EventsManagement />} />
      </Routes>
      <Toaster />
    </Router>
  );
}