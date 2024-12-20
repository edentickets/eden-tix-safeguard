import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { EmailCampaignsList } from "@/components/dashboard/email/EmailCampaignsList";
import CreateCampaign from "@/pages/dashboard/CreateCampaign";
import { Landing } from "@/pages/Landing"; // Make sure this import exists

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
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