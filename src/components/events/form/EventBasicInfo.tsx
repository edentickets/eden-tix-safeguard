import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface EventBasicInfoProps {
  title: string;
  setTitle: (value: string) => void;
  description: string;
  setDescription: (value: string) => void;
  location: string;
  setLocation: (value: string) => void;
}

export const EventBasicInfo = ({
  title,
  setTitle,
  description,
  setDescription,
  location,
  setLocation,
}: EventBasicInfoProps) => {
  return (
    <>
      <div className="space-y-2">
        <label htmlFor="title" className="text-sm font-medium text-white">
          Event Title
        </label>
        <Input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          placeholder="Enter event title"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="description" className="text-sm font-medium text-white">
          Description
        </label>
        <Textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Describe your event"
          className="min-h-[100px]"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="location" className="text-sm font-medium text-white">
          Location
        </label>
        <Input
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
          placeholder="Event location"
        />
      </div>
    </>
  );
};