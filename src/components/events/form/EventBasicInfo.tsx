import { UseFormReturn } from "react-hook-form";
import { EventFormValues } from "./eventFormSchema";
import { EventTitleInput } from "./basic-info/EventTitleInput";
import { EventDescriptionInput } from "./basic-info/EventDescriptionInput";
import { EventLocationInput } from "./basic-info/EventLocationInput";
import { EventImageUpload } from "./image-upload/EventImageUpload";

interface EventBasicInfoProps {
  form: UseFormReturn<EventFormValues>;
}

export const EventBasicInfo = ({ form }: EventBasicInfoProps) => {
  return (
    <div className="space-y-6">
      <EventTitleInput form={form} />
      <EventDescriptionInput form={form} />
      <EventLocationInput form={form} />
      <EventImageUpload form={form} />
    </div>
  );
};