import { MapPin } from "lucide-react";

interface EventLocationProps {
  location: string;
}

export const EventLocation = ({ location }: EventLocationProps) => {
  return (
    <div className="flex items-center gap-2 hover:text-eden-primary transition-colors">
      <MapPin className="w-5 h-5" />
      <address className="not-italic">
        {location.split(',').map((part, index) => (
          <span key={index} className="block">{part.trim()}</span>
        ))}
      </address>
    </div>
  );
};