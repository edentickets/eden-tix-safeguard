import { useState, useCallback } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, Upload } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface AvatarUploadProps {
  userId: string;
  currentAvatarUrl: string | null;
  fullName: string;
  onAvatarUpdate: (url: string) => void;
}

export const AvatarUpload = ({ userId, currentAvatarUrl, fullName, onAvatarUpdate }: AvatarUploadProps) => {
  const [uploadingAvatar, setUploadingAvatar] = useState(false);
  const { toast } = useToast();

  const handleAvatarUpload = useCallback(async (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      if (!event.target.files || !event.target.files[0]) return;
      
      const file = event.target.files[0];
      const fileExt = file.name.split('.').pop();
      const fileName = `${userId}/${Date.now()}.${fileExt}`;
      
      setUploadingAvatar(true);
      
      const { error: uploadError, data } = await supabase.storage
        .from('avatars')
        .upload(fileName, file, { upsert: true });

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('avatars')
        .getPublicUrl(fileName);

      onAvatarUpdate(publicUrl);
      
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
  }, [userId, onAvatarUpdate, toast]);

  return (
    <div className="flex flex-col items-center mb-6">
      <Avatar className="w-24 h-24 mb-4">
        <AvatarImage src={currentAvatarUrl || undefined} alt={fullName} />
        <AvatarFallback>{fullName?.[0]}</AvatarFallback>
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
  );
};