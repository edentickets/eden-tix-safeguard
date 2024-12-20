import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, RefreshCcw } from "lucide-react";
import { motion } from "framer-motion";
import { usePromoterPayouts, PromoterPayout } from "@/hooks/use-promoter-payouts";
import { useAuthState } from "@/hooks/use-auth-state";
import { usePromoter } from "@/hooks/use-promoters";

export function TransactionList() {
  const { user } = useAuthState();
  const { data: promoter } = usePromoter(user?.id);
  const { data: payouts, isLoading } = usePromoterPayouts(promoter?.id);

  if (isLoading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="p-6 bg-eden-light/10">
            <div className="h-20 animate-pulse bg-eden-light/20 rounded-lg" />
          </Card>
        ))}
      </div>
    );
  }

  if (!payouts?.length) {
    return (
      <Card className="p-6 bg-eden-light/10">
        <div className="text-center text-gray-400">
          <p>No transactions found</p>
        </div>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      {payouts.map((payout) => (
        <motion.div
          key={payout.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Card className="p-6 bg-eden-light/10">
            <div className="flex flex-col md:flex-row justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold text-white">
                    ${payout.amount.toLocaleString()}
                  </h3>
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      payout.status === "completed"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-yellow-500/20 text-yellow-400"
                    }`}
                  >
                    {payout.status.charAt(0).toUpperCase() + payout.status.slice(1)}
                  </span>
                </div>
                <p className="text-sm text-gray-400 mt-1">
                  {payout.payout_method || "Bank Transfer"} • ID: {payout.id.slice(0, 8)}
                </p>
                <p className="text-sm text-gray-400 mt-1">
                  <Clock className="w-4 h-4 inline mr-1" />
                  {new Date(payout.created_at!).toLocaleDateString()}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <RefreshCcw className="w-4 h-4 mr-2" />
                  View Details
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}