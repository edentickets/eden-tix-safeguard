import { Card } from "@/components/ui/card";
import { Instagram, Facebook, Twitter } from "lucide-react";

interface CreatorBioProps {
  bio: string;
  socialLinks: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
  };
}

export const CreatorBio = ({ bio, socialLinks }: CreatorBioProps) => {
  return (
    <Card className="p-6 bg-eden-light/5 backdrop-blur-sm border-white/5">
      <p className="text-gray-300">{bio}</p>
      <div className="mt-4 flex gap-4">
        {Object.entries(socialLinks).map(([platform, url]) => (
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
  );
};