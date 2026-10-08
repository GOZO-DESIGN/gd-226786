import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  HeartHandshake,
  Mail,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Users,
  XCircle,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";

const seniorenbetreuung = `${import.meta.env.BASE_URL}assets/seniorenbetreuung.webp`;

const challenges = [
  "Die Betreuungskraft ist überfordert.",
  "Dein Elternteil wird unruhig, gereizt oder lehnt vieles ab.",
  "Es kommt immer wieder zu Spannungen.",
  "Du versuchst, zwischen allen zu vermitteln.",
  "Du fühlst dich allein mit der Verantwortung.",
  "Du schläfst schlecht und bist innerlich ständig angespannt.",
];

const changes = [
  "Du verstehst besser, was hinter dem Verhalten deines Elternteils steckt.",
  "Du weißt, wie du in typischen schwierigen Demenzsituationen reagieren kannst.",
  "Die Zusammenarbeit mit der 24h-Betreuungskraft wird ruhiger und klarer.",
  "Du fühlst dich weniger schuldig und weniger allein.",
  "Der Alltag wird entlasteter.",
  "Die Betreuung zuhause wird stabiler und tragfähiger.",
];

const programmeHighlights = [
  {
    title: "Live-Begleitung",
    text: "Regelmäßige Live-Begleitung und gemeinsame Fallbesprechungen zu eurer konkreten Situation.",
  },
  {
    title: "Verständliche Erklärungen",
    text: "Hilfe für typische schwierige Situationen bei Demenz – ohne komplizierte Fachsprache.",
  },
  {
    title: "Praktische Anleitungen",
    text: "Viele leicht umsetzbare Ideen für den Alltag, für Aktivierung und Beschäftigung.",
  },
  {
    title: "Orientierung & Materialien",
    text: "Unterstützung in der Kommunikation mit der Betreuungskraft, hilfreiche Materialien und Zugang zu einer Community mit Fragemöglichkeit.",
  },
];

const notSuitableFor = [
  "Keine 24h-Betreuung vorhanden",
  "Es werden nur allgemeine Informationen gesucht",
  "Aktuell ist keine Bereitschaft da, etwas zu verändern",
  "Gesucht wird eigentlich nur eine Schulung für Betreuungskräfte",
];

