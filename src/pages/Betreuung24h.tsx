import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { NachtunruheLeadMagnet } from "@/components/NachtunruheLeadMagnet";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MessageCircle, AlertTriangle, Tv, MessageSquareWarning, GraduationCap, Users, ClipboardList, CheckCircle, ArrowRight, Quote } from "lucide-react";
import seniorenbetreuung from "@/assets/seniorenbetreuung.webp";

const problems = [
  {
    icon: AlertTriangle,
    title: "Fehlende Demenz-Expertise",
    description: "Viele Betreuungspersonen haben keine spezielle Ausbildung im Umgang mit Demenz und reagieren falsch auf herausforderndes Verhalten.",
  },
  {
    icon: Tv,
    title: "Keine sinnvolle Aktivierung",
    description: "Der Tag vergeht ohne Struktur. Ihr Angehöriger sitzt vor dem Fernseher statt aktiviert und gefördert zu werden.",
  },
  {
    icon: MessageSquareWarning,
    title: "Kommunikationsprobleme",
    description: "Missverständnisse zwischen Ihnen und der Betreuungsperson führen zu Frustration auf allen Seiten.",
  },
];

const solutions = [
  {
    icon: GraduationCap,
    title: "Schulung der Betreuungsperson",
    description: "Ich schule Ihre Betreuungsperson online im Umgang mit Demenz – praktisch, verständlich und sofort anwendbar.",
    features: ["Demenz verstehen", "Kommunikationstechniken", "Aktivierungsideen", "Krisenmanagement"],
  },
  {
    icon: Users,
    title: "Beratung für Angehörige",
    description: "Sie lernen, die Betreuungsqualität zu beurteilen und die Zusammenarbeit zu optimieren.",
    features: ["Qualitätskriterien", "Kommunikation mit Agentur", "Dokumentation", "Ihre Rechte"],
  },
  {
    icon: ClipboardList,
    title: "Aktivierungskonzept",
    description: "Ich erstelle einen individuellen Aktivierungsplan für Ihren Angehörigen, den die Betreuungsperson umsetzen kann.",
    features: ["Tagesstruktur", "Biografiearbeit", "Bewegung", "Kognitive Aktivierung"],
  },
];

const benefits = [
  "Bessere Betreuungsqualität für Ihren Angehörigen",
  "Weniger Konflikte und Missverständnisse",
  "Kompetentere, zufriedenere Betreuungsperson",
  "Mehr Sicherheit für Sie, auch aus der Ferne",
  "Reduzierte Wechselhäufigkeit der Betreuung",
  "Dokumentation und Transparenz",
];

const Betreuung24h = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="24-Stunden-Betreuung bei Demenz"
        description="Schulung und Beratung für 24h-Betreuung bei Menschen mit Demenz. Betreuungsperson schulen, Aktivierungskonzept erstellen, Qualität verbessern."
        canonical="https://www.fokusdemenz.at/24h-betreuung"
      />
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-secondary/60 via-background to-background animate-fade-in">
        <div className="container-narrow mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <span className="eyebrow">24-Stunden-Betreuung</span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight animate-fade-in" style={{ animationDelay: "100ms" }}>
                24-Stunden-Betreuung bei Demenz
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto md:mx-0 mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: "200ms" }}>
                Sie haben eine 24h-Betreuung organisiert, aber die Betreuungsperson hat wenig Demenz-Expertise? Ich helfe Ihnen, die Betreuungsqualität zu verbessern.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "300ms" }}>
                <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base px-8 py-6 transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95">
                  <a href="/kontakt">
                    <Mail className="h-4 w-4 mr-2" />
                    Per Kontaktformular
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold text-base px-8 py-6 transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95">
                  <a href="https://wa.me/436645477490" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Nachricht via WhatsApp
                  </a>
                </Button>
              </div>
            </div>
            <div className="flex justify-center animate-scale-in" style={{ animationDelay: "400ms" }}>
              <img
                src={seniorenbetreuung}
                alt="Begleitung von Senioren bei der 24-Stunden-Betreuung"
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

      {/* Problems */}
      <section className="section-padding animate-fade-in">
        <div className="container-narrow mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4">
              Warum 24h-Betreuung oft nicht ausreicht
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Eine Betreuungsperson vor Ort zu haben ist wichtig – aber ohne Demenz-Wissen entstehen Probleme.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {problems.map((problem, index) => (
              <Card key={problem.title} className="bg-background border-border card-hover animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-8 text-center">
                  <problem.icon className="h-8 w-8 text-primary/70 mx-auto mb-6" />
                  <h3 className="font-display text-xl font-semibold text-primary mb-3">{problem.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="section-padding bg-section-soft animate-fade-in">
        <div className="container-narrow mx-auto">
          <div className="text-center mb-12">
            <span className="eyebrow">Meine Lösung</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4">
              So verbessere ich Ihre 24h-Betreuung
            </h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card key={solution.title} className="group bg-background border-border hover:border-primary/20 card-hover animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-8 flex flex-col h-full">
                  <solution.icon className="h-8 w-8 text-primary mb-6" />
                  <h3 className="font-display text-xl font-semibold text-primary mb-3">{solution.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{solution.description}</p>
                  <ul className="space-y-3 mt-auto">
                    {solution.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-foreground">
                        <CheckCircle className="h-5 w-5 text-primary/60 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding animate-fade-in">
        <div className="container-narrow mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4">
              Ihre Vorteile
            </h2>
          </div>
          <div className="max-w-2xl mx-auto grid sm:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={benefit} className="flex items-start gap-3 p-4 rounded-xl bg-section-soft card-hover animate-fade-in" style={{ animationDelay: `${index * 80}ms` }}>
                <CheckCircle className="h-6 w-6 text-primary/60 flex-shrink-0 mt-0.5" />
                <span className="text-foreground font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="section-padding bg-section-soft animate-fade-in">
        <div className="container-narrow mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4">
              Praxisbeispiel
            </h2>
          </div>
          <Card className="max-w-3xl mx-auto bg-background border-border card-hover animate-fade-in">
            <CardContent className="p-8 md:p-10 space-y-6">
              <div>
                <h3 className="font-display text-lg font-semibold text-primary mb-2">Situation:</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Familie M. hatte eine 24h-Betreuung für ihre Mutter mit Demenz. Die Betreuungsperson war überfordert mit den Verhaltensänderungen und wollte kündigen.
                </p>
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-primary mb-2">Lösung:</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ich schulte die Betreuungsperson online in Demenz-Kommunikation und erstellte einen Aktivierungsplan.
                </p>
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-primary mb-2">Ergebnis:</h3>
                <p className="text-foreground leading-relaxed font-medium">
                  Die Betreuungsperson blieb, die Mutter wurde aktiver und die Familie hatte endlich Ruhe. Die Betreuung läuft seit 8 Monaten stabil.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Lead Magnet */}
      <NachtunruheLeadMagnet />

      {/* CTA */}
      <section className="section-padding animate-fade-in">
        <div className="container-narrow mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4">
            Verbessern Sie Ihre 24h-Betreuung
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Schreiben Sie mir – ich melde mich in der Regel innerhalb von 24 Stunden persönlich bei Ihnen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base px-8 py-6 transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95">
              <a href="/kontakt">
                <Mail className="mr-2 h-5 w-5" />
                Per Kontaktformular
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold text-base px-8 py-6 transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95">
              <a href="https://wa.me/436645477490" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Nachricht via WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Betreuung24h;
