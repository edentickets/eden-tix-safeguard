import { MapPin } from "lucide-react";

interface EventLocationProps {
  location: string;
}

export const EventLocation = ({ location }: EventLocationProps) => {
  // Split location into parts and format them
  const parts = location.split(',').map(part => part.trim());
  
  return (
    <div className="flex items-start gap-2 hover:text-eden-primary transition-colors">
      <MapPin className="w-5 h-5 mt-0.5" />
      <address className="not-italic flex flex-col">
        {parts.map((part, index) => (
          <span 
            key={index} 
            className={`block ${index === parts.length - 1 ? 'text-sm opacity-80' : ''}`}
          >
            {part}
          </span>
        ))}
      </address>
    </div>
  );
};