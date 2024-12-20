import { Button } from "@/components/ui/button";
import { Clock, MapPin, User, Star, ImagePlus } from "lucide-react";
import { Event, formatEventDate } from "@/types/event";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useSession } from "@supabase/auth-helpers-react";

interface EventHeroProps {
  event: Event;
}

export const EventHero = ({ event }: EventHeroProps) => {
  const { toast } = useToast();
  const session = useSession();
  const [uploading, setUploading] = useState(false);

  const handleAlert = () => {
    toast({
      title: "Alert Set!",
      description: "We'll notify you about price changes.",
    });
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      if (!session?.user) {
        toast({
          title: "Authentication required",
          description: "Please sign in to upload images",
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

      if (uploadError) {
        throw uploadError;
      }

      const { data: { publicUrl } } = supabase.storage
        .from('events')
        .getPublicUrl(filePath);

      // Update the event with the new promo banner URL
      const { error: updateError } = await supabase
        .from('events')
        .update({ promo_banner_url: publicUrl })
        .eq('id', event.id);

      if (updateError) throw updateError;

      toast({
        title: "Image uploaded successfully",
        description: "Your event image has been updated.",
      });

      // Refresh the page to show the new image
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
    <div className="relative h-[60vh] w-full">
      <div className="absolute inset-0 bg-gradient-to-br from-eden-primary/5 to-transparent opacity-20 backdrop-blur-xl" />
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="absolute inset-0 flex flex-col justify-end p-8 max-w-7xl mx-auto"
      >
        <div className="flex items-end gap-8">
          <div className="space-y-4 flex-1">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-4xl md:text-6xl font-bold text-white"
            >
              {event.title}
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-wrap gap-6 text-gray-200"
            >
              <div className="flex items-center gap-2 hover:text-eden-primary transition-colors">
                <Clock className="w-5 h-5" />
                {formatEventDate(event.start_date, event.end_date)}
              </div>
              <div className="flex items-center gap-2 hover:text-eden-primary transition-colors">
                <MapPin className="w-5 h-5" />
                {event.location}
              </div>
              {event.description && (
                <div className="flex items-center gap-2 hover:text-eden-primary transition-colors w-full">
                  <User className="w-5 h-5" />
                  {event.description}
                </div>
              )}
              {event.organizer && (
                <div className="flex items-center gap-2 hover:text-eden-primary transition-colors">
                  <User className="w-5 h-5" />
                  {event.organizer}
                </div>
              )}
            </motion.div>
            {event.rating && event.reviews && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="flex items-center gap-2 text-yellow-400"
              >
                <Star className="w-5 h-5 fill-current" />
                <span>{event.rating}/5</span>
                <span className="text-gray-300">({event.reviews} reviews)</span>
              </motion.div>
            )}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="flex gap-4 mt-6"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-eden-primary text-eden-primary hover:bg-eden-primary/10"
                onClick={handleAlert}
              >
                Set Price Alerts
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="hidden md:block"
          >
            <div className="relative w-64 h-64 rounded-lg overflow-hidden shadow-xl bg-eden-light/5 border border-eden-light/10">
              {event.promo_banner_url ? (
                <img 
                  src={event.promo_banner_url} 
                  alt="Event Promo Banner"
                  className="w-full h-full object-cover"
                />
              ) : (
                session?.user?.id === event.creator_id && (
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
              {session?.user?.id === event.creator_id && event.promo_banner_url && (
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
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};