import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import Landing from "@/pages/Landing";
import CreatorsLanding from "@/pages/CreatorsLanding";
import UsersLanding from "@/pages/UsersLanding";
import Explore from "@/pages/Explore";
import EventDetails from "@/pages/EventDetails";
import UserProfile from "@/pages/UserProfile";
import EventsManagement from "@/pages/dashboard/EventsManagement";
import CheckoutSuccess from "@/pages/checkout/Success";
import CheckoutFailure from "@/pages/checkout/Failure";
import { Toaster } from "@/components/ui/toaster";
import { AuthModal } from "@/components/auth/AuthModal";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-eden-dark text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/creators" element={<CreatorsLanding />} />
          <Route path="/users" element={<UsersLanding />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/event/:id" element={<EventDetails />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/dashboard/events" element={<EventsManagement />} />
          <Route path="/checkout/success" element={<CheckoutSuccess />} />
          <Route path="/checkout/failure" element={<CheckoutFailure />} />
        </Routes>
        <AuthModal />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;