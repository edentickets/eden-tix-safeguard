import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface CreatorInfoFormProps {
  tagline: string;
  bio: string;
  onTaglineChange: (value: string) => void;
  onBioChange: (value: string) => void;
}

export const CreatorInfoForm = ({ tagline, bio, onTaglineChange, onBioChange }: CreatorInfoFormProps) => {
  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="creator_tagline">Tagline</Label>
        <Input
          id="creator_tagline"
          value={tagline}
          onChange={(e) => onTaglineChange(e.target.value)}
          className="bg-white/5 border-white/10"
          placeholder="Your catchy tagline as an event creator"
        />
      </div>

      <div>
        <Label htmlFor="creator_bio">Bio</Label>
        <Textarea
          id="creator_bio"
          value={bio}
          onChange={(e) => onBioChange(e.target.value)}
          className="bg-white/5 border-white/10"
          placeholder="Tell us about yourself and your events"
          rows={4}
        />
      </div>
    </div>
  );
};