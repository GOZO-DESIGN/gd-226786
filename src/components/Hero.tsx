import { Phone, Clock, Users, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { icon: Clock, value: "15+", label: "Jahre Erfahrung" },
  { icon: Users, value: "500+", label: "begleitete Familien" },
  { icon: Globe, value: "DACH", label: "Online im DACH-Raum" },
];

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden animate-fade-in">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-gold-light opacity-50" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/5 to-transparent" />
      
      <div className="container mx-auto px-4 md:px-8 relative">
        <div className="max-w-4xl">
          {/* Tagline */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-primary/5 rounded-full border border-primary/10">
            <span className="w-2 h-2 bg-accent rounded-full" />
            <span className="text-sm font-medium text-primary">Demenzbegleitung mit Herz & Expertise</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight mb-6">
            Ich übersetze{" "}
            <span className="relative">
              Demenz
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-accent rounded-full" />
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            Demenzbegleitung, die Orientierung schafft. Ich helfe Angehörigen, Betreuungspersonen und Pflegeteams, Demenz besser zu verstehen und den Alltag spürbar zu entlasten.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6">
              Kostenlose Erstberatung
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold text-lg px-8 py-6">
              <Phone className="mr-2 h-5 w-5" />
              +43 664 5477490
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 md:gap-12">
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg">
                  <stat.icon className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
