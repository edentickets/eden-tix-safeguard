import { EventGrid } from "@/components/explore/EventGrid";
import { CreatorHeader } from "@/components/creator/CreatorHeader";
import { CreatorBio } from "@/components/creator/CreatorBio";
import { mockCreator, mockEvents } from "@/data/mockCreatorData";

const CreatorProfile = () => {
  return (
    <div className="min-h-screen bg-eden-dark">
      <CreatorHeader creator={mockCreator} />
      <CreatorBio 
        bio={mockCreator.bio} 
        socialLinks={mockCreator.socialLinks} 
      />
      
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">Upcoming Events</h2>
          <EventGrid 
            title="Upcoming Events" 
            events={mockEvents} 
          />
        </div>
      </section>
    </div>
  );
};

export default CreatorProfile;