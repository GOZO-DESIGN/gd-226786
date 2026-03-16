import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Mail, MessageCircle, Building2, Users, Heart, Landmark, BookOpen, MessageCircle as MessageIcon, ShieldAlert, Activity, Scale, UserCheck, Globe, MapPin, CheckCircle2, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import schulungenStage from "@/assets/schulungen-stage.webp";

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
  { icon: MessageIcon, text: "Kommunikation mit Menschen mit Demenz" },
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
      <SEO
        title="Demenz-Schulungen & Workshops"
        description="Praxisnahe Demenz-Fortbildungen für Pflegepersonal, 24h-Betreuungsagenturen und Ehrenamtliche. Online-Workshops & Vor-Ort-Seminare in Österreich."
        canonical="https://www.fokusdemenz.at/demenz-schulungen"
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-secondary/60 via-background to-background relative overflow-hidden animate-fade-in">
          <div className="container-narrow mx-auto relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-center md:text-left">
                <span className="eyebrow">Für Organisationen</span>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 animate-fade-in" style={{ animationDelay: "100ms" }}>
                  Demenz-Schulungen & Workshops
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0 mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: "200ms" }}>
                  Praxisnahe Fortbildungen für Pflegepersonal, Betreuungspersonen, Ehrenamtliche und alle, die mit Menschen mit Demenz arbeiten.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "300ms" }}>
                  <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full px-8 py-6 text-base transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95">
                    <a href="mailto:info@fokusdemenz.at">
                      <Mail className="h-4 w-4 mr-2" />
                      Per E-Mail anfragen
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold rounded-full px-8 py-6 text-base transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95">
                    <a href="https://wa.me/436645477490" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Nachricht via WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
              <div className="flex justify-center animate-scale-in" style={{ animationDelay: "400ms" }}>
                <img
                  src={schulungenStage}
                  alt="Radka Eder bei einer Demenz-Schulung auf der Bühne"
                  className="rounded-3xl shadow-xl w-full max-w-md object-cover aspect-[4/3]"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Für wen */}
        <section className="section-padding bg-background animate-fade-in">
          <div className="container-narrow mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary text-center mb-14">
              Für wen sind die Schulungen?
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {targetGroups.map((group, index) => (
                <div key={group.title} className="group border border-border rounded-2xl p-6 text-center card-hover bg-card animate-fade-in" style={{ animationDelay: `${index * 80}ms` }}>
                  <group.icon className="h-8 w-8 text-primary mx-auto mb-5" />
                  <h3 className="font-display text-lg font-semibold text-primary mb-2">{group.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{group.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Schulungsinhalte */}
        <section className="section-padding bg-section-soft animate-fade-in">
          <div className="container-narrow mx-auto">
            <span className="eyebrow text-center">Inhalte</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary text-center mb-4">
              Schulungsinhalte
            </h2>
            <p className="text-muted-foreground text-center mb-12">
              Alle Themen werden praxisnah und interaktiv vermittelt.
            </p>
            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-5 max-w-3xl mx-auto">
              {schulungsinhalte.map((item, index) => (
                <div key={item.text} className="group flex items-center gap-3 animate-fade-in" style={{ animationDelay: `${index * 60}ms` }}>
                  <item.icon className="h-5 w-5 text-primary/60 flex-shrink-0" />
                  <span className="text-foreground font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Formate */}
        <section className="section-padding bg-background animate-fade-in">
          <div className="container-narrow mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary text-center mb-14">Formate</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="group border border-border rounded-2xl p-8 card-hover bg-card animate-fade-in">
                <Globe className="h-8 w-8 text-primary mb-5" />
                <h3 className="font-display text-xl font-semibold text-primary mb-2">Online-Workshops</h3>
                <p className="text-muted-foreground mb-6">Live-Schulungen via Zoom oder Teams. Interaktiv, praktisch, flexibel.</p>
                <ul className="space-y-3">
                  {onlineFeatures.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-primary/60 flex-shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="group border border-border rounded-2xl p-8 card-hover bg-card animate-fade-in" style={{ animationDelay: "100ms" }}>
                <MapPin className="h-8 w-8 text-primary mb-5" />
                <h3 className="font-display text-xl font-semibold text-primary mb-2">Vor-Ort-Seminare</h3>
                <p className="text-muted-foreground mb-6">Präsenzschulungen in Ihrer Einrichtung in Österreich.</p>
                <ul className="space-y-3">
                  {vorOrtFeatures.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-primary/60 flex-shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Referenzen */}
        <section className="section-padding bg-section-soft animate-fade-in">
          <div className="container-narrow mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary text-center mb-14">Referenzen</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {testimonials.map((t, i) => (
                <div key={i} className="bg-background border border-border rounded-2xl p-8 relative card-hover animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
                  <Quote className="h-8 w-8 text-primary/20 mb-4" />
                  <p className="text-foreground leading-relaxed mb-6 italic">„{t.quote}"</p>
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
        <section className="section-padding animate-fade-in">
          <div className="container-narrow mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4">
              Individuelle Schulung für Ihre Organisation
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-10 text-lg">
              Ich erstelle ein maßgeschneidertes Schulungskonzept für Ihre Einrichtung. Schreiben Sie mir für ein unverbindliches Angebot.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full px-8 py-6 text-base transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95">
                <a href="mailto:info@fokusdemenz.at">
                  <Mail className="h-4 w-4 mr-2" />
                  Per E-Mail anfragen
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="px-8 py-6 text-base border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95">
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
