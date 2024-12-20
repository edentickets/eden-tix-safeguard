export const StepsSection = () => {
  return (
    <section className="py-20 bg-eden-light/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 gradient-text">
          3 Easy Steps to Enjoy the Best Ticketing Experience
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              step: "01",
              title: "Discover Events You Love",
              description: "Explore a wide range of events, from concerts to sports games.",
            },
            {
              step: "02",
              title: "Buy Securely with Confidence",
              description: "Purchase tickets through our secure system with multiple payment options.",
            },
            {
              step: "03",
              title: "Resell and Get Notified",
              description: "Easily resell tickets and get alerts for price changes.",
            },
          ].map((item) => (
            <div key={item.step} className="glass-card p-8 space-y-4 relative overflow-hidden">
              <span className="absolute -right-4 -top-4 text-8xl font-bold text-eden-primary/10">
                {item.step}
              </span>
              <h3 className="text-xl font-semibold text-white relative z-10">{item.title}</h3>
              <p className="text-white/70 relative z-10">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};