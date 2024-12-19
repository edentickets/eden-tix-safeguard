import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "@/hooks/use-auth-state";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { UserStats } from "@/components/profile/UserStats";
import { UserBio } from "@/components/profile/UserBio";
import { UserTickets } from "@/components/profile/UserTickets";
import { UserRewards } from "@/components/profile/UserRewards";
import { ProfileForm } from "@/components/profile/ProfileForm";
import { Edit2 } from "lucide-react";
import { useProfile } from "@/hooks/use-profile";

export default function UserProfile() {
  const navigate = useNavigate();
  const { user } = useAuthState();
  const { data: profile } = useProfile(user);

  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, [user, navigate]);

  if (!user || !profile) {
    return null;
  }

  return (
    <div className="min-h-screen bg-eden-dark">
      {/* Hero Section */}
      <div className="relative h-64 bg-gradient-to-r from-eden-primary/20 to-eden-secondary/20">
        <div className="absolute inset-0 backdrop-blur-sm"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-eden-dark to-transparent">
          <div className="max-w-7xl mx-auto flex items-end gap-6">
            <Avatar className="w-24 h-24 border-4 border-eden-dark">
              <AvatarImage src={profile.avatar_url || undefined} alt={profile.username} />
              <AvatarFallback>{profile.full_name?.[0] || user.email?.[0]}</AvatarFallback>
            </Avatar>
            <div className="flex-1 mb-2">
              <div className="flex items-center gap-3">
                <h1 className="text-2xl font-bold text-white">{profile.full_name || 'Anonymous'}</h1>
                {profile.is_creator && (
                  <Badge variant="secondary" className="bg-eden-accent/20 text-eden-accent">
                    Event Creator
                  </Badge>
                )}
              </div>
              <p className="text-gray-400">@{profile.username || 'anonymous'}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        {/* Profile Form */}
        <ProfileForm />

        {/* Stats Section */}
        <UserStats stats={{
          ticketsPurchased: 0,
          ticketsResold: 0,
          rewardsPoints: 0,
          followingCount: 0
        }} />

        {/* Tickets Section */}
        <UserTickets />

        {/* Rewards Section */}
        <UserRewards points={0} />
      </div>
    </div>
  );
};