import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Festival Organizer",
    image: "/placeholder.svg",
    quote: "Eden has transformed how we manage our events. The smart ticketing system has virtually eliminated fraud, and we're seeing significant revenue from the secondary market.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Concert Promoter",
    image: "/placeholder.svg",
    quote: "The analytics and insights have been game-changing for our business. We can now make data-driven decisions about pricing and inventory management.",
    rating: 5
  },
  {
    name: "Lisa Rodriguez",
    role: "Theater Director",
    image: "/placeholder.svg",
    quote: "The platform's security features give us peace of mind, while the secondary market revenue has opened up a new income stream we never had before.",
    rating: 5
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="py-32 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-primary opacity-5" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-eden-accent/20 via-eden-primary/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-medium gradient-text mb-6">
            Creator Success Stories
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Join thousands of successful event creators who have transformed their business with Eden.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-colors">
                <div className="flex items-start gap-4 mb-4">
                  <Avatar className="w-12 h-12 border-2 border-eden-primary/20">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-medium text-white">{testimonial.name}</h3>
                    <p className="text-sm text-white/70">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-eden-secondary text-eden-secondary" />
                  ))}
                </div>

                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-eden-primary/20" />
                  <p className="text-white/80 relative z-10 pl-6">
                    "{testimonial.quote}"
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};