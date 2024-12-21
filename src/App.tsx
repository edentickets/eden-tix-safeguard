import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { EmailCampaignsList } from "@/components/dashboard/email/EmailCampaignsList";
import CreateCampaign from "@/pages/dashboard/CreateCampaign";
import Landing from "@/pages/Landing";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Explore from "@/pages/Explore";
import CreatorsLanding from "@/pages/CreatorsLanding";
import UsersLanding from "@/pages/UsersLanding";
import UserProfile from "@/pages/UserProfile";
import FAQ from "@/pages/FAQ";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import EventDetails from "@/pages/EventDetails";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/explore",
        element: <Explore />,
      },
      {
        path: "/creators",
        element: <CreatorsLanding />,
      },
      {
        path: "/users",
        element: <UsersLanding />,
      },
      {
        path: "/profile",
        element: <UserProfile />,
      },
      {
        path: "/faq",
        element: <FAQ />,
      },
      {
        path: "/privacy",
        element: <Privacy />,
      },
      {
        path: "/terms",
        element: <Terms />,
      },
      {
        path: "/event/:id",
        element: <EventDetails />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <DashboardLayout>
        <Outlet />
      </DashboardLayout>
    ),
    children: [
      {
        path: "email-campaigns",
        element: <EmailCampaignsList />,
      },
      {
        path: "create-campaign",
        element: <CreateCampaign />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;