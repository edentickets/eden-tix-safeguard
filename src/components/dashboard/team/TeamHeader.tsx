import { Button } from "@/components/ui/button";
import { UserPlus } from "lucide-react";

export function TeamHeader() {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Team Management</h1>
        <p className="text-gray-400">
          Manage your promoters and their permissions
        </p>
      </div>
      <Button className="bg-eden-primary hover:bg-eden-primary/90">
        <UserPlus className="w-4 h-4 mr-2" />
        Add Promoter
      </Button>
    </div>
  );
}