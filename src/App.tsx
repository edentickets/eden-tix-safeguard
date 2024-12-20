import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "@/pages/Landing";
import CreatorsLanding from "@/pages/CreatorsLanding";
import UsersLanding from "@/pages/UsersLanding";
import Explore from "@/pages/Explore";
import EventDetails from "@/pages/EventDetails";
import CreatorProfile from "@/pages/CreatorProfile";
import UserProfile from "@/pages/UserProfile";
import CreatorDashboard from "@/pages/CreatorDashboard";
import EventsManagement from "@/pages/dashboard/EventsManagement";
import CreateEvent from "@/pages/dashboard/CreateEvent";
import EditEvent from "@/pages/dashboard/EditEvent";
import EventSales from "@/pages/dashboard/EventSales";
import SalesAnalytics from "@/pages/dashboard/SalesAnalytics";
import AudienceInsights from "@/pages/dashboard/AudienceInsights";
import ResaleActivity from "@/pages/dashboard/ResaleActivity";
import Promotions from "@/pages/dashboard/Promotions";
import TeamManagement from "@/pages/dashboard/TeamManagement";
import Payouts from "@/pages/dashboard/Payouts";
import Settings from "@/pages/dashboard/Settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/creators" element={<CreatorsLanding />} />
        <Route path="/users" element={<UsersLanding />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/event/:id" element={<EventDetails />} />
        <Route path="/creator/:id" element={<CreatorProfile />} />
        <Route path="/user/:id" element={<UserProfile />} />
        <Route path="/dashboard" element={<CreatorDashboard />} />
        <Route path="/dashboard/events" element={<EventsManagement />} />
        <Route path="/dashboard/events/create" element={<CreateEvent />} />
        <Route path="/dashboard/events/:id/edit" element={<EditEvent />} />
        <Route path="/dashboard/events/:id/sales" element={<EventSales />} />
        <Route path="/dashboard/analytics" element={<SalesAnalytics />} />
        <Route path="/dashboard/audience" element={<AudienceInsights />} />
        <Route path="/dashboard/resale" element={<ResaleActivity />} />
        <Route path="/dashboard/promotions" element={<Promotions />} />
        <Route path="/dashboard/team" element={<TeamManagement />} />
        <Route path="/dashboard/payouts" element={<Payouts />} />
        <Route path="/dashboard/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;