const Betreuung24h = () => (
  <div className="min-h-screen bg-background">
    <SEO
      title="Begleitprogramm bei Demenz und 24h-Betreuung"
      description="Begleitprogramm für Töchter und Söhne von Menschen mit Demenz mit 24h-Betreuung. Mehr Sicherheit, weniger Konflikte und mehr Stabilität im Alltag zuhause."
      canonical="https://www.fokusdemenz.at/24h-betreuung"
    />
    <Header />

    <main id="main-content">
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-secondary/60 via-background to-background overflow-hidden animate-fade-in">
        <div className="container-narrow mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 space-y-8">
              <span className="eyebrow">Begleitprogramm bei Demenz und 24h-Betreuung</span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-primary leading-[1.15] max-w-2xl">
                Wenn die Betreuung zuhause immer schwieriger wird, musst du das{" "}
                <span className="text-accent">nicht allein tragen</span>
              </h1>
              <div className="space-y-5 text-lg text-muted-foreground leading-relaxed max-w-xl">
                <p>Du hast für deine Mutter oder deinen Vater eine 24h-Betreuung organisiert – und trotzdem wird es nicht ruhiger.</p>
                <p>Vielleicht kommt die Betreuungskraft mit der Demenz nicht gut zurecht. Vielleicht gibt es immer wieder Missverständnisse, Unruhe oder Streit.</p>
                <p>Vielleicht fühlst du dich für alles verantwortlich, obwohl du selbst nicht vor Ort bist und dein eigenes Leben, deine Arbeit und deine Familie trägst.</p>
              </div>
              <p className="text-lg md:text-xl text-foreground font-medium leading-relaxed border-l-4 border-accent pl-5 max-w-xl">
                Wenn du merkst, dass die Betreuung zuhause immer belastender wird, begleite ich dich dabei, wieder mehr Sicherheit, Orientierung und Stabilität in diese Situation zu bringen.
              </p>
              <div className="pt-2">
                <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-full px-9 py-6 transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95">
                  <Link to="/kontakt">
                    Unverbindliche Anfrage senden
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="lg:col-span-5 relative flex justify-center lg:justify-end animate-scale-in">
              <div className="absolute -inset-5 bg-secondary rounded-[2.5rem] -rotate-2" aria-hidden="true" />
              <img
                src={seniorenbetreuung}
                alt="Begleitung einer Familie bei Demenz und 24h-Betreuung zuhause"
                className="relative z-10 rounded-2xl shadow-xl border-8 border-background w-full max-w-md object-cover aspect-[4/3]"
                loading="eager"
                fetchPriority="high"
                width={448}
                height={336}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Passt zu dir */}
      <section className="section-padding bg-section-soft animate-fade-in">
        <div className="container-narrow mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="eyebrow">Für wen und für wen nicht</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-5">
              Passt dieses Programm zu dir?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Dieses Angebot richtet sich an Töchter und Söhne von Menschen mit Demenz, die eine 24h-Betreuung für Mutter oder Vater organisiert haben und merken, dass die Situation zuhause an ihre Grenzen kommt.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            <div className="bg-background p-8 md:p-10 rounded-3xl shadow-sm border border-border">
              <div className="flex items-center gap-4 mb-7">
                <div className="bg-primary/10 p-3 rounded-xl" aria-hidden="true">
                  <CheckCircle2 className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-primary">Für dich gedacht, wenn ...</h3>
              </div>
              <ul className="space-y-4" aria-label="Typische Herausforderungen">
                {challenges.map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <span className="mt-2 h-2 w-2 rounded-full bg-accent flex-shrink-0" aria-hidden="true" />
                    <span className="text-foreground leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-muted/70 p-8 md:p-10 rounded-3xl">
              <div className="flex items-center gap-4 mb-7">
                <div className="bg-background p-3 rounded-xl shadow-sm" aria-hidden="true">
                  <XCircle className="h-7 w-7 text-muted-foreground" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground">Nicht passend, wenn ...</h3>
              </div>
              <ul className="space-y-4" aria-label="Keine Passung">
                {notSuitableFor.map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <span className="mt-2 h-2 w-2 rounded-full bg-muted-foreground/40 flex-shrink-0" aria-hidden="true" />
                    <span className="text-muted-foreground leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Veränderung */}
      <section className="section-padding animate-fade-in">
        <div className="container-narrow mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Sparkles className="h-8 w-8 text-accent mx-auto mb-5" aria-hidden="true" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-5">
              Was sich durch die Begleitung verändern kann
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Mein Ziel ist nicht, dich mit noch mehr Informationen zu überladen. Mein Ziel ist, dass du dich sicherer fühlst und klarer handeln kannst.
            </p>
          </div>
          <ul className="max-w-4xl mx-auto grid md:grid-cols-2 gap-x-12 gap-y-5" aria-label="Mögliche Veränderungen">
            {changes.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <ShieldCheck className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-foreground leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <div className="max-w-3xl mx-auto mt-12 text-center text-lg text-foreground leading-relaxed">
            <p>Es geht nicht darum, alles perfekt zu machen.</p>
            <p className="font-semibold mt-2">Es geht darum, aus Überforderung, Unsicherheit und Chaos wieder mehr Orientierung und Zusammenarbeit entstehen zu lassen.</p>
          </div>
        </div>
      </section>

      {/* Programminhalte – dunkler Block */}
      <section className="section-padding animate-fade-in">
        <div className="container-narrow mx-auto">
          <div className="relative overflow-hidden rounded-[3rem] bg-primary text-primary-foreground shadow-xl p-8 md:p-14 lg:p-16">
            <div className="absolute -top-32 -right-24 h-72 w-72 rounded-full bg-primary-foreground/10 blur-3xl" aria-hidden="true" />
            <div className="relative grid lg:grid-cols-3 gap-10 lg:gap-16 items-start">
              <div className="space-y-5">
                <span className="text-sm font-semibold uppercase tracking-widest text-secondary block">6 bis 8 Wochen</span>
                <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight">
                  Was du im Begleitprogramm bekommst
                </h2>
                <p className="text-primary-foreground/80 leading-relaxed text-lg">
                  Das Begleitprogramm begleitet dich dabei, die Betreuungssituation zuhause Schritt für Schritt zu stabilisieren.
                </p>
                <div className="flex items-start gap-3 text-primary-foreground/90 font-medium pt-2">
                  <Users className="h-6 w-6 text-secondary flex-shrink-0 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <p className="leading-relaxed">Wenn sinnvoll, können auch weitere Familienmitglieder einbezogen werden, damit nicht alles an einer Person hängen bleibt.</p>
                </div>
              </div>
              <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
                {programmeHighlights.map((card) => (
                  <div key={card.title} className="bg-primary-foreground/10 border border-primary-foreground/15 rounded-2xl p-7 transition-all duration-300 hover:bg-primary-foreground/15">
                    <h3 className="font-display text-lg font-bold mb-3 text-secondary">{card.title}</h3>
                    <p className="text-primary-foreground/85 leading-relaxed text-sm md:text-base">{card.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ansatz & Radka */}
      <section className="section-padding bg-section-soft animate-fade-in">
        <div className="container-narrow mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            <div>
              <HeartHandshake className="h-8 w-8 text-accent mb-5" aria-hidden="true" />
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-6">Mein Ansatz</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>Ich vermittele nicht einfach nur Wissen über Demenz.</p>
                <p className="text-xl text-primary font-semibold">Ich übersetze Demenz in alltagstaugliche Lösungen.</p>
                <p>Mit meiner Erfahrung als Krankenschwester, meiner Zeit als Pflegedienstleitung und vielen Jahren in der Begleitung von Menschen mit Demenz weiß ich, wie komplex diese Situationen sein können – und wie sehr Angehörige darunter leiden, wenn niemand wirklich versteht, was zuhause gerade passiert.</p>
                <p>Ich schaue nicht nur auf den Menschen mit Demenz, sondern auf das gesamte Umfeld. Denn ein gutes Leben mit Demenz ist möglich, wenn die Menschen drumherum verstehen, was gebraucht wird und besser zusammenarbeiten.</p>
              </div>
            </div>
            <div>
              <span className="eyebrow">Über mich</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-6">Ich bin Radka</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>Demenzexpertin, Krankenschwester und ehemalige Pflegedienstleitung.</p>
                <p>Seit vielen Jahren begleite ich Menschen mit Demenz und ihre Familien.</p>
                <p>Meine Stärke ist es, komplexe Situationen verständlich zu machen, praktische Lösungen zu finden und Menschen wieder in mehr Sicherheit und Handlungsfähigkeit zu bringen.</p>
              </div>
              <blockquote className="font-display text-2xl md:text-3xl font-bold text-primary border-l-4 border-accent pl-5 mt-8">
                „Ich übersetze Demenz."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Kontakt */}
      <section className="section-padding animate-fade-in">
        <div className="container-narrow mx-auto text-center">
          <span className="eyebrow">Kontakt</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-5">
            Lass uns gemeinsam auf eure Situation schauen
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4 leading-relaxed">
            Wenn du merkst, dass die Betreuung zuhause immer belastender wird und du dir Unterstützung wünschst, dann schreib mir.
          </p>
          <p className="text-foreground max-w-2xl mx-auto mb-9 leading-relaxed">
            Über das Kontaktformular oder per E-Mail kannst du mir eure Situation kurz schildern. Ich melde mich bei dir und wir schauen gemeinsam, ob meine Begleitung für euch passend ist.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-full px-8 py-6 transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95">
              <Link to="/kontakt">
                <Mail className="h-5 w-5 mr-2" />
                Unverbindliche Anfrage senden
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold rounded-full px-8 py-6 transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95">
              <a href="https://wa.me/436645477490" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5 mr-2" />
                Alternativ per WhatsApp schreiben
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>

    <Footer />
  </div>
);

export default Betreuung24h;
