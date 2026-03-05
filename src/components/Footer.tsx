import { Phone, Mail, MapPin } from "lucide-react";
import Logo from "@/assets/logo.svg";

const quickLinks = [
  { label: "Für Angehörige", href: "#angehoerige" },
  { label: "24h-Betreuung", href: "#betreuung" },
  { label: "Schulungen", href: "#schulungen" },
  { label: "Gratis Ressourcen", href: "#ressourcen" },
];

const legalLinks = [
  { label: "Impressum", href: "#" },
  { label: "Datenschutz", href: "#" },
  { label: "AGB", href: "#" },
];

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-narrow mx-auto section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <img 
                src={Logo} 
                alt="FokusDemenz" 
                className="h-14 w-auto brightness-0 invert"
              />
            </div>
            <blockquote className="text-lg font-display italic text-accent mb-4">
              „Ich übersetze Demenz"
            </blockquote>
            <p className="text-primary-foreground/70 leading-relaxed">
              Professionelle Demenzbegleitung im DACH-Raum – online & vor Ort in Österreich.
            </p>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Kontakt</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="text-primary-foreground/70">Radka Eder</div>
              </div>
              <div className="text-primary-foreground/60 text-sm">Demenztrainerin</div>
              <a href="tel:+436645477490" className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors">
                <Phone className="h-4 w-4 flex-shrink-0" />
                +43 664 5477490
              </a>
              <a href="mailto:info@fokusdemenz.at" className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors">
                <Mail className="h-4 w-4 flex-shrink-0" />
                info@fokusdemenz.at
              </a>
            </div>
          </div>

          {/* Angebote Column */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Angebote</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Rechtliches Column */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Rechtliches</h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © 2026 FokusDemenz by Radka Eder. Alle Rechte vorbehalten.
            </p>
            <div className="flex items-center gap-6">
              {legalLinks.map((link) => (
                <a 
                  key={link.label}
                  href={link.href} 
                  className="text-primary-foreground/60 hover:text-accent text-sm transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <p className="text-center text-primary-foreground/40 text-sm mt-4">
            Österreich · Deutschland · Schweiz
          </p>
        </div>
      </div>
    </footer>
  );
};
