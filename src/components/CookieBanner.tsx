import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "fd-cookie-consent";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) {
        const t = setTimeout(() => setVisible(true), 400);
        return () => clearTimeout(t);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  const decide = (value: "accepted" | "declined") => {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {}
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie-Hinweis"
      className="fixed inset-x-0 bottom-0 z-[100] p-4 sm:p-6 pointer-events-none"
    >
      <div className="pointer-events-auto mx-auto max-w-3xl rounded-2xl border border-border bg-background/95 backdrop-blur shadow-2xl p-5 sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-sm text-foreground/90 leading-relaxed">
            <p className="font-semibold text-foreground mb-1">Cookies & Datenschutz</p>
            <p>
              Diese Website verwendet ausschließlich technisch notwendige Cookies,
              um die Funktionalität sicherzustellen. Mehr Informationen finden Sie in
              der{" "}
              <Link to="/datenschutz" className="underline hover:text-primary">
                Datenschutzerklärung
              </Link>
              .
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 shrink-0">
            <Button
              variant="outline"
              size="sm"
              onClick={() => decide("declined")}
              className="rounded-full"
            >
              Ablehnen
            </Button>
            <Button
              size="sm"
              onClick={() => decide("accepted")}
              className="rounded-full"
            >
              Akzeptieren
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
