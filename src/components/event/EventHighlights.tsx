import { Event } from "@/types/event";

interface EventHighlightsProps {
  event: Event;
}

export const EventHighlights = ({ event }: EventHighlightsProps) => {
  if (!event.highlights) {
    return null;
  }

  return (
    <section className="py-16 px-4 bg-eden-light/10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8">
          What to Expect at {event.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {event.highlights.map((highlight, index) => (
            <div key={index} className="glass-card p-6 space-y-4">
              <span className="text-4xl">{highlight.icon}</span>
              <h3 className="text-xl font-bold text-white">{highlight.title}</h3>
              <p className="text-gray-300">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};