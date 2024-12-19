import { Outlet } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import Background3D from "@/components/Background3D";

export const MainLayout = () => {
  return (
    <div className="min-h-screen bg-eden-dark">
      <Background3D />
      <Navbar />
      <Suspense 
        fallback={
          <div className="flex items-center justify-center min-h-[calc(100vh-4rem)]">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-eden-primary" />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </div>
  );
};