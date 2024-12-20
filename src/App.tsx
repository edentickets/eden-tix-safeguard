import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Landing from "@/pages/Landing";
import CreatorsLanding from "@/pages/CreatorsLanding";
import UsersLanding from "@/pages/UsersLanding";
import Explore from "@/pages/Explore";
import Event from "@/pages/Event";
import FAQ from "@/pages/FAQ";
import Terms from "@/pages/Terms";
import Privacy from "@/pages/Privacy";
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
import { CheckInInterface } from "@/components/check-in/CheckInInterface";
import { CartProvider } from "@/contexts/CartContext";
import { useAuthState } from "@/hooks/use-auth-state";
import { Navigate } from "react-router-dom";

// Wrapper component to handle navbar visibility and protected routes
const AppContent = () => {
  const location = useLocation();
  const { user, loading } = useAuthState();
  const isEventPage = location.pathname.startsWith('/event/');
  const isCheckInPage = location.pathname.includes('/check-in');

  // Protected route wrapper
  const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    if (loading) return null; // Or a loading spinner
    if (!user) return <Navigate to="/" />;
    return <>{children}</>;
  };

  return (
    <div className="min-h-screen bg-eden-dark text-white flex flex-col">
      {!isEventPage && !isCheckInPage && <Navbar />}
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/creators" element={<CreatorsLanding />} />
          <Route path="/users" element={<UsersLanding />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/event/:id" element={<Event />} />
          <Route path="/event/:id/check-in" element={<CheckInInterface />} />
          
          {/* Protected Routes */}
          <Route path="/profile" element={
            <ProtectedRoute>
              <UserProfile />
            </ProtectedRoute>
          } />
          
          {/* Protected Dashboard Routes */}
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <CreatorDashboard />
            </ProtectedRoute>
          } />
          <Route path="/dashboard/events" element={
            <ProtectedRoute>
              <EventsManagement />
            </ProtectedRoute>
          } />
          <Route path="/dashboard/events/create" element={
            <ProtectedRoute>
              <CreateEvent />
            </ProtectedRoute>
          } />
          <Route path="/dashboard/events/:id/edit" element={
            <ProtectedRoute>
              <EditEvent />
            </ProtectedRoute>
          } />
          <Route path="/dashboard/events/:id/sales" element={
            <ProtectedRoute>
              <EventSales />
            </ProtectedRoute>
          } />
          <Route path="/dashboard/audience" element={
            <ProtectedRoute>
              <AudienceInsights />
            </ProtectedRoute>
          } />
          <Route path="/dashboard/resale" element={
            <ProtectedRoute>
              <ResaleActivity />
            </ProtectedRoute>
          } />
          <Route path="/dashboard/promotions" element={
            <ProtectedRoute>
              <Promotions />
            </ProtectedRoute>
          } />
          <Route path="/dashboard/team" element={
            <ProtectedRoute>
              <TeamManagement />
            </ProtectedRoute>
          } />
          <Route path="/dashboard/payouts" element={
            <ProtectedRoute>
              <Payouts />
            </ProtectedRoute>
          } />
          <Route path="/dashboard/settings" element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          } />
          
          {/* Checkout Routes */}
          <Route path="/checkout/success" element={<CheckoutSuccess />} />
          <Route path="/checkout/failure" element={<CheckoutFailure />} />
        </Routes>
      </div>
      {!isCheckInPage && <Footer />}
      <AuthModal />
      <Toaster />
    </div>
  );
};

function App() {
  return (
    <Router>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </Router>
  );
}

export default App;
