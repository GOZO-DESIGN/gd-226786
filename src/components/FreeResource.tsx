import { FileText, Download } from "lucide-react";
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
                <span className="eyebrow !text-white/60">Gratis PDF</span>
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                  40 Aktivierungsideen für Menschen mit Demenz
                </h2>
                <p className="text-white/80 leading-relaxed mb-8">
                  Laden Sie mein kostenloses PDF mit praktischen Aktivierungsideen herunter.
                  Sofort umsetzbar und speziell für den Alltag mit Demenz entwickelt.
                </p>
                <Button size="lg" className="bg-white hover:bg-white/90 text-primary font-semibold">
                  <Download className="mr-2 h-5 w-5" />
                  Jetzt kostenlos herunterladen
                </Button>
              </div>

              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                        <FileText className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-white">40</div>
                        <div className="text-sm text-white/70">Ideen</div>
                      </div>
                    </div>
                    <div className="text-white/60 text-sm">PDF Guide</div>
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
