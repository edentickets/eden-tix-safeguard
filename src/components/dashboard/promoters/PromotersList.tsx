import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Promoter } from "@/types/promoter";
import { motion } from "framer-motion";
import { DollarSign, Users, Percent, MoreVertical } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface PromotersListProps {
  promoters: Promoter[];
  isLoading?: boolean;
}

export function PromotersList({ promoters, isLoading }: PromotersListProps) {
  if (isLoading) {
    return <div>Loading promoters...</div>;
  }

  return (
    <div className="space-y-4">
      {promoters.map((promoter, index) => (
        <motion.div
          key={promoter.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className="p-6 bg-eden-light/10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={promoter.profile?.avatar_url} />
                  <AvatarFallback>
                    {promoter.profile?.full_name?.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {promoter.profile?.full_name}
                  </h3>
                  <p className="text-sm text-gray-400">
                    @{promoter.profile?.username}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-8">
                <div className="flex items-center gap-8">
                  <div className="text-center">
                    <div className="text-sm text-gray-400">Commission Rate</div>
                    <div className="text-lg font-semibold text-white flex items-center justify-center">
                      <Percent className="w-4 h-4 mr-1" />
                      {promoter.commission_rate}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-400">Total Sales</div>
                    <div className="text-lg font-semibold text-white flex items-center justify-center">
                      <DollarSign className="w-4 h-4" />
                      0
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-400">Guest List</div>
                    <div className="text-lg font-semibold text-white flex items-center justify-center">
                      <Users className="w-4 h-4 mr-1" />
                      0
                    </div>
                  </div>
                </div>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      View Details
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      Edit Commission
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-red-400">
                      Remove Promoter
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}