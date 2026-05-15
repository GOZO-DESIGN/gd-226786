import { Moon, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import radkaLaptop from "@/assets/radka-laptop.webp";

interface Props {
  /** Optional: variant without the photo (e.g. inside FreeResource gradient block). */
  compact?: boolean;
}

export const NachtunruheLeadMagnet = ({ compact = false }: Props) => {
  if (compact) {
    return (
      <section className="section-padding animate-fade-in" id="nachtunruhe">
        <div className="container-narrow mx-auto">
          <div className="relative bg-gradient-to-br from-primary/90 to-primary rounded-3xl overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl" />
            <div className="relative p-8 md:p-12 lg:p-16">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="text-white">
                  <span className="eyebrow !text-white/60">Kostenloser Leitfaden</span>
                  <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                    Nachtunruhe bei Demenz stoppen
                  </h2>
                  <p className="text-white/85 leading-relaxed mb-4">
                    Deine Mutter oder dein Vater schläft nicht. Deine 24-Stunden-Kraft ist überfordert. Und du liegst wach, womöglich viele Kilometer entfernt.
                  </p>
                  <p className="text-white/85 leading-relaxed mb-6">
                    Dieser Leitfaden zeigt dir, was wirklich hilft: warum Nachtunruhe entsteht, welche Sätze beruhigen, wie der Abend strukturiert sein muss – und was deine Betreuerin heute Nacht konkret anders machen kann.
                  </p>
                  <p className="text-white/95 font-medium mb-8">Kostenlos. Sofort verfügbar. Direkt umsetzbar.</p>
                  <Button
                    size="lg"
                    asChild
                    className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                  >
                    <a
                      href="https://radka-eder.alfima.at/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Download className="mr-2 h-5 w-5" />
                      Jetzt kostenlos herunterladen
                    </a>
                  </Button>
                </div>
                <div className="flex justify-center lg:justify-end">
                  <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-xs">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-16 h-16 bg-accent/20 rounded-xl flex items-center justify-center">
                        <Moon className="h-8 w-8 text-accent" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-white leading-tight">Leitfaden</div>
                        <div className="text-sm text-white/70">PDF, sofort</div>
                      </div>
                    </div>
                    <div className="text-white/70 text-sm leading-snug">
                      Nachtunruhe bei Demenz stoppen – die wichtigsten Sofortmaßnahmen für die Nacht.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding bg-background animate-fade-in" id="nachtunruhe">
      <div className="container-narrow mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
          <div>
            <span className="eyebrow text-accent">Kostenloser Leitfaden</span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-primary mb-4">
              Nachtunruhe bei Demenz stoppen
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Deine Mutter oder dein Vater schläft nicht. Deine 24-Stunden-Kraft ist überfordert. Und du liegst wach, womöglich viele Kilometer entfernt.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Dieser Leitfaden zeigt dir, was wirklich hilft: warum Nachtunruhe entsteht, welche Sätze beruhigen, wie der Abend strukturiert sein muss – und was deine Betreuerin heute Nacht konkret anders machen kann.
            </p>
            <p className="text-primary font-medium mb-8">Kostenlos. Sofort verfügbar. Direkt umsetzbar.</p>
            <Button
              size="lg"
              asChild
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-full px-8 py-6 text-base transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95"
            >
              <a
                href="https://radka-eder.alfima.at/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="h-4 w-4 mr-2" />
                Jetzt kostenlos herunterladen
              </a>
            </Button>
          </div>
          <div className="flex justify-center animate-scale-in">
            <div className="relative w-full max-w-sm">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
              <div className="relative bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-8 shadow-xl aspect-[3/4] flex flex-col justify-between text-white">
                <div>
                  <Moon className="h-10 w-10 text-accent mb-6" />
                  <p className="text-sm uppercase tracking-wider text-white/70 mb-2">Kostenloser Leitfaden</p>
                  <h3 className="font-display text-2xl md:text-3xl font-bold leading-tight">
                    Nachtunruhe bei Demenz stoppen
                  </h3>
                </div>
                <div>
                  <p className="text-white/80 text-sm mb-4">
                    Sofortmaßnahmen, beruhigende Sätze und Abendstruktur – kompakt für Angehörige & Betreuungskräfte.
                  </p>
                  <p className="text-accent font-semibold text-sm">FokusDemenz · Radka Eder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
