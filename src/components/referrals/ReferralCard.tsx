import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Gift, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { useAuthState } from "@/hooks/use-auth-state";
import { supabase } from "@/integrations/supabase/client";

export function ReferralCard() {
  const { user } = useAuthState();
  const { toast } = useToast();

  const copyReferralLink = async () => {
    if (!user) return;
    
    const referralLink = `${window.location.origin}/signup?ref=${user.id}`;
    await navigator.clipboard.writeText(referralLink);
    
    toast({
      title: "Referral link copied!",
      description: "Share this link with your friends to earn rewards.",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="p-6 bg-gradient-to-br from-eden-light/20 to-eden-dark/40 border border-white/5">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 rounded-full bg-eden-primary/20">
            <Gift className="w-6 h-6 text-eden-primary" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Refer Friends</h3>
            <p className="text-sm text-gray-400">Earn rewards for every friend who joins</p>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 rounded-lg bg-white/5">
            <div className="flex items-center gap-3">
              <Users className="w-5 h-5 text-eden-secondary" />
              <span className="text-sm text-white">Share your referral link</span>
            </div>
            <Button 
              variant="secondary" 
              size="sm"
              onClick={copyReferralLink}
              className="bg-eden-primary/20 hover:bg-eden-primary/30"
            >
              Copy Link
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}