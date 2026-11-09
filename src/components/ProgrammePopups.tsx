import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { ArrowRight, X } from "lucide-react";
import { Dialog, DialogClose, DialogDescription, DialogOverlay, DialogPortal, DialogTitle } from "@/components/ui/dialog";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";
import {
  canShowPopup, isMobileExitGesture, POPUP_STORAGE_KEY, VIDEO_URL,
  type PopupHistory, type PopupKind,
} from "./programmePopupRules";

function readHistory(): PopupHistory {
  try { return JSON.parse(sessionStorage.getItem(POPUP_STORAGE_KEY) || "{}") || {}; }
  catch { return {}; }
}

export default function ProgrammePopups() {
  const { pathname } = useLocation();
  const [active, setActive] = useState<PopupKind | null>(null);
  const history = useRef<PopupHistory>(readHistory());
  const opened = useRef<PopupKind | null>(null);
  const started = useRef(Date.now());
  const lastClosed = useRef(-Infinity);

  const save = (next: PopupHistory) => {
    history.current = next;
    try { sessionStorage.setItem(POPUP_STORAGE_KEY, JSON.stringify(next)); } catch { /* In-memory fallback. */ }
  };

  const close = () => {
    opened.current = null;
    lastClosed.current = Date.now();
    setActive(null);
  };

  useEffect(() => {
    // Never interrupt contact requests or legal/privacy information.
    if (["/kontakt", "/impressum", "/datenschutz"].includes(pathname)) return;
    let previousY = window.scrollY;
    let deepestScroll = 0;
    const show = (kind: PopupKind) => {
      if (document.visibilityState !== "visible" || opened.current ||
        document.querySelector('[role="dialog"], [role="alertdialog"]') ||
        !canShowPopup(kind, history.current, Date.now() - started.current, Date.now() - lastClosed.current)) return;
      save({ ...history.current, [kind]: true });
      opened.current = kind;
      setActive(kind);
    };
    const timer = window.setInterval(() => show("welcome"), 500);
    const onLeave = (event: MouseEvent) => {
      if (event.relatedTarget === null && event.clientY <= 0 && window.matchMedia("(hover: hover) and (pointer: fine)").matches) show("exit");
    };
    const onScroll = () => {
      const y = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll > 0) deepestScroll = Math.max(deepestScroll, y / maxScroll);
      // Touch devices have no cursor exit: use a deliberate upward scroll after reading.
      if (window.matchMedia("(pointer: coarse)").matches &&
        isMobileExitGesture(Date.now() - started.current, deepestScroll, previousY, y)) show("exit");
      previousY = y;
    };
    document.addEventListener("mouseout", onLeave);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.clearInterval(timer);
      document.removeEventListener("mouseout", onLeave);
      window.removeEventListener("scroll", onScroll);
    };
  }, [pathname]);

  const welcome = active === "welcome";
  return (
    <Dialog open={active !== null} onOpenChange={(open) => { if (!open) close(); }}>
      <DialogPortal>
        <DialogOverlay className="z-[110] bg-foreground/60 backdrop-blur-sm" />
        <DialogPrimitive.Content
          className="fixed left-1/2 top-1/2 z-[111] w-[calc(100%-2rem)] max-w-3xl max-h-[calc(100dvh-2rem)] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-lg border border-border bg-background shadow-2xl focus:outline-none motion-safe:data-[state=open]:animate-in motion-safe:data-[state=open]:fade-in-0 motion-safe:data-[state=open]:zoom-in-95"
          onCloseAutoFocus={(event) => { event.preventDefault(); document.querySelector<HTMLElement>('header a')?.focus({ preventScroll: true }); }}
        >
          <div className="grid md:grid-cols-[180px_1fr]">
            <div className="relative hidden md:block overflow-hidden bg-secondary">
              <img src={`${import.meta.env.BASE_URL}assets/seniorenbetreuung.webp`} alt="Begleitung in der Betreuung zuhause" width="480" height="720" className="absolute inset-0 h-full w-full object-cover" />
            </div>
            <div className="p-6 pt-12 sm:p-9 sm:pt-12">
              <p className="mb-3 text-xs font-semibold uppercase text-primary">Begleitprogramm · Radka Eder</p>
              <p className="mb-5 text-xl font-bold text-accent">Betreuung, die bleibt</p>
              <DialogTitle className="text-2xl font-bold leading-snug tracking-normal text-primary">
                {welcome ? "Die 24-Stunden-Betreuung ist da. Aber deine Sorgen sind geblieben?" : "Du organisierst die 24-Stunden-Betreuung für einen Menschen mit Demenz?"}
              </DialogTitle>
              <DialogDescription asChild>
                <div className="mt-5 space-y-4 text-base leading-relaxed text-foreground">
                  {welcome ? <>
                    <p>Du möchtest, dass deine Mutter oder dein Vater mit Demenz gut betreut wird. Doch immer wieder gibt es schwierige Situationen, Unsicherheit oder Probleme mit der Betreuerin?</p>
                    <p>In meinem Begleitprogramm <strong>„Betreuung, die bleibt“</strong> bekommst du praktische Lösungen, fachliches Wissen und persönliche Unterstützung für euren Alltag.</p>
                  </> : <p>Hol dir Unterstützung, bevor die Belastung zu groß wird.</p>}
                </div>
              </DialogDescription>
              <Button asChild size="lg" className="mt-7 h-auto min-h-12 w-full whitespace-normal px-5 py-3 text-center leading-snug">
                <a href={VIDEO_URL} target="_blank" rel="noopener noreferrer" onClick={() => { save({ ...history.current, requested: true }); close(); }}>
                  {welcome ? "Kostenloses Informationsvideo anfordern" : "Ja, schick mir das Informationsvideo"}
                  <ArrowRight aria-hidden="true" />
                </a>
              </Button>
            </div>
          </div>
          <DialogClose asChild>
            <Button variant="ghost" size="icon" className="absolute right-2 top-2 h-11 w-11 text-foreground" aria-label="Pop-up schließen" title="Pop-up schließen"><X aria-hidden="true" /></Button>
          </DialogClose>
        </DialogPrimitive.Content>
      </DialogPortal>
    </Dialog>
  );
}