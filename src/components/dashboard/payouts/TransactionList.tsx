import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, RefreshCcw } from "lucide-react";
import { motion } from "framer-motion";

interface Transaction {
  id: number;
  amount: number;
  status: string;
  date: string;
  type: string;
  reference: string;
}

interface TransactionListProps {
  transactions: Transaction[];
}

export function TransactionList({ transactions }: TransactionListProps) {
  return (
    <div className="space-y-4">
      {transactions.map((transaction) => (
        <motion.div
          key={transaction.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Card className="p-6 bg-eden-light/10">
            <div className="flex flex-col md:flex-row justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold text-white">
                    ${transaction.amount.toLocaleString()}
                  </h3>
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      transaction.status === "Completed"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-yellow-500/20 text-yellow-400"
                    }`}
                  >
                    {transaction.status}
                  </span>
                </div>
                <p className="text-sm text-gray-400 mt-1">
                  {transaction.type} • Ref: {transaction.reference}
                </p>
                <p className="text-sm text-gray-400 mt-1">
                  <Clock className="w-4 h-4 inline mr-1" />
                  {new Date(transaction.date).toLocaleDateString()}
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