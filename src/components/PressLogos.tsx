import aufdecker from "@/assets/press/aufdecker.png";
import meinbezirk from "@/assets/press/meinbezirk.png";
import erfolg from "@/assets/press/erfolg.webp";
import expertentesten from "@/assets/press/expertentesten.svg";
import head from "@/assets/press/head.svg";
import wirtschaftsmacher from "@/assets/press/wirtschaftsmacher.png";
import salzburg24 from "@/assets/press/salzburg24.png";
import kleineZeitung from "@/assets/press/kleine-zeitung.png";
import kronenZeitung from "@/assets/press/kronen-zeitung.png";
import kurier from "@/assets/press/kurier.png";

const logos = [
  { src: kronenZeitung, alt: "Kronen Zeitung" },
  { src: kurier, alt: "Kurier" },
  { src: kleineZeitung, alt: "Kleine Zeitung" },
  { src: meinbezirk, alt: "MeinBezirk.at" },
  { src: salzburg24, alt: "Salzburg24" },
  { src: head, alt: "HEAD Magazin" },
  { src: aufdecker, alt: "aufdecker.at" },
  { src: erfolg, alt: "ERFOLG.com" },
  { src: expertentesten, alt: "ExpertenTesten" },
  { src: wirtschaftsmacher, alt: "Wirtschaftsmacher" },
];

export const PressLogos = () => {
  return (
    <section className="py-12 md:py-16 bg-background border-y border-border" aria-labelledby="press-heading">
      <div className="container-narrow mx-auto">
        <p id="press-heading" className="eyebrow text-center mb-8">
          Bekannt aus
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-8 gap-y-8 items-center justify-items-center">
          {logos.map((logo) => (
            <img
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              loading="lazy"
              className="h-10 md:h-12 w-auto max-w-[140px] object-contain opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
