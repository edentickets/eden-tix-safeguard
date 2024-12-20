import { BadgeCheck } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface VerificationBadgeProps {
  className?: string;
}

export function VerificationBadge({ className }: VerificationBadgeProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <BadgeCheck className={`text-eden-primary ${className}`} />
        </TooltipTrigger>
        <TooltipContent>
          <p>Verified Event Organizer</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}