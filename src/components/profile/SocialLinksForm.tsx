import { Input } from "@/components/ui/input";
import { Instagram, Facebook, Twitter } from "lucide-react";

interface SocialLinks {
  instagram: string;
  facebook: string;
  twitter: string;
}

interface SocialLinksFormProps {
  socialLinks: Partial<SocialLinks>;
  onChange: (links: SocialLinks) => void;
}

export const SocialLinksForm = ({ socialLinks, onChange }: SocialLinksFormProps) => {
  const currentLinks: SocialLinks = {
    instagram: socialLinks.instagram || '',
    facebook: socialLinks.facebook || '',
    twitter: socialLinks.twitter || ''
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Social Media Links</h3>
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <Instagram className="w-5 h-5 text-gray-400" />
          <Input
            placeholder="Instagram profile URL"
            value={currentLinks.instagram}
            onChange={(e) => onChange({
              ...currentLinks,
              instagram: e.target.value
            })}
            className="bg-white/5 border-white/10"
          />
        </div>
        <div className="flex items-center gap-3">
          <Facebook className="w-5 h-5 text-gray-400" />
          <Input
            placeholder="Facebook profile URL"
            value={currentLinks.facebook}
            onChange={(e) => onChange({
              ...currentLinks,
              facebook: e.target.value
            })}
            className="bg-white/5 border-white/10"
          />
        </div>
        <div className="flex items-center gap-3">
          <Twitter className="w-5 h-5 text-gray-400" />
          <Input
            placeholder="Twitter profile URL"
            value={currentLinks.twitter}
            onChange={(e) => onChange({
              ...currentLinks,
              twitter: e.target.value
            })}
            className="bg-white/5 border-white/10"
          />
        </div>
      </div>
    </div>
  );
};