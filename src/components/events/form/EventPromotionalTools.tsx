import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Share2, Facebook, Twitter, Linkedin, Link } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const EventPromotionalTools = () => {
  const { toast } = useToast();

  const handleShare = (platform: string) => {
    // In a real implementation, this would generate actual sharing links
    toast({
      title: "Share Link Generated",
      description: `Your event link for ${platform} has been copied to clipboard.`,
    });
  };

  return (
    <Card className="p-6 mt-6 bg-eden-light/5 border-eden-light/10">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Share2 className="w-5 h-5" />
          <h3 className="text-lg font-semibold">Promotional Tools</h3>
        </div>
        
        <p className="text-sm text-gray-400">
          Share your event across different platforms to reach more people
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Button
            variant="outline"
            className="w-full"
            onClick={() => handleShare("Facebook")}
          >
            <Facebook className="w-4 h-4 mr-2" />
            Facebook
          </Button>
          
          <Button
            variant="outline"
            className="w-full"
            onClick={() => handleShare("Twitter")}
          >
            <Twitter className="w-4 h-4 mr-2" />
            Twitter
          </Button>
          
          <Button
            variant="outline"
            className="w-full"
            onClick={() => handleShare("LinkedIn")}
          >
            <Linkedin className="w-4 h-4 mr-2" />
            LinkedIn
          </Button>
          
          <Button
            variant="outline"
            className="w-full"
            onClick={() => handleShare("Direct")}
          >
            <Link className="w-4 h-4 mr-2" />
            Copy Link
          </Button>
        </div>
      </div>
    </Card>
  );
};