const publicAsset = (path: string) => `${import.meta.env.BASE_URL}${path}`;

const logos = [
  { src: publicAsset("assets/press/kronen-zeitung.png"), alt: "Kronen Zeitung" },
  { src: publicAsset("assets/press/kurier.png"), alt: "Kurier" },
  { src: publicAsset("assets/press/kleine-zeitung.png"), alt: "Kleine Zeitung" },
  { src: publicAsset("assets/press/ooen.png"), alt: "OÖNachrichten" },
  { src: publicAsset("assets/press/profil.svg"), alt: "profil Magazin" },
  { src: publicAsset("assets/press/tips.png"), alt: "Tips" },
  { src: publicAsset("assets/press/meinbezirk.png"), alt: "MeinBezirk.at" },
  { src: publicAsset("assets/press/salzburg24.png"), alt: "Salzburg24" },
  { src: publicAsset("assets/press/head.svg"), alt: "HEAD Magazin" },
  { src: publicAsset("assets/press/aufdecker.png"), alt: "aufdecker.at" },
  { src: publicAsset("assets/press/erfolg.webp"), alt: "ERFOLG.com" },
  { src: publicAsset("assets/press/expertentesten.svg"), alt: "ExpertenTesten" },
  { src: publicAsset("assets/press/wirtschaftsmacher.png"), alt: "Wirtschaftsmacher" },
  { src: publicAsset("assets/press/wirtschaftsjournal.webp"), alt: "Wirtschaftsjournal" },
  { src: publicAsset("assets/press/thekey.webp"), alt: "TheKey Greator" },
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
