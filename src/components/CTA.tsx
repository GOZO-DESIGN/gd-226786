import { Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CTA = () => {
  return (
    <section className="section-padding bg-gold-light animate-fade-in" id="kontakt">
      <div className="container-narrow mx-auto text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-6">
          Bereit für den ersten Schritt?
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          In einem kostenlosen 15-Minuten-Gespräch besprechen wir Ihre Situation 
          und finden heraus, wie ich Sie am besten unterstützen kann.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary-foreground font-semibold text-lg px-8 py-6">
            <Calendar className="mr-2 h-5 w-5" />
            Kostenlose Erstberatung
          </Button>
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold text-lg px-8 py-6">
            <Phone className="mr-2 h-5 w-5" />
            +43 664 5477490
          </Button>
        </div>
      </div>
    </section>
  );
};
