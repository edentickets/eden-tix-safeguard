import { useState } from "react";
import { useProfile } from "@/hooks/use-profile";
import { useProfileMutation } from "@/hooks/use-profile-mutation";
import { useAuthState } from "@/hooks/use-auth-state";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import { AvatarUpload } from "./AvatarUpload";
import { SocialLinksForm } from "./SocialLinksForm";
import { CreatorInfoForm } from "./CreatorInfoForm";

interface SocialLinks {
  instagram: string;
  facebook: string;
  twitter: string;
}

export const ProfileForm = () => {
  const { user } = useAuthState();
  const { data: profile, isLoading } = useProfile(user);
  const { mutate: updateProfile, isPending } = useProfileMutation();

  const defaultSocialLinks: SocialLinks = {
    instagram: "",
    facebook: "",
    twitter: ""
  };

  // Convert profile social_links from Record<string, string> to SocialLinks
  const initialSocialLinks: SocialLinks = profile?.social_links ? {
    instagram: profile.social_links.instagram || "",
    facebook: profile.social_links.facebook || "",
    twitter: profile.social_links.twitter || ""
  } : defaultSocialLinks;

  const [formData, setFormData] = useState({
    username: profile?.username || "",
    full_name: profile?.full_name || "",
    is_creator: profile?.is_creator || false,
    creator_bio: profile?.creator_bio || "",
    creator_tagline: profile?.creator_tagline || "",
    avatar_url: profile?.avatar_url || "",
    social_links: initialSocialLinks
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Convert SocialLinks back to Record<string, string> for the mutation
    const socialLinksRecord: Record<string, string> = {
      instagram: formData.social_links.instagram,
      facebook: formData.social_links.facebook,
      twitter: formData.social_links.twitter
    };
    
    updateProfile({
      ...formData,
      social_links: socialLinksRecord
    });
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-8">
        <Loader2 className="h-8 w-8 animate-spin text-eden-primary" />
      </div>
    );
  }

  return (
    <Card className="p-6 bg-eden-light/30 backdrop-blur-sm border-eden-light/10">
      <form onSubmit={handleSubmit} className="space-y-6">
        <AvatarUpload
          userId={user?.id || ''}
          currentAvatarUrl={formData.avatar_url}
          fullName={formData.full_name}
          onAvatarUpdate={(url) => setFormData(prev => ({ ...prev, avatar_url: url }))}
        />

        <div className="space-y-4">
          <div>
            <Label htmlFor="full_name">Full Name</Label>
            <Input
              id="full_name"
              value={formData.full_name}
              onChange={(e) => setFormData(prev => ({ ...prev, full_name: e.target.value }))}
              className="bg-white/5 border-white/10"
            />
          </div>

          <div>
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              value={formData.username}
              onChange={(e) => setFormData(prev => ({ ...prev, username: e.target.value }))}
              className="bg-white/5 border-white/10"
            />
          </div>

          <div className="flex items-center space-x-2">
            <Switch
              id="is_creator"
              checked={formData.is_creator}
              onCheckedChange={(checked) => setFormData(prev => ({ ...prev, is_creator: checked }))}
            />
            <Label htmlFor="is_creator">I want to create events</Label>
          </div>

          {formData.is_creator && (
            <CreatorInfoForm
              tagline={formData.creator_tagline}
              bio={formData.creator_bio}
              onTaglineChange={(value) => setFormData(prev => ({ ...prev, creator_tagline: value }))}
              onBioChange={(value) => setFormData(prev => ({ ...prev, creator_bio: value }))}
            />
          )}

          <SocialLinksForm
            socialLinks={formData.social_links}
            onChange={(links) => setFormData(prev => ({ ...prev, social_links: links }))}
          />
        </div>

        <Button 
          type="submit" 
          className="w-full"
          disabled={isPending}
        >
          {isPending ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Saving...
            </>
          ) : (
            'Save Changes'
          )}
        </Button>
      </form>
    </Card>
  );
};