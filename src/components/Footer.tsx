import { Mail, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const quickLinks = [
  { label: "Für Angehörige", href: "/fuer-angehoerige", isRoute: true },
  { label: "24h-Betreuung", href: "/24h-betreuung", isRoute: true },
  { label: "Schulungen", href: "/demenz-schulungen", isRoute: true },
  { label: "Über mich", href: "/ueber-mich", isRoute: true },
];

const legalLinks = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
];

export const Footer = () => {
  return (
    <footer className="bg-footer text-white/90" role="contentinfo">
      <div className="container-narrow mx-auto section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <blockquote className="text-lg font-display italic text-white/80 mb-4">
              „Ich übersetze Demenz"
            </blockquote>
            <p className="text-white/60 leading-relaxed text-sm">
              Professionelle Demenzbegleitung im DACH-Raum – online & vor Ort in Österreich.
            </p>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Kontakt</h4>
            <address className="not-italic space-y-3">
              <div className="text-white/70">Radka Eder</div>
              <div className="text-white/50 text-sm">Demenztrainerin</div>
              <a href="mailto:info@fokusdemenz.at" className="flex items-center gap-3 text-white/70 hover:text-white transition-colors">
                <Mail className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
                info@fokusdemenz.at
              </a>
              <a href="https://wa.me/436645477490" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/70 hover:text-white transition-colors">
                <MessageCircle className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
                WhatsApp-Nachricht
              </a>
            </address>
          </div>

          {/* Angebote Column */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Angebote</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Rechtliches Column */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Rechtliches</h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-accent/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm">
              © {new Date().getFullYear()} FokusDemenz by Radka Eder. Alle Rechte vorbehalten.
            </p>
            <div className="flex items-center gap-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-white/50 hover:text-white/80 text-sm transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <p className="text-center text-white/30 text-sm mt-4">
            Österreich · Deutschland · Schweiz
          </p>
        </div>
      </div>
    </footer>
  );
};
