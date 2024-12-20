import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Send } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useSession } from "@supabase/auth-helpers-react";
import { useNavigate } from "react-router-dom";

interface CreateCampaignFormValues {
  subject: string;
  content: string;
}

export function CreateCampaignForm() {
  const { toast } = useToast();
  const session = useSession();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<CreateCampaignFormValues>({
    defaultValues: {
      subject: "",
      content: "",
    },
  });

  const onSubmit = async (data: CreateCampaignFormValues) => {
    if (!session?.user) {
      toast({
        title: "Authentication required",
        description: "Please sign in to create a campaign",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("email_campaigns").insert({
        creator_id: session.user.id,
        subject: data.subject,
        content: data.content,
        status: "draft",
      });

      if (error) throw error;

      toast({
        title: "Campaign created",
        description: "Your email campaign has been saved as a draft.",
      });

      navigate("/dashboard/email-campaigns");
    } catch (error: any) {
      toast({
        title: "Error creating campaign",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="p-6 bg-eden-light/10 border border-eden-light/20">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <Mail className="w-6 h-6" />
          Create New Campaign
        </h2>
        <p className="text-gray-400">
          Compose your email campaign and save it as a draft
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Subject Line</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your email subject"
                    {...field}
                    className="bg-eden-dark/50"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Content</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Write your email content here..."
                    className="min-h-[200px] bg-eden-dark/50"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-end">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-eden-primary hover:bg-eden-primary/90"
            >
              <Send className="w-4 h-4 mr-2" />
              {isSubmitting ? "Creating..." : "Save as Draft"}
            </Button>
          </div>
        </form>
      </Form>
    </Card>
  );
}