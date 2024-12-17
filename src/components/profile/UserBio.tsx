import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Instagram, Facebook, Twitter } from "lucide-react";

interface UserBioProps {
  bio: string;
  followedCreators: Array<{
    id: string;
    name: string;
    image: string;
    isFollowing: boolean;
  }>;
}

export const UserBio = ({ bio, followedCreators }: UserBioProps) => {
  return (
    <Card className="p-6 bg-eden-light/30 backdrop-blur-sm border-eden-light/10">
      <h2 className="text-xl font-semibold text-white mb-3">About Me</h2>
      <p className="text-gray-300 mb-6">{bio}</p>
      
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white">Following</h3>
        <div className="flex flex-wrap gap-4">
          {followedCreators.map((creator) => (
            <div key={creator.id} className="flex items-center gap-3">
              <Avatar className="w-10 h-10">
                <AvatarImage src={creator.image} alt={creator.name} />
                <AvatarFallback>{creator.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium text-white">{creator.name}</p>
                <Button variant="link" className="text-eden-accent p-0 h-auto text-sm">
                  Following
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-eden-light/10">
        <div className="flex gap-4">
          <a 
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a 
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a 
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Twitter className="w-5 h-5" />
          </a>
        </div>
      </div>
    </Card>
  );
};