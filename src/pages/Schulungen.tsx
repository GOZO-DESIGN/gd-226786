import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Mail, MessageCircle, ArrowRight, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { programme, groupLabels } from "@/data/programme";
import schulungenStage from "@/assets/schulungen-stage.webp";

const principle = [
  { n: "01", t: "Verhalten ist die Sprache." },
  { n: "02", t: "Gefühle sind der Schlüssel." },
  { n: "03", t: "Bedürfnisse sind die Botschaft." },
  { n: "04", t: "Menschlichkeit ist die Antwort." },
];

const Schulungen = () => {
  const [filter, setFilter] = useState<(typeof groupLabels)[number]>("Alle");
  const visible = programme.filter((p) => filter === "Alle" || p.group === filter);

  return (
    <div className="min-h-screen">
      <SEO
        title="Angebot – Sechs Signatur-Programme | FokusDemenz"
        description="Sechs Demenz-Schulungsprogramme von Radka Eder – für Pflegeheime, Gemeinden, Unternehmen, 24h-Betreuung und Personalvermittlung. GuKG-Fortbildung inkl. Teilnahmebestätigung. Online & vor Ort im DACH-Raum."
        canonical="https://fokusdemenz.at/demenz-schulungen"
      />
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-secondary/40 via-background to-background relative overflow-hidden animate-fade-in">
          <div className="container-narrow mx-auto relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-center md:text-left">
                <span className="eyebrow">Angebot</span>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 animate-fade-in" style={{ animationDelay: "100ms" }}>
                  Verhalten ist eine Sprache.<br />
                  <span className="text-foreground">Ich übersetze sie.</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0 mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: "200ms" }}>
                  Für jede Zielgruppe das passende Programm: vom Pflegeheim über Gemeinden und Unternehmen bis zur 24-Stunden-Betreuung. Ein Prinzip, sechs Wege Demenz zu verstehen.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "300ms" }}>
                  <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-full px-8 py-6 text-base transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95">
                    <Link to="/kontakt">
                      <Mail className="h-4 w-4 mr-2" />
                      Erstgespräch vereinbaren
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold rounded-full px-8 py-6 text-base transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95">
                    <a href="#programme">
                      Die 6 Programme ansehen
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </a>
                  </Button>
                </div>
                <div className="grid grid-cols-3 gap-4 mt-10 max-w-md mx-auto md:mx-0">
                  {[
                    { v: "6", l: "Signatur-Programme" },
                    { v: "15+", l: "Jahre Pflegepraxis" },
                    { v: "DACH", l: "online & vor Ort" },
                  ].map((s) => (
                    <div key={s.l} className="text-center md:text-left">
                      <div className="font-display text-2xl md:text-3xl font-bold text-accent">{s.v}</div>
                      <div className="text-xs md:text-sm text-muted-foreground leading-tight mt-1">{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-center animate-scale-in" style={{ animationDelay: "400ms" }}>
                <img
                  src={schulungenStage}
                  alt="Radka Eder – Demenzdolmetscherin"
                  className="rounded-3xl shadow-xl w-full max-w-md object-cover aspect-[4/3]"
                  loading="eager"
                  fetchPriority="high"
                  width={448}
                  height={336}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Dachmarke */}
        <section className="section-padding bg-background animate-fade-in">
          <div className="container-narrow mx-auto max-w-4xl">
            <span className="eyebrow text-center">Eine Dachmarke, sechs Wege</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary text-center mb-10">
              Ein Prinzip, sechs Programme
            </h2>
            <div className="space-y-6 text-lg md:text-xl text-foreground leading-relaxed">
              <p>
                Manche hören die Sprache der Demenz zum ersten Mal. Für sie gibt es <span className="text-primary font-semibold">„Wenn Verhalten eine Sprache ist"</span>. Pflegekräfte sprechen sie schon, oft aber gebrochen. <span className="text-primary font-semibold">„Fließend Demenz"</span> macht sie sprachsicher. Unternehmen buchen den <span className="text-primary font-semibold">„Sprachkurs Demenz"</span>. Und Gemeinden schlagen im <span className="text-primary font-semibold">„Demenz-Wörterbuch"</span> nach, was ihre Bürger brauchen.
              </p>
              <p>
                Agenturen schulen ihr vermitteltes Personal mit <span className="text-primary font-semibold">„Fließend Demenz Online"</span>. Und 24-Stunden-Betreuerinnen lernen mit <span className="text-primary font-semibold">„Fließend Demenz Zuhause"</span> dort, wo die Sprache gesprochen wird: beim Klienten.
              </p>
            </div>

            {/* GuKG-Hinweis */}
            <div className="mt-10 flex items-start gap-4 bg-accent/10 border border-accent/30 rounded-2xl p-6">
              <BadgeCheck className="h-7 w-7 text-accent flex-shrink-0 mt-0.5" />
              <p className="text-foreground leading-relaxed">
                <span className="font-semibold text-accent">Fortbildung für Pflegekräfte</span> – Teilnahmebestätigung gemäß GuKG-Fortbildungspflicht inklusive (§ 63 GuKG bzw. § 104c GuKG).
              </p>
            </div>
          </div>
        </section>

        {/* Prinzip */}
        <section className="section-padding bg-section-soft animate-fade-in">
          <div className="container-narrow mx-auto">
            <span className="eyebrow text-center">Das Demenz-Dolmetscher-Prinzip</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary text-center mb-14">
              Vier Schritte, die jedes Programm tragen
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {principle.map((s, i) => (
                <div key={s.n} className="bg-card border border-border rounded-2xl p-6 card-hover animate-fade-in" style={{ animationDelay: `${i * 80}ms` }}>
                  <div className="font-display text-4xl font-bold text-accent/40 mb-3">{s.n}</div>
                  <p className="font-display text-lg font-semibold text-primary leading-snug">{s.t}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Programme – vertikal gestapelt */}
        <section id="programme" className="section-padding bg-background animate-fade-in scroll-mt-24">
          <div className="container-narrow mx-auto">
            <span className="eyebrow text-center">Die Programme</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary text-center mb-4">
              Sechs Programme, eine Sprache
            </h2>
            <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
              Jedes Programm richtet sich an eine klar umrissene Zielgruppe. Klicken Sie auf Ihr Programm für mehr Details.
            </p>

            {/* Filter tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {groupLabels.map((label) => {
                const active = filter === label;
                return (
                  <button
                    key={label}
                    onClick={() => setFilter(label)}
                    className={`px-5 py-2.5 rounded-full border-[1.5px] font-semibold text-sm transition-all duration-200 whitespace-nowrap ${
                      active
                        ? "bg-accent text-accent-foreground border-accent shadow-md"
                        : "bg-card text-muted-foreground border-border hover:border-accent hover:text-accent"
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>

            <div className="space-y-8 max-w-4xl mx-auto">
              {visible.map((p, i) => {
                const Icon = p.icon;
                const reverse = i % 2 === 1;
                return (
                  <Link
                    key={p.slug}
                    to={`/demenz-schulungen/${p.slug}`}
                    className="group block bg-card border border-border rounded-3xl overflow-hidden card-hover animate-fade-in"
                    style={{ animationDelay: `${i * 60}ms` }}
                    aria-label={p.altText || p.name}
                  >
                    <div className={`grid md:grid-cols-[260px_1fr] ${reverse ? "md:grid-flow-col-dense" : ""}`}>
                      {/* Buch-Platzhalter (gold/lavendel) */}
                      <div
                        className={`relative flex items-center justify-center p-8 bg-gradient-to-br from-secondary/60 via-background to-accent/10 ${reverse ? "md:col-start-2" : ""}`}
                        role="img"
                        aria-label={p.altText || `${p.name} – Buchmockup`}
                      >
                        <div className="absolute top-4 left-4 font-display text-5xl font-bold text-accent/30">{p.n}</div>
                        <div className="w-32 h-44 md:w-36 md:h-52 rounded-md bg-gradient-to-br from-primary via-primary to-purple-dark shadow-2xl flex flex-col items-center justify-center text-primary-foreground p-3 transform group-hover:-rotate-2 transition-transform duration-500">
                          <Icon className="h-10 w-10 mb-3 text-accent" />
                          <div className="text-xs uppercase tracking-widest opacity-70 text-center mb-1">FokusDemenz</div>
                          <div className="font-display text-sm font-bold text-center leading-tight">{p.shortName}</div>
                          <div className="mt-3 text-[10px] opacity-50 italic">Bild folgt</div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-7 md:p-8 flex flex-col">
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <span className="inline-block bg-secondary text-primary font-semibold text-xs uppercase tracking-wide px-3 py-1.5 rounded-full">
                            {p.tag}
                          </span>
                          {p.gukg && (
                            <span className="inline-flex items-center gap-1.5 bg-accent/15 text-accent font-semibold text-xs uppercase tracking-wide px-3 py-1.5 rounded-full">
                              <BadgeCheck className="h-3.5 w-3.5" />
                              GuKG-Fortbildung
                            </span>
                          )}
                        </div>
                        <h3 className="font-display text-2xl font-bold text-primary mb-3 leading-tight">{p.name}</h3>
                        <p className="text-muted-foreground leading-relaxed mb-5 flex-1">{p.desc}</p>
                        <div className="pt-4 border-t border-border">
                          <div className="text-xs uppercase tracking-wide text-muted-foreground mb-1">Format</div>
                          <div className="text-sm text-foreground leading-snug mb-4">{p.format}</div>
                          {p.gukg && (
                            <div className="text-xs text-muted-foreground mb-4 italic">
                              Teilnahmebestätigung gemäß GuKG-Fortbildungspflicht inklusive.
                            </div>
                          )}
                          <div className="inline-flex items-center gap-2 text-accent font-semibold text-sm group-hover:gap-3 transition-all">
                            Mehr erfahren <ArrowRight className="h-4 w-4" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* GuKG SEO Abschnitt */}
        <section className="section-padding bg-section-soft animate-fade-in">
          <div className="container-narrow mx-auto max-w-3xl">
            <span className="eyebrow text-center">GuKG-Fortbildungen</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary text-center mb-8">
              GuKG-Fortbildungen für Pflegekräfte in Österreich
            </h2>
            <div className="space-y-5 text-foreground leading-relaxed">
              <p>
                Die Fortbildungen von Radka Eder richten sich an Pflegekräfte, Pflegeassistenz, Pflegefachassistenz, 24-Stunden-Betreuungskräfte und weitere Berufsgruppen im Pflege- und Betreuungsbereich. Die Inhalte sind praxisnah, verständlich und auf den Arbeitsalltag mit älteren Menschen und Menschen mit Demenz ausgerichtet.
              </p>
              <p>
                Die Teilnahme kann – je nach Berufsgruppe – im Rahmen der gesetzlichen Fortbildungspflicht gemäß <strong className="text-accent">GuKG</strong> dokumentiert werden. Für Angehörige des gehobenen Dienstes für Gesundheits- und Krankenpflege ist <strong>§ 63 GuKG</strong> relevant, für Pflegeassistenz und Pflegefachassistenz <strong>§ 104c GuKG</strong>. Eine Teilnahmebestätigung mit Thema, Datum, Dauer und Inhalt wird nach Abschluss ausgestellt.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-background animate-fade-in">
          <div className="container-narrow mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4">
              Ich mache Sie fit in der Sprache der Demenz.
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-10 text-lg">
              Im unverbindlichen Erstgespräch finden wir das passende Programm. Online &amp; vor Ort im gesamten DACH-Raum.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-full px-8 py-6 text-base transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95">
                <Link to="/kontakt">
                  <Mail className="h-4 w-4 mr-2" />
                  Erstgespräch vereinbaren
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="px-8 py-6 text-base border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95">
                <a href="https://wa.me/436645477490" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Nachricht via WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Schulungen;
