import { useParams, Link, Navigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Mail, MessageCircle, ArrowLeft, ArrowRight, CheckCircle2, Users, Target, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getProgramm, programme } from "@/data/programme";

const ProgrammDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const p = slug ? getProgramm(slug) : undefined;

  if (!p) return <Navigate to="/demenz-schulungen" replace />;

  const Icon = p.icon;
  const idx = programme.findIndex((x) => x.slug === p.slug);
  const next = programme[(idx + 1) % programme.length];

  return (
    <div className="min-h-screen">
      <SEO
        title={`${p.name} | FokusDemenz`}
        description={p.desc}
        canonical={`https://fokusdemenz.at/demenz-schulungen/${p.slug}`}
      />
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-secondary/60 via-background to-background animate-fade-in">
          <div className="container-narrow mx-auto">
            <Link
              to="/demenz-schulungen"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Zurück zum Angebot
            </Link>

            <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-start">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center">
                    <Icon className="h-8 w-8" />
                  </div>
                  <div>
                    <span className="eyebrow !mb-1">Programm {p.n}</span>
                    <div className="text-sm text-muted-foreground font-medium">{p.tag}</div>
                  </div>
                </div>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
                  {p.name}
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-8">
                  {p.desc}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full px-8 py-6 text-base transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95">
                    <Link to="/kontakt">
                      <Mail className="h-4 w-4 mr-2" />
                      Erstgespräch vereinbaren
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold rounded-full px-8 py-6 text-base transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95">
                    <a href="https://wa.me/436645477490" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      WhatsApp
                    </a>
                  </Button>
                </div>
              </div>

              {/* Placeholder Visual */}
              <div className="w-full lg:w-80 aspect-[4/5] rounded-3xl bg-gradient-to-br from-primary via-primary to-secondary flex items-center justify-center shadow-xl">
                <div className="text-center text-primary-foreground p-8">
                  <Icon className="h-20 w-20 mx-auto mb-4 opacity-60" />
                  <div className="font-display text-5xl font-bold mb-2">{p.n}</div>
                  <div className="text-sm uppercase tracking-widest opacity-80">{p.shortName}</div>
                  <div className="text-xs opacity-50 mt-6 italic">Bild folgt</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Info-Karten */}
        <section className="py-12 bg-background animate-fade-in">
          <div className="container-narrow mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Users, title: "Für wen", text: p.zielgruppe },
                { icon: Clock, title: "Format", text: p.format },
                { icon: Target, title: "Ergebnis", text: p.ergebnis },
              ].map((b) => (
                <div key={b.title} className="bg-card border border-border rounded-2xl p-6 card-hover">
                  <b.icon className="h-7 w-7 text-primary mb-4" />
                  <h3 className="font-display text-lg font-semibold text-primary mb-2">{b.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{b.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Inhalte */}
        <section className="section-padding bg-section-soft animate-fade-in">
          <div className="container-narrow mx-auto max-w-3xl">
            <span className="eyebrow text-center">Inhalte</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary text-center mb-12">
              Das erwartet Sie
            </h2>
            <ul className="space-y-4">
              {p.highlights.map((h, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 bg-card border border-border rounded-xl p-5 animate-fade-in"
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground leading-relaxed">{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA + nächstes Programm */}
        <section className="section-padding bg-background animate-fade-in">
          <div className="container-narrow mx-auto">
            <div className="bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-10 md:p-14 text-center text-primary-foreground mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Passt {p.shortName} zu Ihnen?
              </h2>
              <p className="text-lg opacity-90 max-w-xl mx-auto mb-8">
                Im unverbindlichen Erstgespräch klären wir Inhalte, Format und Termin.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" asChild variant="secondary" className="rounded-full px-8 py-6 font-semibold">
                  <Link to="/kontakt">
                    <Mail className="h-4 w-4 mr-2" />
                    Erstgespräch vereinbaren
                  </Link>
                </Button>
                <Button size="lg" asChild variant="outline" className="rounded-full px-8 py-6 font-semibold bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  <a href="https://wa.me/436645477490" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </div>

            <Link
              to={`/demenz-schulungen/${next.slug}`}
              className="group flex items-center justify-between gap-6 bg-card border border-border rounded-2xl p-6 card-hover"
            >
              <div>
                <div className="text-xs uppercase tracking-wide text-muted-foreground mb-1">Nächstes Programm</div>
                <div className="font-display text-xl font-semibold text-primary">{next.name}</div>
              </div>
              <ArrowRight className="h-6 w-6 text-primary group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProgrammDetail;
