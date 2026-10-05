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

const programmeContents = [
  "Regelmäßige Live-Begleitung",
  "Gemeinsame Fallbesprechungen zu eurer konkreten Situation",
  "Hilfe für typische schwierige Situationen bei Demenz",
  "Verständliche Erklärungen statt komplizierter Fachsprache",
  "Praktische Anleitungen für den Alltag",
  "Viele leicht umsetzbare Ideen für Aktivierung und Beschäftigung",
  "Unterstützung in der Kommunikation mit der Betreuungskraft",
  "Orientierung für dich als Angehörige oder Angehöriger",
  "Hilfreiche Materialien zur direkten Umsetzung",
  "Zugang zu einer Community mit Fragemöglichkeit",
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
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-secondary/60 via-background to-background animate-fade-in">
        <div className="container-narrow mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="text-center md:text-left">
              <span className="eyebrow">Begleitprogramm bei Demenz und 24h-Betreuung</span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
                Wenn die Betreuung zuhause immer schwieriger wird, musst du das nicht allein tragen
              </h1>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed mb-8">
                <p>Du hast für deine Mutter oder deinen Vater eine 24h-Betreuung organisiert – und trotzdem wird es nicht ruhiger.</p>
                <p>Vielleicht kommt die Betreuungskraft mit der Demenz nicht gut zurecht. Vielleicht gibt es immer wieder Missverständnisse, Unruhe oder Streit.</p>
                <p>Vielleicht fühlst du dich für alles verantwortlich, obwohl du selbst nicht vor Ort bist und dein eigenes Leben, deine Arbeit und deine Familie trägst.</p>
              </div>
              <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-full px-8 py-6 transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95">
                <Link to="/kontakt">
                  Unverbindliche Anfrage senden
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
            <div className="flex justify-center animate-scale-in">
              <img
                src={seniorenbetreuung}
                alt="Begleitung einer Familie bei Demenz und 24h-Betreuung zuhause"
                className="rounded-3xl shadow-xl w-full max-w-md object-cover aspect-[4/3]"
                loading="eager"
                fetchPriority="high"
                width={448}
                height={336}
              />
            </div>
          </div>
          <p className="max-w-3xl mt-10 md:mt-14 text-lg md:text-xl text-foreground font-medium leading-relaxed">
            Wenn du merkst, dass die Betreuung zuhause immer belastender wird, begleite ich dich dabei, wieder mehr Sicherheit, Orientierung und Stabilität in diese Situation zu bringen.
          </p>
        </div>
      </section>

      <section className="section-padding animate-fade-in">
        <div className="container-narrow mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <span className="eyebrow">Für dich und deine Familie</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-5">
                Für wen dieses Begleitprogramm gedacht ist
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Dieses Angebot richtet sich an Töchter und Söhne von Menschen mit Demenz, die eine 24h-Betreuung für Mutter oder Vater organisiert haben und merken, dass die Situation zuhause an ihre Grenzen kommt.
              </p>
              <p className="text-foreground font-semibold text-lg">
                Genau in solchen Situationen unterstützt dich mein Begleitprogramm.
              </p>
            </div>
            <ul className="grid sm:grid-cols-2 gap-4" aria-label="Typische Herausforderungen">
              {challenges.map((item) => (
                <li key={item} className="flex items-start gap-3 border-b border-border pb-4">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-padding bg-section-soft animate-fade-in">
        <div className="container-narrow mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Sparkles className="h-8 w-8 text-accent mx-auto mb-5" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-5">
              Was sich durch die Begleitung verändern kann
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Mein Ziel ist nicht, dich mit noch mehr Informationen zu überladen. Mein Ziel ist, dass du dich sicherer fühlst und klarer handeln kannst.
            </p>
          </div>
          <ul className="max-w-4xl mx-auto grid md:grid-cols-2 gap-x-12 gap-y-5">
            {changes.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <ShieldCheck className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
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

      <section className="section-padding animate-fade-in">
        <div className="container-narrow mx-auto">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-16 items-start">
            <div>
              <span className="eyebrow">6 bis 8 Wochen</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-5">
                Was du im Begleitprogramm bekommst
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Das Begleitprogramm begleitet dich dabei, die Betreuungssituation zuhause Schritt für Schritt zu stabilisieren.
              </p>
              <div className="flex items-start gap-3 text-foreground font-medium">
                <Users className="h-6 w-6 text-accent flex-shrink-0" />
                <p>Wenn sinnvoll, können auch weitere Familienmitglieder einbezogen werden, damit nicht alles an einer Person hängen bleibt.</p>
              </div>
            </div>
            <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-4">
              {programmeContents.map((item) => (
                <li key={item} className="flex items-start gap-3 border-b border-border pb-4">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-padding bg-section-soft animate-fade-in">
        <div className="container-narrow mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            <div>
              <HeartHandshake className="h-8 w-8 text-accent mb-5" />
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-5">Mein Ansatz</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>Ich vermittele nicht einfach nur Wissen über Demenz.</p>
                <p className="text-xl text-primary font-semibold">Ich übersetze Demenz in alltagstaugliche Lösungen.</p>
                <p>Mit meiner Erfahrung als Krankenschwester, meiner Zeit als Pflegedienstleitung und vielen Jahren in der Begleitung von Menschen mit Demenz weiß ich, wie komplex diese Situationen sein können – und wie sehr Angehörige darunter leiden, wenn niemand wirklich versteht, was zuhause gerade passiert.</p>
                <p>Ich schaue nicht nur auf den Menschen mit Demenz, sondern auf das gesamte Umfeld. Denn ein gutes Leben mit Demenz ist möglich, wenn die Menschen drumherum verstehen, was gebraucht wird und besser zusammenarbeiten.</p>
              </div>
            </div>
            <div>
              <span className="eyebrow">Über mich</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-5">Ich bin Radka</h2>
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

      <section className="section-padding animate-fade-in">
        <div className="container-narrow mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <XCircle className="h-8 w-8 text-primary/60 mx-auto mb-5" />
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary">
                Für wen dieses Angebot nicht gedacht ist
              </h2>
            </div>
            <ul className="grid sm:grid-cols-2 gap-x-12 gap-y-4">
              {notSuitableFor.map((item) => (
                <li key={item} className="flex items-start gap-3 border-b border-border pb-4">
                  <span className="h-2 w-2 rounded-full bg-primary/60 flex-shrink-0 mt-2.5" />
                  <span className="text-muted-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-padding bg-section-soft animate-fade-in">
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
          <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-full px-8 py-6 transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95">
            <Link to="/kontakt">
              <Mail className="h-5 w-5 mr-2" />
              Unverbindliche Anfrage senden
            </Link>
          </Button>
          <div className="mt-5">
            <a href="https://wa.me/436645477490" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-primary font-semibold hover:underline">
              <MessageCircle className="h-4 w-4 mr-2" />
              Alternativ per WhatsApp schreiben
            </a>
          </div>
        </div>
      </section>
    </main>

    <Footer />
  </div>
);

export default Betreuung24h;