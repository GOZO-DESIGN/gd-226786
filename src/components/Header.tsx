import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-mark.png";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Für Angehörige", href: "/fuer-angehoerige" },
  { label: "24h-Betreuung", href: "/24h-betreuung" },
  { label: "Angebot", href: "/demenz-schulungen" },
  { label: "Über mich", href: "/ueber-mich" },
  { label: "FAQ", href: "/faq" },
  { label: "Kontakt", href: "/kontakt" },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded-md">
        Zum Inhalt springen
      </a>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between py-2 md:py-3">
          <Link to="/" className="flex items-center group" aria-label="FokusDemenz – Zur Startseite">
            <img alt="FokusDemenz Logo" className="h-20 md:h-24 w-auto transition-transform duration-300 group-hover:scale-105" src={logo} />
          </Link>

          <nav className="hidden lg:flex items-center gap-8" aria-label="Hauptnavigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.href) ? "text-primary font-semibold" : "text-foreground/70"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center">
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full px-6 transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95">
              <Link to="/kontakt">
                <Mail className="h-4 w-4 mr-2" />
                Kontakt aufnehmen
              </Link>
            </Button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label={isMenuOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border animate-fade-in" role="navigation" aria-label="Mobile Navigation">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setIsMenuOpen(false)}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`text-lg font-medium transition-colors py-3 min-h-[44px] flex items-center ${
                  isActive(item.href) ? "text-primary" : "text-foreground/80 hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-border">
              <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full min-h-[48px]">
                <Link to="/kontakt">
                  <Mail className="h-4 w-4 mr-2" />
                  Kontakt aufnehmen
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
