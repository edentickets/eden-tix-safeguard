import { Event } from "@/types/event";
import { Card } from "@/components/ui/card";

interface EventHighlightsProps {
  event: Event;
}

export const EventHighlights = ({ event }: EventHighlightsProps) => {
  if (!event.highlights?.length) {
    return null;
  }

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Event Highlights</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {event.highlights.map((highlight, index) => (
          <Card 
            key={index} 
            className="p-6 bg-eden-light/10 backdrop-blur-sm border-eden-light/20 hover:bg-eden-light/20 transition-colors"
          >
            <div className="flex gap-4">
              <span className="text-4xl">{highlight.icon}</span>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white">{highlight.title}</h3>
                <p className="text-gray-300">{highlight.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};