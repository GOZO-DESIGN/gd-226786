import { Users, Home, GraduationCap, CheckCircle, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: "angehoerige",
    icon: Users,
    title: "Für Angehörige",
    description: "Begleitung und Coaching für pflegende Angehörige – damit Sie den Alltag mit Demenz meistern.",
    features: ["Online-Begleitprogramm", "Einzelberatung", "Community"],
  },
  {
    id: "betreuung",
    icon: Home,
    title: "24h-Betreuung",
    description: "Schulung und Beratung für 24-Stunden-Betreuung bei Menschen mit Demenz.",
    features: ["Schulung der Betreuungsperson", "Aktivierungskonzept", "Qualitätssicherung"],
  },
  {
    id: "schulungen",
    icon: GraduationCap,
    title: "Schulungen",
    description: "Praxisnahe Fortbildungen für Pflegepersonal, Einrichtungen und Ehrenamtliche.",
    features: ["Online-Workshops", "Vor-Ort-Seminare", "Individuelle Konzepte"],
  },
];

export const Services = () => {
  return (
    <section className="section-padding" id="angebote">
      <div className="container-narrow mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            Meine Angebote
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4">
            Wie ich Sie unterstütze
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card 
              key={service.id} 
              id={service.id}
              className="group bg-gradient-to-b from-background to-secondary/20 border-border hover:border-primary/30 card-hover overflow-hidden"
            >
              <CardContent className="p-8 flex flex-col h-full">
                <div className="flex items-center justify-center w-14 h-14 bg-primary rounded-xl mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                
                <h3 className="font-display text-2xl font-semibold text-primary mb-3">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-3 mb-8 flex-grow">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-foreground">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground group/btn">
                  Mehr erfahren
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
