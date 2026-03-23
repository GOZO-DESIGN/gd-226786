import { useLocation, Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEO
        title="Seite nicht gefunden"
        description="Die gesuchte Seite wurde nicht gefunden."
        noindex
      />
      <Header />
      <main className="flex-1 flex items-center justify-center section-padding pt-32">
        <div className="text-center max-w-md mx-auto">
          <p className="text-6xl font-display font-bold text-accent mb-4" aria-hidden="true">404</p>
          <h1 className="font-display text-2xl md:text-3xl font-bold text-primary mb-4">
            Seite nicht gefunden
          </h1>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Die gesuchte Seite existiert leider nicht oder wurde verschoben. Kehren Sie zur Startseite zurück.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 min-h-[48px]">
              <Link to="/">
                <Home className="h-4 w-4 mr-2" />
                Zur Startseite
              </Link>
            </Button>
            <Button
              variant="outline"
              className="border-primary text-primary rounded-full px-6 min-h-[48px]"
              onClick={() => navigate(-1)}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Zurück
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
