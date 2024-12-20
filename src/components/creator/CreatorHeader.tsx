import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { User, MapPin, Users, Star } from "lucide-react";
import { motion } from "framer-motion";

interface CreatorHeaderProps {
  creator: {
    name: string;
    tagline: string;
    location: string;
    followers: string;
    rating: number;
    reviewCount: number;
    verified: boolean;
    avatar: string;
  };
}

export const CreatorHeader = ({ creator }: CreatorHeaderProps) => {
  return (
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
  );
};