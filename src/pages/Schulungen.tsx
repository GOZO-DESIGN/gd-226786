import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Phone, Building2, Users, Heart, Landmark, BookOpen, MessageCircle, ShieldAlert, Activity, Scale, UserCheck, Globe, MapPin, CheckCircle2, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const targetGroups = [
  {
    icon: Building2,
    title: "Pflegeeinrichtungen",
    description: "Pflegeheime, Tageszentren, betreutes Wohnen – alle Mitarbeitergruppen",
  },
  {
    icon: Users,
    title: "24h-Betreuungsagenturen",
    description: "Schulung von Betreuungspersonen für den Einsatz bei Menschen mit Demenz",
  },
  {
    icon: Heart,
    title: "Ehrenamtliche",
    description: "Besuchsdienste, Hospizbegleitung, Nachbarschaftshilfe",
  },
  {
    icon: Landmark,
    title: "Gemeinden & Kommunen",
    description: "Sensibilisierung von Mitarbeitern in Ämtern und öffentlichen Einrichtungen",
  },
];

const schulungsinhalte = [
  { icon: BookOpen, text: "Demenz verstehen: Formen, Verlauf, Symptome" },
  { icon: MessageCircle, text: "Kommunikation mit Menschen mit Demenz" },
  { icon: ShieldAlert, text: "Umgang mit herausforderndem Verhalten" },
  { icon: Activity, text: "Aktivierung und Beschäftigung" },
  { icon: UserCheck, text: "Validation und Biografiearbeit" },
  { icon: Heart, text: "Selbstfürsorge für Betreuende" },
  { icon: Scale, text: "Rechtliche Grundlagen" },
  { icon: Users, text: "Angehörigenarbeit" },
];

const onlineFeatures = ["Keine Reisekosten", "Mehr Teilnehmer möglich", "Aufzeichnung optional", "Flexible Termine"];
const vorOrtFeatures = ["Direkte Interaktion", "Praxisübungen", "Teambuilding-Effekt", "Individuelle Anpassung"];

const testimonials = [
  {
    quote: "Frau Eder hat unser gesamtes Team geschult – von der Pflege bis zur Küche. Die Zusammenarbeit mit unseren Demenz-Bewohnern hat sich spürbar verbessert.",
    role: "Pflegedienstleitung",
    org: "Seniorenheim Niederösterreich",
  },
  {
    quote: "Endlich eine Schulung, die praxisnah ist. Unsere Betreuungspersonen können das Gelernte sofort anwenden.",
    role: "Geschäftsführung",
    org: "24h-Betreuungsagentur Wien",
  },
];

const Schulungen = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-secondary via-background to-gold-light relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          <div className="container-narrow mx-auto text-center relative z-10">
            <span className="inline-block bg-accent/10 text-accent font-medium text-sm px-4 py-1.5 rounded-full mb-6 animate-fade-in">
              Für Organisationen
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-2 animate-fade-in" style={{ animationDelay: "100ms" }}>
              Demenz-Schulungen &
            </h1>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-accent mb-6 animate-fade-in" style={{ animationDelay: "100ms" }}>
              Workshops
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: "200ms" }}>
              Praxisnahe Fortbildungen für Pflegepersonal, Betreuungspersonen, Ehrenamtliche und alle, die mit Menschen mit Demenz arbeiten.
            </p>
            <div className="animate-fade-in" style={{ animationDelay: "300ms" }}>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary-foreground font-semibold rounded-full px-8 py-6 text-base">
                <Phone className="h-4 w-4 mr-2" />
                Anfrage senden
              </Button>
            </div>
          </div>
        </section>

        {/* Für wen */}
        <section className="section-padding bg-background">
          <div className="container-narrow mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary text-center mb-14">
              Für wen sind die Schulungen?
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {targetGroups.map((group) => (
                <div key={group.title} className="border border-border rounded-2xl p-6 text-center card-hover bg-card">
                  <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                    <group.icon className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-primary mb-2">{group.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{group.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Schulungsinhalte */}
        <section className="section-padding bg-secondary">
          <div className="container-narrow mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary text-center mb-4">
              Schulungsinhalte
            </h2>
            <p className="text-muted-foreground text-center mb-12">
              Alle Themen werden praxisnah und interaktiv vermittelt.
            </p>
            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-5 max-w-3xl mx-auto">
              {schulungsinhalte.map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-5 w-5 text-accent" />
                  </div>
                  <span className="text-foreground font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Formate */}
        <section className="section-padding bg-background">
          <div className="container-narrow mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary text-center mb-14">Formate</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="border border-border rounded-2xl p-8 card-hover bg-card">
                <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-5">
                  <Globe className="h-7 w-7 text-accent" />
                </div>
                <h3 className="font-display text-xl font-semibold text-primary mb-2">Online-Workshops</h3>
                <p className="text-muted-foreground mb-6">Live-Schulungen via Zoom oder Teams. Interaktiv, praktisch, flexibel.</p>
                <ul className="space-y-3">
                  {onlineFeatures.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border border-border rounded-2xl p-8 card-hover bg-card">
                <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-5">
                  <MapPin className="h-7 w-7 text-accent" />
                </div>
                <h3 className="font-display text-xl font-semibold text-primary mb-2">Vor-Ort-Seminare</h3>
                <p className="text-muted-foreground mb-6">Präsenzschulungen in Ihrer Einrichtung in Österreich.</p>
                <ul className="space-y-3">
                  {vorOrtFeatures.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Referenzen */}
        <section className="section-padding bg-secondary">
          <div className="container-narrow mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary text-center mb-14">Referenzen</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {testimonials.map((t, i) => (
                <div key={i} className="bg-card border border-border rounded-2xl p-8 relative">
                  <Quote className="h-8 w-8 text-accent/30 mb-4" />
                  <p className="text-foreground leading-relaxed mb-6 italic">"{t.quote}"</p>
                  <div>
                    <p className="font-semibold text-primary">{t.role}</p>
                    <p className="text-sm text-muted-foreground">{t.org}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-narrow mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Individuelle Schulung für Ihre Organisation
            </h2>
            <p className="text-primary-foreground/70 max-w-xl mx-auto mb-10 text-lg">
              Ich erstelle ein maßgeschneidertes Schulungskonzept für Ihre Einrichtung. Kontaktieren Sie mich für ein unverbindliches Angebot.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary-foreground font-semibold rounded-full px-8 py-6 text-base">
                <Phone className="h-4 w-4 mr-2" />
                Anfrage senden
              </Button>
              <a href="tel:+436645477490" className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors font-medium border border-primary-foreground/20 rounded-full px-8 py-3">
                +43 664 5477490
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Schulungen;
