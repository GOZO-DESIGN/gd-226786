import { Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const quickLinks = [
  { label: "Für Angehörige", href: "/#angehoerige", isRoute: false },
  { label: "24h-Betreuung", href: "/24h-betreuung", isRoute: true },
  { label: "Schulungen", href: "/demenz-schulungen", isRoute: true },
  { label: "Gratis Ressourcen", href: "/#ressourcen", isRoute: false },
];

const legalLinks = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
  { label: "AGB", href: "/agb" },
];

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground" role="contentinfo">
      <div className="container-narrow mx-auto section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
           {/* Brand Column */}
           <div className="lg:col-span-2">
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
            <address className="not-italic space-y-3">
              <div className="text-primary-foreground/70">Radka Eder</div>
              <div className="text-primary-foreground/60 text-sm">Demenztrainerin</div>
              <a href="tel:+436645477490" className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors">
                <Phone className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
                +43 664 5477490
              </a>
              <a href="mailto:info@fokusdemenz.at" className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors">
                <Mail className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
                info@fokusdemenz.at
              </a>
            </address>
          </div>

          {/* Angebote Column */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Angebote</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  {link.isRoute ? (
                    <Link 
                      to={link.href} 
                      className="text-primary-foreground/70 hover:text-accent transition-colors"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a 
                      href={link.href} 
                      className="text-primary-foreground/70 hover:text-accent transition-colors"
                    >
                      {link.label}
                    </a>
                  )}
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
                  <Link 
                    to={link.href} 
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {new Date().getFullYear()} FokusDemenz by Radka Eder. Alle Rechte vorbehalten.
            </p>
            <div className="flex items-center gap-6">
              {legalLinks.map((link) => (
                <Link 
                  key={link.label}
                  to={link.href} 
                  className="text-primary-foreground/60 hover:text-accent text-sm transition-colors"
                >
                  {link.label}
                </Link>
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