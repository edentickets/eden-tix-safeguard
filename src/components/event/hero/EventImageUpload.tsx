import { ImagePlus } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface EventImageUploadProps {
  event: {
    id: string;
    creator_id: string;
    promo_banner_url?: string;
  };
  isCreator: boolean;
}

export const EventImageUpload = ({ event, isCreator }: EventImageUploadProps) => {
  const { toast } = useToast();
  const [uploading, setUploading] = useState(false);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      if (!isCreator) {
        toast({
          title: "Authentication required",
          description: "Only the event creator can upload images",
          variant: "destructive",
        });
        return;
      }

      const file = e.target.files?.[0];
      if (!file) return;

      setUploading(true);
      const fileExt = file.name.split('.').pop();
      const fileName = `${crypto.randomUUID()}.${fileExt}`;
      const filePath = `${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('events')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('events')
        .getPublicUrl(filePath);

      const { error: updateError } = await supabase
        .from('events')
        .update({ promo_banner_url: publicUrl })
        .eq('id', event.id);

      if (updateError) throw updateError;

      toast({
        title: "Image uploaded successfully",
        description: "Your event image has been updated.",
      });

      window.location.reload();
    } catch (error: any) {
      toast({
        title: "Error uploading image",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="relative w-80 h-80 rounded-lg overflow-hidden shadow-xl bg-eden-light/5 border border-eden-light/10">
      {event.promo_banner_url ? (
        <img 
          src={event.promo_banner_url} 
          alt="Event Promo Banner"
          className="w-full h-full object-cover"
        />
      ) : (
        isCreator && (
          <label 
            htmlFor="promo-banner-upload" 
            className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer hover:bg-eden-light/10 transition-colors"
          >
            <ImagePlus className="w-12 h-12 text-eden-light/40" />
            <span className="mt-2 text-eden-light/40">Upload Image</span>
            <input
              id="promo-banner-upload"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              disabled={uploading}
              className="hidden"
            />
          </label>
        )
      )}
      {isCreator && event.promo_banner_url && (
        <label 
          htmlFor="promo-banner-upload" 
          className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer bg-black/60 opacity-0 hover:opacity-100 transition-opacity"
        >
          <ImagePlus className="w-12 h-12 text-white/80" />
          <span className="mt-2 text-white/80">Change Image</span>
          <input
            id="promo-banner-upload"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            disabled={uploading}
            className="hidden"
          />
        </label>
      )}
    </div>
  );
};