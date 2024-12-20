import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Facebook, Twitter, Linkedin, Share2, Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

interface EventSocialShareProps {
  event: {
    id: string;
    title: string;
    description?: string;
    location: string;
    start_date: string;
  };
}

export const EventSocialShare = ({ event }: EventSocialShareProps) => {
  const { toast } = useToast();
  const baseUrl = window.location.origin;
  const eventUrl = `${baseUrl}/event/${event.id}`;
  
  const shareText = `Check out ${event.title} at ${event.location} on ${new Date(event.start_date).toLocaleDateString()}!`;
  
  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(eventUrl)}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(eventUrl)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(eventUrl)}`
  };

  const handleShare = async (platform: string) => {
    if (platform === 'copy') {
      try {
        await navigator.clipboard.writeText(eventUrl);
        toast({
          title: "Link copied!",
          description: "The event link has been copied to your clipboard.",
        });
      } catch (err) {
        toast({
          title: "Failed to copy",
          description: "Please try copying the link manually.",
          variant: "destructive",
        });
      }
      return;
    }

    const shareUrl = shareLinks[platform as keyof typeof shareLinks];
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  return (
    <Card className="p-6 bg-eden-light/5 backdrop-blur-sm border-eden-light/10">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Share2 className="w-5 h-5" />
          <h3 className="text-lg font-semibold">Share this event</h3>
        </div>
        
        <p className="text-sm text-gray-400">
          Help spread the word and share this event with your network
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              className="w-full bg-[#1877F2]/10 hover:bg-[#1877F2]/20 border-[#1877F2]/20"
              onClick={() => handleShare('facebook')}
            >
              <Facebook className="w-4 h-4 mr-2" />
              Facebook
            </Button>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              className="w-full bg-[#1DA1F2]/10 hover:bg-[#1DA1F2]/20 border-[#1DA1F2]/20"
              onClick={() => handleShare('twitter')}
            >
              <Twitter className="w-4 h-4 mr-2" />
              Twitter
            </Button>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              className="w-full bg-[#0A66C2]/10 hover:bg-[#0A66C2]/20 border-[#0A66C2]/20"
              onClick={() => handleShare('linkedin')}
            >
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </Button>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              className="w-full"
              onClick={() => handleShare('copy')}
            >
              <Copy className="w-4 h-4 mr-2" />
              Copy Link
            </Button>
          </motion.div>
        </div>
      </div>
    </Card>
  );
};