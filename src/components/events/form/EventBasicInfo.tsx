import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FormItem, FormLabel, FormControl, FormMessage, FormField } from "@/components/ui/form";
import { UseFormReturn } from "react-hook-form";
import { EventFormValues } from "./eventFormSchema";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ImagePlus } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface EventBasicInfoProps {
  form: UseFormReturn<EventFormValues>;
}

export const EventBasicInfo = ({ form }: EventBasicInfoProps) => {
  const [uploading, setUploading] = useState(false);
  const { toast } = useToast();

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setUploading(true);
      const file = event.target.files?.[0];
      if (!file) return;

      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('events')
        .upload(filePath, file);

      if (uploadError) {
        throw uploadError;
      }

      const { data: { publicUrl } } = supabase.storage
        .from('events')
        .getPublicUrl(filePath);

      form.setValue('imageUrl', publicUrl);
      
      toast({
        title: "Image uploaded successfully",
        description: "Your event image has been uploaded.",
      });
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
    <div className="space-y-6">
      <FormField
        control={form.control}
        name="title"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Event Title</FormLabel>
            <FormControl>
              <Input
                {...field}
                placeholder="Enter event title"
                className="bg-eden-light/10"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="description"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Description</FormLabel>
            <FormControl>
              <Textarea
                {...field}
                placeholder="Describe your event"
                className="min-h-[100px] bg-eden-light/10"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="location"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Location</FormLabel>
            <FormControl>
              <Input
                {...field}
                placeholder="Event location"
                className="bg-eden-light/10"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="imageUrl"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Event Image</FormLabel>
            <FormControl>
              <div className="space-y-4">
                <Input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  disabled={uploading}
                  className="hidden"
                  id="event-image"
                />
                <Label
                  htmlFor="event-image"
                  className="flex items-center justify-center w-full h-32 border-2 border-dashed border-eden-light/20 rounded-lg hover:border-eden-light/40 transition-colors cursor-pointer"
                >
                  {field.value ? (
                    <img
                      src={field.value}
                      alt="Event preview"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  ) : (
                    <div className="flex flex-col items-center gap-2 text-gray-400">
                      <ImagePlus className="w-8 h-8" />
                      <span>Upload event image</span>
                    </div>
                  )}
                </Label>
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};