import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Plus, Send, Edit2, Trash2 } from "lucide-react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useQuery } from "@tanstack/react-query";

interface EmailCampaign {
  id: string;
  subject: string;
  status: string;
  sent_at: string | null;
  recipient_count: number;
  open_count: number;
  click_count: number;
}

export const EmailCampaignsList = () => {
  const { toast } = useToast();
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);

  const { data: campaigns, isLoading } = useQuery({
    queryKey: ['emailCampaigns', selectedEventId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('email_campaigns')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data as EmailCampaign[];
    }
  });

  const handleCreateCampaign = () => {
    toast({
      title: "Coming Soon",
      description: "Email campaign creation will be available soon!",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-white">Email Campaigns</h2>
          <p className="text-gray-400">Manage your event email campaigns</p>
        </div>
        <Button onClick={handleCreateCampaign} className="bg-eden-primary hover:bg-eden-primary/90">
          <Plus className="w-4 h-4 mr-2" />
          Create Campaign
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {isLoading ? (
          Array.from({ length: 3 }).map((_, i) => (
            <Card key={i} className="p-6 bg-eden-light/10 animate-pulse">
              <div className="h-20" />
            </Card>
          ))
        ) : campaigns?.length === 0 ? (
          <Card className="col-span-full p-8 bg-eden-light/10 border border-eden-light/20">
            <div className="text-center">
              <Mail className="w-12 h-12 mx-auto text-gray-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">No Email Campaigns Yet</h3>
              <p className="text-gray-400 mb-4">
                Create your first email campaign to engage with your attendees
              </p>
              <Button onClick={handleCreateCampaign} variant="outline">
                Create Your First Campaign
              </Button>
            </div>
          </Card>
        ) : (
          campaigns?.map((campaign) => (
            <motion.div
              key={campaign.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="p-6 bg-eden-light/10 border border-eden-light/20">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-semibold text-white">{campaign.subject}</h3>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon">
                      <Edit2 className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Status</span>
                    <span className={`${
                      campaign.status === 'sent' ? 'text-green-400' : 'text-yellow-400'
                    }`}>
                      {campaign.status.charAt(0).toUpperCase() + campaign.status.slice(1)}
                    </span>
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Recipients</span>
                    <span className="text-white">{campaign.recipient_count}</span>
                  </div>
                  
                  {campaign.status === 'sent' && (
                    <>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Opens</span>
                        <span className="text-white">{campaign.open_count}</span>
                      </div>
                      
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Clicks</span>
                        <span className="text-white">{campaign.click_count}</span>
                      </div>
                    </>
                  )}
                </div>

                {campaign.status === 'draft' && (
                  <Button className="w-full mt-4" onClick={() => {}}>
                    <Send className="w-4 h-4 mr-2" />
                    Send Campaign
                  </Button>
                )}
              </Card>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
};