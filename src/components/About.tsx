import { Award, BookOpen, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import radkaBrainModels from "@/assets/radka-brain-models.webp";

const credentials = [
  { icon: Award, label: "Dipl. Gesundheits- und Krankenpflegerin" },
  { icon: Heart, label: "Demenztrainerin" },
  { icon: BookOpen, label: "Buchautorin" },
];

export const About = () => {
  return (
    <section className="section-padding bg-primary/85 text-primary-foreground animate-fade-in" id="ueber-mich">
      <div className="container-narrow mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Column */}
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent/20 rounded-full blur-xl" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/10 rounded-full blur-xl" />
              <img
                src="/images/radka-brain-models.webp"
                alt="Radka Eder mit Gehirnmodellen"
                className="relative rounded-2xl w-full object-cover aspect-[4/3] shadow-xl"
                loading="lazy"
              />
            </div>
          </div>

          {/* Content Column */}
          <div className="order-1 lg:order-2">
            <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
              Über mich
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Radka Eder
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-4">
              Demenzexpertin & Trainerin
            </p>
            
            <blockquote className="text-2xl font-display italic text-accent mb-6">
              „Ich übersetze Demenz"
            </blockquote>
            
            <p className="text-primary-foreground/80 leading-relaxed mb-8">
              Als diplomierte Gesundheits- und Krankenpflegerin mit über 15 Jahren Erfahrung 
              in der Altenpflege habe ich mich auf Demenzbegleitung spezialisiert. Ich mache 
              komplexes Wissen verständlich und gebe praktische Werkzeuge an die Hand.
            </p>
            
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-semibold">
              Mehr über mich
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
