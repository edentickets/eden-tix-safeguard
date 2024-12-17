import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <div className="py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-gradient-secondary opacity-10" />
          <div className="relative bg-eden-light/30 backdrop-blur-md p-16 text-center">
            <h2 className="text-4xl md:text-5xl font-medium mb-8 gradient-text">
              Your Next Event Begins with Eden
            </h2>
            <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto font-light">
              Discover events. Resell tickets seamlessly. Experience fair pricing and rewards. The future of ticketing is here.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-eden-secondary text-white hover:bg-eden-secondary/90">
                Browse Events
              </Button>
              <Button size="lg" variant="outline">
                Join Eden
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;