import { Card } from "@/components/ui/card";
import { Ticket, Users, Award, Bell } from "lucide-react";

interface UserStatsProps {
  stats: {
    ticketsPurchased: number;
    ticketsResold: number;
    rewardsPoints: number;
    followingCount: number;
  };
}

export const UserStats = ({ stats }: UserStatsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <Card className="p-4 bg-eden-light/30 backdrop-blur-sm border-eden-light/10">
        <div className="flex items-center gap-3">
          <Ticket className="h-8 w-8 text-eden-accent" />
          <div>
            <p className="text-sm text-gray-400">Tickets Purchased</p>
            <p className="text-xl font-bold text-white">{stats.ticketsPurchased}</p>
          </div>
        </div>
      </Card>
      <Card className="p-4 bg-eden-light/30 backdrop-blur-sm border-eden-light/10">
        <div className="flex items-center gap-3">
          <Users className="h-8 w-8 text-eden-secondary" />
          <div>
            <p className="text-sm text-gray-400">Following</p>
            <p className="text-xl font-bold text-white">{stats.followingCount}</p>
          </div>
        </div>
      </Card>
      <Card className="p-4 bg-eden-light/30 backdrop-blur-sm border-eden-light/10">
        <div className="flex items-center gap-3">
          <Award className="h-8 w-8 text-eden-primary" />
          <div>
            <p className="text-sm text-gray-400">Reward Points</p>
            <p className="text-xl font-bold text-white">{stats.rewardsPoints}</p>
          </div>
        </div>
      </Card>
      <Card className="p-4 bg-eden-light/30 backdrop-blur-sm border-eden-light/10">
        <div className="flex items-center gap-3">
          <Bell className="h-8 w-8 text-eden-accent" />
          <div>
            <p className="text-sm text-gray-400">Notifications</p>
            <p className="text-xl font-bold text-white">3 New</p>
          </div>
        </div>
      </Card>
    </div>
  );
};