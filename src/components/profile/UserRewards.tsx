import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Gift } from "lucide-react";

interface UserRewardsProps {
  points: number;
}

export const UserRewards = ({ points }: UserRewardsProps) => {
  return (
    <Card className="p-6 bg-eden-light/30 backdrop-blur-sm border-eden-light/10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-white">Eden Rewards</h2>
        <Button variant="outline" className="gap-2">
          <Gift className="w-4 h-4" />
          Redeem Points
        </Button>
      </div>
      
      <div className="flex items-center gap-4 p-4 bg-eden-primary/10 rounded-lg mb-6">
        <Award className="w-12 h-12 text-eden-primary" />
        <div>
          <p className="text-sm text-gray-400">Available Points</p>
          <p className="text-2xl font-bold text-white">{points}</p>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white">How to Earn Points</h3>
        <ul className="space-y-2 text-gray-300">
          <li>• Purchase tickets (100 points per ticket)</li>
          <li>• Attend events (50 points per check-in)</li>
          <li>• Refer friends (200 points per referral)</li>
          <li>• Write event reviews (25 points per review)</li>
        </ul>
      </div>
    </Card>
  );
};