import { Clock } from "lucide-react";
import { format } from "date-fns";

interface EventDateTimeProps {
  startDate: string;
  endDate: string;
}

export const EventDateTime = ({ startDate, endDate }: EventDateTimeProps) => {
  const formatDate = (date: string) => {
    return format(new Date(date), "MMMM d, yyyy");
  };

  const formatTime = (date: string) => {
    return format(new Date(date), "h:mm a");
  };

  return (
    <div className="flex flex-col gap-1 hover:text-eden-primary transition-colors">
      <div className="flex items-center gap-2">
        <Clock className="w-5 h-5" />
        <span>{formatDate(startDate)}</span>
      </div>
      <div className="ml-7 text-sm opacity-80">
        {formatTime(startDate)} - {formatTime(endDate)}
      </div>
    </div>
  );
};