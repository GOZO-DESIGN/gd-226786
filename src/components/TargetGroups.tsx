import { Heart, Home, Building, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const groups = [
  {
    icon: Heart,
    title: "Pflegende Angehörige",
    description: "Sie betreuen einen Menschen mit Demenz und fühlen sich überfordert? Ich helfe Ihnen.",
    href: "#angehoerige",
  },
  {
    icon: Home,
    title: "Familien mit 24h-Betreuung",
    description: "Ihre Betreuungsperson hat wenig Demenz-Expertise? Ich schule und berate.",
    href: "#betreuung",
  },
  {
    icon: Building,
    title: "Pflegeeinrichtungen",
    description: "Sie möchten Ihr Team im Umgang mit Demenz schulen? Ich komme zu Ihnen.",
    href: "#schulungen",
  },
];

export const TargetGroups = () => {
  return (
    <section className="section-padding bg-background animate-fade-in">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4">
            Für wen ist FokusDemenz?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Finden Sie das passende Angebot für Ihre Situation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {groups.map((group, index) => (
            <Card
              key={group.title}
              className="group bg-background border-border hover:border-primary/20 card-hover animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                <group.icon className="h-8 w-8 text-primary mb-6" />
                <h3 className="font-display text-xl font-semibold text-primary mb-3">
                  {group.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {group.description}
                </p>
                <Button variant="ghost" className="group/btn text-primary hover:text-primary p-0 h-auto font-semibold">
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
