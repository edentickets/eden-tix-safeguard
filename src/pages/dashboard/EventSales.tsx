import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { BarChart2, DollarSign, Ticket, TrendingUp } from "lucide-react";

export default function EventSales() {
  const navigate = useNavigate();
  const { id } = useParams();

  // Placeholder data - in a real app, this would come from your backend
  const salesData = {
    totalRevenue: 25000,
    ticketsSold: 500,
    averagePrice: 50,
    growth: 28
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => navigate("/dashboard/events")}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-white">Event Sales</h1>
            <p className="text-gray-400 mt-1">Track your event's performance and revenue</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="p-6 bg-eden-light/10">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-eden-primary/10">
                <DollarSign className="w-6 h-6 text-eden-primary" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Total Revenue</p>
                <p className="text-2xl font-bold text-white">${salesData.totalRevenue.toLocaleString()}</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-eden-light/10">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-eden-primary/10">
                <Ticket className="w-6 h-6 text-eden-primary" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Tickets Sold</p>
                <p className="text-2xl font-bold text-white">{salesData.ticketsSold}</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-eden-light/10">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-eden-primary/10">
                <BarChart2 className="w-6 h-6 text-eden-primary" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Average Price</p>
                <p className="text-2xl font-bold text-white">${salesData.averagePrice}</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-eden-light/10">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-eden-primary/10">
                <TrendingUp className="w-6 h-6 text-eden-primary" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Growth</p>
                <p className="text-2xl font-bold text-white">+{salesData.growth}%</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Add more sales data visualizations here */}
      </div>
    </DashboardLayout>
  );
}