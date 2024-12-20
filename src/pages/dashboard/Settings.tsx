import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { motion } from "framer-motion";
import {
  Settings as SettingsIcon,
  Bell,
  Lock,
  Globe,
  Palette,
  Save,
} from "lucide-react";

export default function Settings() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex items-center">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Settings</h1>
            <p className="text-gray-400">
              Manage your account and application preferences
            </p>
          </div>
        </div>

        <Tabs defaultValue="general" className="space-y-6">
          <TabsList className="bg-eden-light/20">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="appearance">Appearance</TabsTrigger>
          </TabsList>

          <TabsContent value="general">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Card className="p-6 bg-eden-light/10">
                <form className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-white">
                      Organization Details
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="orgName">Organization Name</Label>
                        <Input
                          id="orgName"
                          placeholder="Enter organization name"
                          className="bg-eden-dark/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="website">Website</Label>
                        <Input
                          id="website"
                          placeholder="https://"
                          className="bg-eden-dark/50"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="timezone">Timezone</Label>
                      <Input
                        id="timezone"
                        placeholder="Select timezone"
                        className="bg-eden-dark/50"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-white">
                      Contact Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="supportEmail">Support Email</Label>
                        <Input
                          id="supportEmail"
                          type="email"
                          placeholder="support@example.com"
                          className="bg-eden-dark/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          placeholder="Enter phone number"
                          className="bg-eden-dark/50"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button className="bg-eden-primary hover:bg-eden-primary/90">
                      <Save className="w-4 h-4 mr-2" />
                      Save Changes
                    </Button>
                  </div>
                </form>
              </Card>
            </motion.div>
          </TabsContent>

          <TabsContent value="notifications">
            <Card className="p-6 bg-eden-light/10">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-white">
                  Notification Preferences
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Email Notifications</Label>
                      <p className="text-sm text-gray-400">
                        Receive updates about your events
                      </p>
                    </div>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Marketing Updates</Label>
                      <p className="text-sm text-gray-400">
                        Receive marketing and promotional emails
                      </p>
                    </div>
                    <Switch />
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="security">
            <Card className="p-6 bg-eden-light/10">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-white">
                  Security Settings
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Two-Factor Authentication</Label>
                      <p className="text-sm text-gray-400">
                        Add an extra layer of security
                      </p>
                    </div>
                    <Button variant="outline">Enable 2FA</Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Session Management</Label>
                      <p className="text-sm text-gray-400">
                        Manage your active sessions
                      </p>
                    </div>
                    <Button variant="outline">View Sessions</Button>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="appearance">
            <Card className="p-6 bg-eden-light/10">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-white">
                  Appearance Settings
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Dark Mode</Label>
                      <p className="text-sm text-gray-400">
                        Toggle dark mode appearance
                      </p>
                    </div>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Compact Mode</Label>
                      <p className="text-sm text-gray-400">
                        Show more content in less space
                      </p>
                    </div>
                    <Switch />
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}