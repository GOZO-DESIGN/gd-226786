import { Compass, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export const FreeResource = () => {
  return (
    <section className="section-padding animate-fade-in">
      <div className="container-narrow mx-auto">
        <div className="relative bg-gradient-to-br from-primary/90 to-primary rounded-3xl overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl" />

          <div className="relative p-8 md:p-12 lg:p-16">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="text-white">
                <span className="eyebrow !text-white/60">Kostenloser Download</span>
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                  Der 7-Tage-Aktivierungs-Kompass
                </h2>
                <p className="text-white/80 leading-relaxed mb-8">
                  Sieben Tage, sieben erprobte Aktivierungsideen – kompakt, verständlich und sofort umsetzbar.
                  Ihr kostenloser Einstieg in eine strukturierte Demenzbegleitung.
                </p>
                <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                  <a href="#aktivierungs-kompass">
                    <Download className="mr-2 h-5 w-5" />
                    Jetzt kostenlos herunterladen
                  </a>
                </Button>
              </div>

              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 bg-accent/20 rounded-xl flex items-center justify-center">
                        <Compass className="h-8 w-8 text-accent" />
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-white">7</div>
                        <div className="text-sm text-white/70">Tage</div>
                      </div>
                    </div>
                    <div className="text-white/60 text-sm">Aktivierungs-Kompass</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
