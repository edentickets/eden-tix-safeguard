import { Event } from "@/types/event";

interface EventHighlightsProps {
  event: Event;
}

export const EventHighlights = ({ event }: EventHighlightsProps) => {
  if (!event.highlights) {
    return null;
  }

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-900 mb-8">
          What to Expect at {event.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {event.highlights.map((highlight, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <span className="text-4xl">{highlight.icon}</span>
              <h3 className="text-xl font-semibold text-gray-900 mt-4">{highlight.title}</h3>
              <p className="text-gray-600 mt-2">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};