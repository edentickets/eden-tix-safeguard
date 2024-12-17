import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { EventGrid } from "@/components/explore/EventGrid";
import { 
  User, 
  Calendar,
  Users, 
  Instagram, 
  Facebook, 
  Twitter,
  MapPin,
  Star
} from "lucide-react";
import { motion } from "framer-motion";

const CreatorProfile = () => {
  // Placeholder data - would come from API in production
  const creator = {
    name: "Rolling Loud",
    tagline: "We Create Unforgettable Moments",
    category: "Music Festivals & Concerts",
    location: "Miami, FL",
    followers: "125K",
    rating: 4.8,
    reviewCount: 1250,
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

  // Placeholder events data
  const events = [
    {
      id: "1",
      title: "Rolling Loud Miami 2024",
      date: "July 23-25, 2024",
      location: "Hard Rock Stadium, Miami Gardens",
      imageUrl: "/placeholder.svg",
      price: 349,
      availableTickets: 2500,
      rating: 4.9,
      reviews: 856,
      description: "The world's largest hip-hop festival returns to Miami"
    },
    {
      id: "2",
      title: "Rolling Loud California 2024",
      date: "March 15-17, 2024",
      location: "Hollywood Park Grounds",
      imageUrl: "/placeholder.svg",
      price: 329,
      availableTickets: 1800,
      rating: 4.8,
      reviews: 654,
      description: "Three days of non-stop hip-hop in Los Angeles"
    },
    {
      id: "3",
      title: "Rolling Loud New York 2024",
      date: "September 20-22, 2024",
      location: "Citi Field, Queens",
      imageUrl: "/placeholder.svg",
      price: 359,
      availableTickets: 2000,
      rating: 4.7,
      reviews: 423,
      description: "The biggest hip-hop festival comes to the Big Apple"
    }
  ];

  return (
    <div className="min-h-screen bg-eden-dark">
      {/* Hero Section */}
      <div className="relative h-[300px] lg:h-[400px]">
        <div 
          className="absolute inset-0 bg-gradient-secondary/30"
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
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Avatar className="w-24 h-24 border-4 border-eden-dark ring-2 ring-eden-primary/20">
                <AvatarImage src={creator.avatar} alt={creator.name} />
                <AvatarFallback>
                  <User className="w-12 h-12" />
                </AvatarFallback>
              </Avatar>
            </motion.div>
            
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
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {creator.location}
                </span>
                <span className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  {creator.followers} followers
                </span>
                <span className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-eden-secondary" />
                  {creator.rating} ({creator.reviewCount} reviews)
                </span>
              </div>
            </div>

            <Button className="bg-gradient-secondary">
              Follow
            </Button>
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

          {/* Events Section */}
          <div className="mt-12">
            <EventGrid 
              title="Upcoming Events" 
              events={events}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorProfile;