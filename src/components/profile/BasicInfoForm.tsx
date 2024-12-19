import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

interface BasicInfoFormProps {
  username: string;
  fullName: string;
  isCreator: boolean;
  onUsernameChange: (value: string) => void;
  onFullNameChange: (value: string) => void;
  onIsCreatorChange: (checked: boolean) => void;
}

export const BasicInfoForm = ({
  username,
  fullName,
  isCreator,
  onUsernameChange,
  onFullNameChange,
  onIsCreatorChange,
}: BasicInfoFormProps) => {
  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="full_name">Full Name</Label>
        <Input
          id="full_name"
          value={fullName}
          onChange={(e) => onFullNameChange(e.target.value)}
          className="bg-white/5 border-white/10"
        />
      </div>

      <div>
        <Label htmlFor="username">Username</Label>
        <Input
          id="username"
          value={username}
          onChange={(e) => onUsernameChange(e.target.value)}
          className="bg-white/5 border-white/10"
        />
      </div>

      <div className="flex items-center space-x-2">
        <Switch
          id="is_creator"
          checked={isCreator}
          onCheckedChange={onIsCreatorChange}
        />
        <Label htmlFor="is_creator">I want to create events</Label>
      </div>
    </div>
  );
};