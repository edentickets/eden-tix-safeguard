import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { motion } from "framer-motion";
import {
  Users,
  UserPlus,
  Mail,
  Shield,
  Clock,
  CheckCircle,
} from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Event Manager",
    email: "sarah.j@example.com",
    status: "Active",
    joinDate: "2024-01-15",
    permissions: ["events.edit", "analytics.view"],
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Marketing Coordinator",
    email: "michael.c@example.com",
    status: "Active",
    joinDate: "2024-02-01",
    permissions: ["promotions.edit", "analytics.view"],
  },
];

export default function TeamManagement() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Team Management</h1>
            <p className="text-gray-400">
              Manage your team members and their permissions
            </p>
          </div>
          <Button className="bg-eden-primary hover:bg-eden-primary/90">
            <UserPlus className="w-4 h-4 mr-2" />
            Invite Team Member
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard
            title="Total Team Members"
            value="8"
            trend="+2 this month"
            icon={<Users className="h-8 w-8" />}
            trendUp={true}
          />
          <MetricCard
            title="Active Now"
            value="5"
            trend="62.5% of team"
            icon={<CheckCircle className="h-8 w-8" />}
            trendUp={true}
          />
          <MetricCard
            title="Pending Invites"
            value="2"
            trend="Last sent 2h ago"
            icon={<Mail className="h-8 w-8" />}
            trendUp={false}
          />
          <MetricCard
            title="Access Levels"
            value="4"
            trend="Updated recently"
            icon={<Shield className="h-8 w-8" />}
            trendUp={true}
          />
        </div>

        <Tabs defaultValue="members" className="space-y-6">
          <TabsList className="bg-eden-light/20">
            <TabsTrigger value="members">Team Members</TabsTrigger>
            <TabsTrigger value="roles">Roles & Permissions</TabsTrigger>
            <TabsTrigger value="activity">Activity Log</TabsTrigger>
          </TabsList>

          <TabsContent value="members" className="space-y-4">
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Card className="p-6 bg-eden-light/10">
                  <div className="flex flex-col md:flex-row justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {member.name}
                      </h3>
                      <p className="text-sm text-gray-400">{member.email}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="px-2 py-1 rounded-full text-xs bg-green-500/20 text-green-400">
                          {member.status}
                        </span>
                        <span className="text-sm text-gray-400">
                          <Clock className="w-4 h-4 inline mr-1" />
                          Joined {new Date(member.joinDate).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        Edit Role
                      </Button>
                      <Button variant="outline" size="sm">
                        Manage Access
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </TabsContent>

          <TabsContent value="roles">
            <Card className="p-6 bg-eden-light/10">
              <h3 className="text-xl font-semibold text-white mb-4">
                Role Management
              </h3>
              <p className="text-gray-400">
                Define and manage team roles and their associated permissions.
              </p>
            </Card>
          </TabsContent>

          <TabsContent value="activity">
            <Card className="p-6 bg-eden-light/10">
              <h3 className="text-xl font-semibold text-white mb-4">
                Activity Log
              </h3>
              <p className="text-gray-400">
                Track team member actions and system changes.
              </p>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}