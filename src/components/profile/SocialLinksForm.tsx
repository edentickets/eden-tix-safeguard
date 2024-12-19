import { Input } from "@/components/ui/input";
import { Instagram, Facebook, Twitter } from "lucide-react";

interface SocialLinksFormProps {
  socialLinks: {
    instagram: string;
    facebook: string;
    twitter: string;
  };
  onChange: (links: { instagram: string; facebook: string; twitter: string }) => void;
}

export const SocialLinksForm = ({ socialLinks, onChange }: SocialLinksFormProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Social Media Links</h3>
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <Instagram className="w-5 h-5 text-gray-400" />
          <Input
            placeholder="Instagram profile URL"
            value={socialLinks.instagram}
            onChange={(e) => onChange({
              ...socialLinks,
              instagram: e.target.value
            })}
            className="bg-white/5 border-white/10"
          />
        </div>
        <div className="flex items-center gap-3">
          <Facebook className="w-5 h-5 text-gray-400" />
          <Input
            placeholder="Facebook profile URL"
            value={socialLinks.facebook}
            onChange={(e) => onChange({
              ...socialLinks,
              facebook: e.target.value
            })}
            className="bg-white/5 border-white/10"
          />
        </div>
        <div className="flex items-center gap-3">
          <Twitter className="w-5 h-5 text-gray-400" />
          <Input
            placeholder="Twitter profile URL"
            value={socialLinks.twitter}
            onChange={(e) => onChange({
              ...socialLinks,
              twitter: e.target.value
            })}
            className="bg-white/5 border-white/10"
          />
        </div>
      </div>
    </div>
  );
};