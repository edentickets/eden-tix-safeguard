import { useState, useCallback } from "react";
import { useProfile } from "@/hooks/use-profile";
import { useProfileMutation } from "@/hooks/use-profile-mutation";
import { useAuthState } from "@/hooks/use-auth-state";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Loader2, Upload } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export const ProfileForm = () => {
  const { user } = useAuthState();
  const { data: profile, isLoading } = useProfile(user);
  const { mutate: updateProfile, isPending } = useProfileMutation();
  const { toast } = useToast();
  const [uploadingAvatar, setUploadingAvatar] = useState(false);

  const [formData, setFormData] = useState({
    username: profile?.username || "",
    full_name: profile?.full_name || "",
    is_creator: profile?.is_creator || false,
    creator_bio: profile?.creator_bio || "",
    creator_tagline: profile?.creator_tagline || "",
    avatar_url: profile?.avatar_url || "",
  });

  const handleAvatarUpload = useCallback(async (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      if (!event.target.files || !event.target.files[0]) return;
      
      const file = event.target.files[0];
      const fileExt = file.name.split('.').pop();
      const fileName = `${user?.id}/${Date.now()}.${fileExt}`;
      
      setUploadingAvatar(true);
      
      const { error: uploadError, data } = await supabase.storage
        .from('avatars')
        .upload(fileName, file, { upsert: true });

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('avatars')
        .getPublicUrl(fileName);

      setFormData(prev => ({ ...prev, avatar_url: publicUrl }));
      updateProfile({ ...formData, avatar_url: publicUrl });
      
      toast({
        title: "Avatar updated",
        description: "Your profile picture has been updated successfully.",
      });
    } catch (error) {
      toast({
        title: "Error uploading avatar",
        description: "There was an error uploading your profile picture. Please try again.",
        variant: "destructive",
      });
    } finally {
      setUploadingAvatar(false);
    }
  }, [user, formData, updateProfile, toast]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile(formData);
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
        <div className="flex flex-col items-center mb-6">
          <Avatar className="w-24 h-24 mb-4">
            <AvatarImage src={formData.avatar_url || undefined} alt={formData.full_name} />
            <AvatarFallback>{formData.full_name?.[0]}</AvatarFallback>
          </Avatar>
          <div className="flex items-center gap-2">
            <Input
              type="file"
              accept="image/*"
              onChange={handleAvatarUpload}
              className="hidden"
              id="avatar-upload"
              disabled={uploadingAvatar}
            />
            <Label
              htmlFor="avatar-upload"
              className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 rounded-md bg-eden-accent/20 text-eden-accent hover:bg-eden-accent/30 transition-colors"
            >
              {uploadingAvatar ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Upload className="h-4 w-4" />
              )}
              Upload Photo
            </Label>
          </div>
        </div>

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
            <>
              <div>
                <Label htmlFor="creator_tagline">Tagline</Label>
                <Input
                  id="creator_tagline"
                  value={formData.creator_tagline}
                  onChange={(e) => setFormData(prev => ({ ...prev, creator_tagline: e.target.value }))}
                  className="bg-white/5 border-white/10"
                  placeholder="Your catchy tagline as an event creator"
                />
              </div>

              <div>
                <Label htmlFor="creator_bio">Bio</Label>
                <Textarea
                  id="creator_bio"
                  value={formData.creator_bio}
                  onChange={(e) => setFormData(prev => ({ ...prev, creator_bio: e.target.value }))}
                  className="bg-white/5 border-white/10"
                  placeholder="Tell us about yourself and your events"
                  rows={4}
                />
              </div>
            </>
          )}
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