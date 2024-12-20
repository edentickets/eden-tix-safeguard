import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const creators = [
  {
    name: "Ultra Music Festival",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3",
    eventName: "Ultra Miami 2024",
    stats: "50,000+ tickets sold",
    testimonial: "Eden's smart ticketing has revolutionized how we handle large-scale events."
  },
  {
    name: "Electric Daisy Carnival",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678",
    eventName: "EDC Las Vegas",
    stats: "100,000+ tickets sold",
    testimonial: "The revenue share from resales has created a significant new income stream."
  },
  {
    name: "Tomorrowland",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7",
    eventName: "Tomorrowland Winter",
    stats: "75,000+ tickets sold",
    testimonial: "Dynamic QR technology has virtually eliminated unauthorized ticket transfers."
  }
];

export const TrustedCreators = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-primary opacity-5" />
      
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-medium gradient-text mb-6">
            Trusted by Leading Creators
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Join the world's most successful event organizers on Eden
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {creators.map((creator, index) => (
            <motion.div
              key={creator.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="overflow-hidden bg-white/5 backdrop-blur-sm border-white/10">
                <div className="h-48 relative">
                  <img
                    src={creator.image}
                    alt={creator.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Avatar className="w-12 h-12 border-2 border-eden-primary/20">
                      <AvatarImage src={creator.image} alt={creator.name} />
                      <AvatarFallback>{creator.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-medium text-white">{creator.name}</h3>
                      <p className="text-sm text-white/70">{creator.eventName}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-eden-secondary text-eden-secondary" />
                    ))}
                  </div>
                  <p className="text-white/80 mb-3">"{creator.testimonial}"</p>
                  <p className="text-sm text-eden-secondary font-medium">{creator.stats}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};