import { Card } from "@/components/ui/card";

const features = [
  {
    icon: "🎬",
    title: "Movies & Theatres",
    description: "Latest Konkani films, theatre shows, and screening schedules across all venues",
    color: "from-cultural-orange to-cultural-purple"
  },
  {
    icon: "🎭",
    title: "Stand-up Comedy",
    description: "Hilarious Konkani comedy shows, open mics, and entertainment events",
    color: "from-cultural-purple to-accent"
  },
  {
    icon: "🎵",
    title: "Concerts & Shows",
    description: "Musical performances, cultural shows, and artistic celebrations",
    color: "from-accent to-cultural-gold"
  },
  {
    icon: "🎨",
    title: "Workshops & Programs",
    description: "Educational workshops, cultural programs, and community events",
    color: "from-cultural-gold to-cultural-orange"
  }
];

export const FeaturesSection = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            What's Coming to <span className="text-cultural-orange">KonkaniShow</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to stay connected with the vibrant Konkani entertainment scene
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className="p-6 bg-gradient-card border-0 shadow-card-cultural hover:shadow-cultural transition-all duration-300 hover:-translate-y-2 group"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="text-center space-y-4">
                <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground group-hover:text-cultural-orange transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
                <div className={`h-1 w-0 group-hover:w-full bg-gradient-to-r ${feature.color} transition-all duration-500 mx-auto rounded-full`} />
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-cultural-gold/10 border border-cultural-gold/20 rounded-full px-6 py-3">
            <span className="text-2xl animate-bounce">✅</span>
            <span className="text-cultural-deep font-semibold">All dates, times, and locations in one place!</span>
          </div>
        </div>
      </div>
    </section>
  );
};