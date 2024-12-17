import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { EventGrid } from "@/components/explore/EventGrid";
import { Edit2, Ticket, Users, Award, Bell } from "lucide-react";

// Mock user data
const userData = {
  username: "music_lover_99",
  displayName: "Alex Thompson",
  membershipStatus: "VIP Member",
  avatar: "/placeholder.svg",
  banner: "/placeholder.svg",
  stats: {
    ticketsPurchased: 24,
    ticketsResold: 8,
    rewardsPoints: 2500,
    followingCount: 12
  },
  bio: "Passionate about music festivals and live events. Always looking for the next big show! 🎵✨",
  followedCreators: [
    {
      id: "1",
      name: "Rolling Loud",
      image: "/placeholder.svg",
      isFollowing: true
    },
    // Add more creators as needed
  ]
};

// Mock upcoming events data
const upcomingEvents = [
  {
    id: "1",
    title: "Rolling Loud Miami 2025",
    date: "July 19-21, 2025",
    location: "Hard Rock Stadium, Miami",
    imageUrl: "/placeholder.svg",
    price: 299,
    availableTickets: 2500,
    rating: 4.9,
    reviews: 856,
    description: "The world's largest hip-hop festival returns to Miami",
    organizer: "Rolling Loud",
    highlights: [
      {
        icon: "music",
        title: "Live Performances",
        description: "Over 100 artists across 3 days"
      },
      {
        icon: "star",
        title: "VIP Experience",
        description: "Exclusive backstage access"
      },
      {
        icon: "food",
        title: "Food & Drinks",
        description: "Curated selection of cuisine"
      }
    ]
  }
];

export default function UserProfile() {
  return (
    <div className="min-h-screen bg-eden-dark">
      {/* Hero Section */}
      <div className="relative h-64 bg-gradient-to-r from-eden-primary/20 to-eden-secondary/20">
        <div className="absolute inset-0 backdrop-blur-sm"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-eden-dark to-transparent">
          <div className="max-w-7xl mx-auto flex items-end gap-6">
            <Avatar className="w-24 h-24 border-4 border-eden-dark">
              <AvatarImage src={userData.avatar} alt={userData.username} />
              <AvatarFallback>AT</AvatarFallback>
            </Avatar>
            <div className="flex-1 mb-2">
              <div className="flex items-center gap-3">
                <h1 className="text-2xl font-bold text-white">{userData.displayName}</h1>
                <Badge variant="secondary" className="bg-eden-accent/20 text-eden-accent">
                  {userData.membershipStatus}
                </Badge>
              </div>
              <p className="text-gray-400">@{userData.username}</p>
            </div>
            <Button variant="outline" className="mb-2">
              <Edit2 className="mr-2 h-4 w-4" />
              Edit Profile
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="p-4 bg-eden-light/30 backdrop-blur-sm border-eden-light/10">
            <div className="flex items-center gap-3">
              <Ticket className="h-8 w-8 text-eden-accent" />
              <div>
                <p className="text-sm text-gray-400">Tickets Purchased</p>
                <p className="text-xl font-bold text-white">{userData.stats.ticketsPurchased}</p>
              </div>
            </div>
          </Card>
          <Card className="p-4 bg-eden-light/30 backdrop-blur-sm border-eden-light/10">
            <div className="flex items-center gap-3">
              <Users className="h-8 w-8 text-eden-secondary" />
              <div>
                <p className="text-sm text-gray-400">Following</p>
                <p className="text-xl font-bold text-white">{userData.stats.followingCount}</p>
              </div>
            </div>
          </Card>
          <Card className="p-4 bg-eden-light/30 backdrop-blur-sm border-eden-light/10">
            <div className="flex items-center gap-3">
              <Award className="h-8 w-8 text-eden-primary" />
              <div>
                <p className="text-sm text-gray-400">Reward Points</p>
                <p className="text-xl font-bold text-white">{userData.stats.rewardsPoints}</p>
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

        {/* Bio Section */}
        <Card className="p-6 bg-eden-light/30 backdrop-blur-sm border-eden-light/10">
          <h2 className="text-xl font-semibold text-white mb-3">About Me</h2>
          <p className="text-gray-300">{userData.bio}</p>
        </Card>

        {/* Upcoming Events Section */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">My Upcoming Events</h2>
          <EventGrid title="" events={upcomingEvents} />
        </div>
      </div>
    </div>
  );
}