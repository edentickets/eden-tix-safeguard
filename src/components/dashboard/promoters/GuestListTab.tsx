import { GuestList } from "@/types/guest-list";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatDate } from "@/utils/date-utils";
import { motion } from "framer-motion";
import { CheckCircle, Clock, UserPlus, Users } from "lucide-react";

interface GuestListTabProps {
  guestLists: GuestList[];
  isLoading?: boolean;
}

export function GuestListTab({ guestLists, isLoading }: GuestListTabProps) {
  if (isLoading) {
    return <div>Loading guest lists...</div>;
  }

  return (
    <div className="space-y-6">
      {guestLists.map((guestList) => (
        <motion.div
          key={guestList.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="p-6 bg-eden-light/10">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-eden-primary/20">
                  <Users className="w-6 h-6 text-white/80" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    Guest List #{guestList.id.slice(0, 8)}
                  </h3>
                  <p className="text-sm text-gray-400">
                    Max Guests: {guestList.max_guests}
                  </p>
                </div>
              </div>
              <Button className="bg-eden-primary hover:bg-eden-primary/90">
                <UserPlus className="w-4 h-4 mr-2" />
                Add Guest
              </Button>
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Guest Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Added On</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {guestList.entries?.map((entry) => (
                  <TableRow key={entry.id}>
                    <TableCell className="text-white">
                      {entry.guest_name}
                    </TableCell>
                    <TableCell className="text-gray-400">
                      {entry.guest_email}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        {entry.status === "checked_in" ? (
                          <CheckCircle className="w-4 h-4 text-green-500" />
                        ) : (
                          <Clock className="w-4 h-4 text-yellow-500" />
                        )}
                        <span
                          className={
                            entry.status === "checked_in"
                              ? "text-green-500"
                              : "text-yellow-500"
                          }
                        >
                          {entry.status}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="text-gray-400">
                      {formatDate(entry.created_at || "")}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}