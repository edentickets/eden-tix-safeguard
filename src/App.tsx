import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import Landing from "@/pages/Landing";
import CreatorsLanding from "@/pages/CreatorsLanding";
import UsersLanding from "@/pages/UsersLanding";
import Explore from "@/pages/Explore";
import EventDetails from "@/pages/EventDetails";
import UserProfile from "@/pages/UserProfile";
import CreatorDashboard from "@/pages/CreatorDashboard";
import EventsManagement from "@/pages/dashboard/EventsManagement";
import CreateEvent from "@/pages/dashboard/CreateEvent";
import EditEvent from "@/pages/dashboard/EditEvent";
import EventSales from "@/pages/dashboard/EventSales";
import AudienceInsights from "@/pages/dashboard/AudienceInsights";
import ResaleActivity from "@/pages/dashboard/ResaleActivity";
import Promotions from "@/pages/dashboard/Promotions";
import TeamManagement from "@/pages/dashboard/TeamManagement";
import Payouts from "@/pages/dashboard/Payouts";
import Settings from "@/pages/dashboard/Settings";
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
          
          {/* Dashboard Routes */}
          <Route path="/dashboard" element={<CreatorDashboard />} />
          <Route path="/dashboard/events" element={<EventsManagement />} />
          <Route path="/dashboard/events/create" element={<CreateEvent />} />
          <Route path="/dashboard/events/:id/edit" element={<EditEvent />} />
          <Route path="/dashboard/events/:id/sales" element={<EventSales />} />
          <Route path="/dashboard/audience" element={<AudienceInsights />} />
          <Route path="/dashboard/resale" element={<ResaleActivity />} />
          <Route path="/dashboard/promotions" element={<Promotions />} />
          <Route path="/dashboard/team" element={<TeamManagement />} />
          <Route path="/dashboard/payouts" element={<Payouts />} />
          <Route path="/dashboard/settings" element={<Settings />} />
          
          {/* Checkout Routes */}
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