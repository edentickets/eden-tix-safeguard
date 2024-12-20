import { Clock } from "lucide-react";
import { format } from "date-fns";

interface EventDateTimeProps {
  startDate: string;
  endDate: string;
}

export const EventDateTime = ({ startDate, endDate }: EventDateTimeProps) => {
  const formatDateTime = (date: string) => {
    return format(new Date(date), "MMM d, yyyy 'at' h:mm a");
  };

  return (
    <div className="flex items-center gap-2 hover:text-eden-primary transition-colors">
      <Clock className="w-5 h-5" />
      <span>{formatDateTime(startDate)} - {formatDateTime(endDate)}</span>
    </div>
  );
};