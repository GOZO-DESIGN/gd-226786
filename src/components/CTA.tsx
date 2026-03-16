import { Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CTA = () => {
  return (
    <section className="section-padding bg-section-soft animate-fade-in" id="kontakt">
      <div className="container-narrow mx-auto text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-6">
          Bereit für den ersten Schritt?
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
          Schreiben Sie mir – ich melde mich in der Regel innerhalb von 24 Stunden persönlich bei Ihnen.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base px-8 py-6 transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95">
            <a href="mailto:info@fokusdemenz.at">
              <Mail className="mr-2 h-5 w-5" />
              Per E-Mail anfragen
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold text-base px-8 py-6 transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95">
            <a href="https://wa.me/436645477490" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              Nachricht via WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
