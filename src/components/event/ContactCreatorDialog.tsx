import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface ContactCreatorDialogProps {
  creatorId: string;
  eventTitle: string;
  organizer: string;
}

export const ContactCreatorDialog = ({ creatorId, eventTitle, organizer }: ContactCreatorDialogProps) => {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async () => {
    if (!message.trim()) {
      toast({
        title: "Error",
        description: "Please enter a message",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      const { error } = await supabase.from("messages").insert({
        to_user_id: creatorId,
        event_title: eventTitle,
        message: message.trim(),
      });

      if (error) throw error;

      toast({
        title: "Message sent",
        description: `Your message has been sent to ${organizer}`,
      });
      setMessage("");
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="lg"
          variant="outline"
          className="border-[var(--event-primary,#D4AF37)] text-[var(--event-primary,#D4AF37)] hover:bg-[var(--event-primary,#D4AF37)]/10"
        >
          <Mail className="w-4 h-4 mr-2" />
          Contact {organizer}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-eden-dark border-eden-light/10">
        <DialogHeader>
          <DialogTitle className="text-white">Contact {organizer}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Textarea
            placeholder={`Write your message to ${organizer} about ${eventTitle}...`}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="min-h-[120px] bg-eden-light/5 border-eden-light/10 text-white"
          />
          <Button 
            onClick={handleSubmit} 
            disabled={isLoading}
            className="bg-[var(--event-primary,#D4AF37)] hover:bg-[var(--event-primary,#D4AF37)]/90"
          >
            {isLoading ? "Sending..." : "Send Message"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};