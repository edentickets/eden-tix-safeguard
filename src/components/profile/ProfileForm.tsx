import { useState } from "react";
import { useProfile } from "@/hooks/use-profile";
import { useProfileMutation } from "@/hooks/use-profile-mutation";
import { useAuthState } from "@/hooks/use-auth-state";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import { AvatarUpload } from "./AvatarUpload";
import { SocialLinksForm } from "./SocialLinksForm";
import { CreatorInfoForm } from "./CreatorInfoForm";
import { BasicInfoForm } from "./BasicInfoForm";

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

        <BasicInfoForm
          username={formData.username}
          fullName={formData.full_name}
          isCreator={formData.is_creator}
          onUsernameChange={(value) => setFormData(prev => ({ ...prev, username: value }))}
          onFullNameChange={(value) => setFormData(prev => ({ ...prev, full_name: value }))}
          onIsCreatorChange={(checked) => setFormData(prev => ({ ...prev, is_creator: checked }))}
        />

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