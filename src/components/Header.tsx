import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/assets/logo.svg";

const navItems = [
  { label: "Für Angehörige", href: "#angehoerige" },
  { label: "24h-Betreuung", href: "#betreuung" },
  { label: "Schulungen", href: "#schulungen" },
  { label: "Über mich", href: "#ueber-mich" },
  { label: "Kontakt", href: "#kontakt" },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <img src={Logo} alt="FokusDemenz" className="h-16 md:h-20 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <Button className="bg-accent hover:bg-accent/90 text-primary-foreground font-semibold rounded-full px-6">
              <Phone className="h-4 w-4 mr-2" />
              Erstberatung anfragen
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Menü"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border animate-fade-in">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-medium text-foreground/80 hover:text-primary transition-colors py-2"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 border-t border-border">
              <Button className="w-full bg-accent hover:bg-accent/90 text-primary-foreground font-semibold rounded-full">
                <Phone className="h-4 w-4 mr-2" />
                Anfrage senden
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
