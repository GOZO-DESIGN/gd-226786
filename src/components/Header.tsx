import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
{ label: "Für Angehörige", href: "/fuer-angehoerige", isHash: false },
{ label: "24h-Betreuung", href: "/24h-betreuung", isHash: false },
{ label: "Schulungen", href: "/demenz-schulungen", isHash: false },
{ label: "Über mich", href: "/ueber-mich", isHash: false },
{ label: "Kontakt", href: "/kontakt", isHash: false }];


export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => {
    if (href.startsWith("/#")) return location.pathname === "/";
    return location.pathname === href;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between py-2 md:py-3">
           {/* Logo */}
           <Link to="/" className="flex items-center group" aria-label="FokusDemenz – Zur Startseite">
              <img alt="FokusDemenz Logo" className="h-20 md:h-24 w-auto transition-transform duration-300 group-hover:scale-105" src="/lovable-uploads/ce6d0ac2-4d9e-42e6-89da-78b192be8a5d.png" />
            </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Hauptnavigation">
            {navItems.map((item) =>
            item.isHash ?
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-accent ${
              isActive(item.href) ? "text-primary" : "text-foreground/70"}`
              }>
              
                  {item.label}
                </a> :

            <Link
              key={item.href}
              to={item.href}
              className={`text-sm font-medium transition-colors hover:text-accent ${
              isActive(item.href) ? "text-accent font-semibold" : "text-foreground/70"}`
              }>
              
                  {item.label}
                </Link>

            )}
          </nav>

           {/* CTA Button */}
           <div className="hidden lg:flex items-center">
             <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-full px-6 transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95">
               <a href="tel:+436645477490">
                 <Phone className="h-4 w-4 mr-2 group-hover:animate-pulse" />
                 Jetzt anrufen
               </a>
             </Button>
           </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label={isMenuOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={isMenuOpen}>
            
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen &&
      <div className="lg:hidden bg-background border-t border-border animate-fade-in" role="navigation" aria-label="Mobile Navigation">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-2">
            {navItems.map((item) =>
          item.isHash ?
          <a
            key={item.href}
            href={item.href}
            onClick={() => setIsMenuOpen(false)}
            className="text-lg font-medium text-foreground/80 hover:text-accent transition-colors py-3 min-h-[44px] flex items-center">
            
                  {item.label}
                </a> :

          <Link
            key={item.href}
            to={item.href}
            onClick={() => setIsMenuOpen(false)}
            className={`text-lg font-medium transition-colors py-3 min-h-[44px] flex items-center ${
            isActive(item.href) ? "text-accent" : "text-foreground/80 hover:text-accent"}`
            }>
            
                  {item.label}
                </Link>

          )}
            <div className="pt-4 border-t border-border">
              <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-full min-h-[48px]">
                <a href="tel:+436645477490">
                  <Phone className="h-4 w-4 mr-2" />
                  Jetzt anrufen
                </a>
              </Button>
            </div>
          </nav>
        </div>
      }
    </header>);

};