import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { 
  User, 
  Calendar, 
  DollarSign, 
  Users, 
  Instagram, 
  Facebook, 
  Twitter 
} from "lucide-react";
import { motion } from "framer-motion";

const CreatorProfile = () => {
  // Placeholder data - would come from API in production
  const creator = {
    name: "Rolling Loud",
    tagline: "We Create Unforgettable Moments",
    category: "Music Festivals & Concerts",
    followers: "125K",
    verified: true,
    bio: "Since 2015, we've been curating the biggest hip-hop festivals worldwide. Join us for an unforgettable experience with the hottest artists in the game.",
    avatar: "/placeholder.svg",
    banner: "/placeholder.svg",
    socialLinks: {
      instagram: "https://instagram.com/rollingloud",
      facebook: "https://facebook.com/rollingloud",
      twitter: "https://twitter.com/rollingloud"
    }
  };

  return (
    <div className="min-h-screen bg-eden-dark">
      {/* Hero Section */}
      <div className="relative h-[300px] lg:h-[400px]">
        <div 
          className="absolute inset-0 bg-gradient-to-b from-eden-light/10 to-eden-dark"
          style={{
            backgroundImage: `url(${creator.banner})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-eden-dark via-eden-dark/80 to-transparent" />
      </div>

      {/* Profile Content */}
      <div className="container relative -mt-32 z-10">
        <div className="space-y-8">
          {/* Profile Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <Avatar className="w-24 h-24 border-4 border-eden-dark">
              <AvatarImage src={creator.avatar} alt={creator.name} />
              <AvatarFallback>
                <User className="w-12 h-12" />
              </AvatarFallback>
            </Avatar>
            
            <div className="flex-1 space-y-2">
              <div className="flex items-center gap-3">
                <h1 className="text-3xl font-bold text-white">{creator.name}</h1>
                {creator.verified && (
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="bg-eden-primary/20 p-1 rounded-full"
                  >
                    <div className="w-5 h-5 rounded-full bg-eden-primary/90" />
                  </motion.div>
                )}
              </div>
              <p className="text-gray-400">{creator.tagline}</p>
              <p className="text-sm text-gray-500">{creator.category}</p>
            </div>

            <div className="flex gap-3">
              <Button variant="outline" className="gap-2">
                <Users className="w-4 h-4" />
                {creator.followers} Followers
              </Button>
              <Button>Edit Profile</Button>
            </div>
          </div>

          {/* Bio Section */}
          <Card className="p-6 bg-eden-light/5 backdrop-blur-sm border-white/5">
            <p className="text-gray-300">{creator.bio}</p>
            <div className="mt-4 flex gap-4">
              {Object.entries(creator.socialLinks).map(([platform, url]) => (
                <a 
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {platform === 'instagram' && <Instagram className="w-5 h-5" />}
                  {platform === 'facebook' && <Facebook className="w-5 h-5" />}
                  {platform === 'twitter' && <Twitter className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </Card>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <MetricCard
              title="Total Revenue"
              value="$1.2M"
              trend="+12% from last month"
              trendUp={true}
              icon={<DollarSign />}
            />
            <MetricCard
              title="Upcoming Events"
              value="5"
              trend="Next event in 3 days"
              icon={<Calendar />}
            />
            <MetricCard
              title="Total Attendees"
              value="45.2K"
              trend="+8% growth"
              trendUp={true}
              icon={<Users />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorProfile;