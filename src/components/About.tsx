import { Award, BookOpen, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const radkaBrainModels = `${import.meta.env.BASE_URL}assets/radka-brain-models.webp`;

export const About = () => {
  return (
    <section className="section-padding bg-section-soft animate-fade-in" id="ueber-mich">
      <div className="container-narrow mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Column */}
          <div className="relative order-2 lg:order-1">
            <img
              src={radkaBrainModels}
              alt="Radka Eder mit Gehirnmodellen bei einer Demenz-Schulung"
              className="relative rounded-2xl w-full object-cover aspect-[4/3] shadow-lg"
              loading="lazy"
            />
          </div>

          {/* Content Column */}
          <div className="order-1 lg:order-2">
            <span className="eyebrow">Über mich</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-2">
              Radka Eder
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              Demenzexpertin & Trainerin
            </p>

            <blockquote className="text-xl font-display italic text-primary/80 mb-6 border-l-4 border-accent pl-4">
              „Ich übersetze Demenz"
            </blockquote>

            <p className="text-muted-foreground leading-relaxed mb-8">
              Als diplomierte Gesundheits- und Krankenpflegerin mit über 15 Jahren Erfahrung
              in der Altenpflege habe ich mich auf Demenzbegleitung spezialisiert. Ich mache
              komplexes Wissen verständlich und gebe praktische Werkzeuge an die Hand.
            </p>

            <Button asChild variant="ghost" className="group/btn text-primary hover:text-primary p-0 h-auto font-semibold">
              <Link to="/ueber-mich">
                Mehr über mich
                <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
