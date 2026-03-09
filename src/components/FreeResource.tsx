import { FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export const FreeResource = () => {
  return (
    <section className="section-padding animate-fade-in">
      <div className="container-narrow mx-auto">
        <div className="relative bg-gradient-to-br from-primary via-primary to-indigo-dark rounded-3xl overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/5 rounded-full blur-2xl" />
          
          <div className="relative p-8 md:p-12 lg:p-16">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Content */}
              <div className="text-primary-foreground">
                <span className="inline-block text-sm font-semibold text-primary-foreground/70 uppercase tracking-wider mb-4">
                  Gratis PDF
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                  40 Aktivierungsideen für Menschen mit Demenz
                </h2>
                <p className="text-primary-foreground/80 leading-relaxed mb-8">
                  Laden Sie mein kostenloses PDF mit praktischen Aktivierungsideen herunter. 
                  Sofort umsetzbar und speziell für den Alltag mit Demenz entwickelt.
                </p>
                <Button size="lg" className="bg-primary-foreground hover:bg-primary-foreground/90 text-primary font-semibold">
                  <Download className="mr-2 h-5 w-5" />
                  Jetzt kostenlos herunterladen
                </Button>
              </div>
              
              {/* Visual */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  <div className="absolute inset-0 bg-accent/20 rounded-2xl blur-xl transform rotate-6" />
                  <div className="relative bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/20">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 bg-primary-foreground/20 rounded-xl flex items-center justify-center">
                        <FileText className="h-8 w-8 text-primary-foreground" />
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-primary-foreground">40</div>
                        <div className="text-sm text-primary-foreground/70">Ideen</div>
                      </div>
                    </div>
                    <div className="text-primary-foreground/60 text-sm">PDF Guide</div>
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
