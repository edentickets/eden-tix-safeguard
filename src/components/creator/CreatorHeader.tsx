import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { VerificationBadge } from "@/components/profile/VerificationBadge";
import { formatDate } from "@/utils/date-utils";

interface CreatorHeaderProps {
  creator: {
    id: string;
    full_name: string;
    avatar_url?: string;
    creator_tagline?: string;
    is_verified?: boolean;
    verification_date?: string;
  };
}

export function CreatorHeader({ creator }: CreatorHeaderProps) {
  return (
    <div className="flex items-center gap-4 p-6">
      <Avatar className="h-20 w-20">
        <AvatarImage src={creator.avatar_url} alt={creator.full_name} />
        <AvatarFallback>{creator.full_name.charAt(0)}</AvatarFallback>
      </Avatar>
      
      <div>
        <div className="flex items-center gap-2">
          <h2 className="text-2xl font-semibold text-white">
            {creator.full_name}
          </h2>
          {creator.is_verified && (
            <VerificationBadge className="h-5 w-5" />
          )}
        </div>
        
        {creator.creator_tagline && (
          <p className="text-gray-400 mt-1">{creator.creator_tagline}</p>
        )}
        
        {creator.is_verified && creator.verification_date && (
          <p className="text-sm text-eden-secondary mt-2">
            Verified since {formatDate(creator.verification_date)}
          </p>
        )}
      </div>
    </div>
  );
}