import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Phone, Calendar, Heart, Home, Building, ArrowRight, Users, BookOpen, GraduationCap, CheckCircle2, Quote, Download, FileText, Award, Globe, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const stats = [
  { value: "15+", label: "Jahre Erfahrung" },
  { value: "500+", label: "begleitete Familien" },
  { value: "Online", label: "im DACH-Raum" },
];

const targetGroups = [
  {
    icon: Heart,
    title: "Pflegende Angehörige",
    description: "Sie betreuen einen Menschen mit Demenz und fühlen sich überfordert? Ich helfe Ihnen.",
    href: "#angehoerige",
  },
  {
    icon: Home,
    title: "Familien mit 24h-Betreuung",
    description: "Ihre Betreuungsperson hat wenig Demenz-Expertise? Ich schule und berate.",
    href: "#betreuung",
  },
  {
    icon: Building,
    title: "Pflegeeinrichtungen",
    description: "Sie möchten Ihr Team im Umgang mit Demenz schulen? Ich komme zu Ihnen.",
    href: "#schulungen",
  },
];

const services = [
  {
    icon: Heart,
    title: "Für Angehörige",
    description: "Begleitung und Coaching für pflegende Angehörige – damit Sie den Alltag mit Demenz meistern.",
    features: ["Online-Begleitprogramm", "Einzelberatung", "Community"],
    href: "#angehoerige",
  },
  {
    icon: Home,
    title: "24h-Betreuung",
    description: "Schulung und Beratung für 24-Stunden-Betreuung bei Menschen mit Demenz.",
    features: ["Schulung der Betreuungsperson", "Aktivierungskonzept", "Qualitätssicherung"],
    href: "#betreuung",
  },
  {
    icon: GraduationCap,
    title: "Schulungen",
    description: "Praxisnahe Fortbildungen für Pflegepersonal, Einrichtungen und Ehrenamtliche.",
    features: ["Online-Workshops", "Vor-Ort-Seminare", "Individuelle Konzepte"],
    href: "/demenz-schulungen",
  },
];

const testimonials = [
  {
    quote: "Nach dem Begleitprogramm habe ich 80% weniger Konfliktsituationen mit meinem Vater. Ich weiß jetzt, wie ich reagieren muss.",
    name: "Thomas S.",
    role: "Sohn eines Demenzpatienten",
  },
  {
    quote: "Frau Eder hat unser gesamtes Team geschult. Die Zusammenarbeit mit unseren Demenz-Bewohnern hat sich spürbar verbessert.",
    name: "Pflegedienstleitung",
    role: "Seniorenheim Niederösterreich",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="FokusDemenz – Demenzbegleitung von Radka Eder"
        description="Professionelle Demenzbegleitung für Angehörige, 24h-Betreuung und Pflegeteams im DACH-Raum. Online & vor Ort in Österreich."
        canonical="https://www.fokusdemenz.at/"
      />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-secondary via-background to-gold-light relative overflow-hidden animate-fade-in">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          <div className="container-narrow mx-auto relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <span className="inline-block bg-accent/10 text-accent font-medium text-sm px-4 py-1.5 rounded-full mb-6 animate-fade-in">
                Ich übersetze Demenz
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 animate-fade-in" style={{ animationDelay: "100ms" }}>
                Demenzbegleitung, die{" "}
                <span className="text-accent">Orientierung schafft</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: "200ms" }}>
                Ich helfe Angehörigen, Betreuungspersonen und Pflegeteams, Demenz besser zu verstehen und den Alltag spürbar zu entlasten.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "300ms" }}>
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary-foreground font-semibold rounded-full px-8 py-6 text-base transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95">
                  <Calendar className="h-4 w-4 mr-2" />
                  Kostenlose Erstberatung
                </Button>
                <a href="tel:+436645477490">
                  <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold rounded-full px-8 py-6 text-base w-full transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95">
                    <Phone className="h-4 w-4 mr-2" />
                    +43 664 5477490
                  </Button>
                </a>
              </div>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 mt-16 animate-fade-in" style={{ animationDelay: "400ms" }}>
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Für wen ist FokusDemenz? */}
        <section className="section-padding bg-secondary/30 animate-fade-in" id="zielgruppen">
          <div className="container-narrow mx-auto">
            <div className="text-center mb-12 md:mb-16 animate-fade-in">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4">
                Für wen ist FokusDemenz?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Finden Sie das passende Angebot für Ihre Situation.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {targetGroups.map((group, index) => (
                <Card
                  key={group.title}
                  className="group bg-background border-border hover:border-accent/50 card-hover animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-8">
                    <div className="flex items-center justify-center w-16 h-16 bg-accent/10 rounded-2xl mb-6 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                      <group.icon className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-primary mb-3">
                      {group.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {group.description}
                    </p>
                    <Button variant="ghost" className="group/btn text-primary hover:text-accent p-0 h-auto font-semibold transition-all duration-200">
                      Mehr erfahren
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Meine Angebote */}
        <section className="section-padding bg-background animate-fade-in" id="angebote">
          <div className="container-narrow mx-auto">
            <div className="text-center mb-12 md:mb-16 animate-fade-in">
              <span className="inline-block bg-accent/10 text-accent font-medium text-sm px-4 py-1.5 rounded-full mb-4">
                Meine Angebote
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary">
                Wie ich Sie unterstütze
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {services.map((service, index) => (
                <Card key={service.title} className="group bg-card border-border hover:border-accent/50 card-hover animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardContent className="p-8">
                    <div className="flex items-center justify-center w-14 h-14 bg-accent/10 rounded-2xl mb-6 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                      <service.icon className="h-7 w-7 text-accent" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-primary mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Button variant="ghost" className="group/btn text-primary hover:text-accent p-0 h-auto font-semibold transition-all duration-200">
                      Mehr erfahren
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Über mich */}
        <section className="section-padding bg-secondary animate-fade-in" id="ueber-mich">
          <div className="container-narrow mx-auto">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
              <div>
                <span className="inline-block bg-accent/10 text-accent font-medium text-sm px-4 py-1.5 rounded-full mb-4 animate-fade-in">
                  Über mich
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-2 animate-fade-in" style={{ animationDelay: "100ms" }}>
                  Radka Eder
                </h2>
                <p className="text-accent font-medium mb-6 animate-fade-in" style={{ animationDelay: "150ms" }}>Demenzexpertin & Trainerin</p>
                <blockquote className="font-display text-xl italic text-primary mb-6 border-l-4 border-accent pl-4 animate-fade-in" style={{ animationDelay: "200ms" }}>
                  „Ich übersetze Demenz"
                </blockquote>
                <p className="text-muted-foreground leading-relaxed mb-6 animate-fade-in" style={{ animationDelay: "250ms" }}>
                  Als diplomierte Gesundheits- und Krankenpflegerin mit über 15 Jahren Erfahrung in der Altenpflege habe ich mich auf Demenzbegleitung spezialisiert. Ich mache komplexes Wissen verständlich und gebe praktische Werkzeuge an die Hand.
                </p>
                <div className="flex flex-wrap gap-3 mb-8 animate-fade-in" style={{ animationDelay: "300ms" }}>
                  {["Dipl. Gesundheits- und Krankenpflegerin", "Demenztrainerin", "Buchautorin"].map((tag) => (
                    <span key={tag} className="bg-accent/10 text-accent text-sm font-medium px-3 py-1.5 rounded-full transition-all duration-200 hover:bg-accent/20">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="animate-fade-in" style={{ animationDelay: "350ms" }}>
                  <Button variant="ghost" className="group/btn text-primary hover:text-accent p-0 h-auto font-semibold transition-all duration-200">
                    Mehr über mich
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
              <div className="flex justify-center animate-scale-in" style={{ animationDelay: "200ms" }}>
                <div className="relative">
                  <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl bg-gradient-to-br from-accent/20 to-primary/10 flex items-center justify-center transition-transform duration-300 hover:scale-105">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="font-display text-3xl font-bold text-primary">RE</span>
                      </div>
                      <p className="font-semibold text-primary">Radka Eder</p>
                      <p className="text-sm text-muted-foreground">Demenzexpertin</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section-padding bg-background animate-fade-in" id="referenzen">
          <div className="container-narrow mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary text-center mb-14 animate-fade-in">
              Was Kunden sagen
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {testimonials.map((t, i) => (
                <div key={i} className="bg-card border border-border rounded-2xl p-8 relative card-hover animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
                  <Quote className="h-8 w-8 text-accent/30 mb-4" />
                  <p className="text-foreground leading-relaxed mb-6 italic">"{t.quote}"</p>
                  <div>
                    <p className="font-semibold text-primary">{t.name}</p>
                    <p className="text-sm text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gratis PDF */}
        <section className="section-padding bg-gold-light animate-fade-in" id="ressourcen">
          <div className="container-narrow mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
              <div>
                <span className="inline-block bg-accent/10 text-accent font-medium text-sm px-4 py-1.5 rounded-full mb-4 animate-fade-in">
                  Gratis PDF
                </span>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-primary mb-4 animate-fade-in" style={{ animationDelay: "100ms" }}>
                  40 Aktivierungsideen für Menschen mit Demenz
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
                  Laden Sie mein kostenloses PDF mit praktischen Aktivierungsideen herunter. Sofort umsetzbar und speziell für den Alltag mit Demenz entwickelt.
                </p>
                <div className="animate-fade-in" style={{ animationDelay: "300ms" }}>
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary-foreground font-semibold rounded-full px-8 py-6 text-base transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95">
                    <Download className="h-4 w-4 mr-2" />
                    Jetzt kostenlos herunterladen
                  </Button>
                </div>
              </div>
              <div className="flex justify-center animate-scale-in" style={{ animationDelay: "200ms" }}>
                <div className="bg-background border border-border rounded-2xl p-8 text-center shadow-lg transition-transform duration-300 hover:scale-105 hover:-rotate-1">
                  <FileText className="h-16 w-16 text-accent mx-auto mb-4" />
                  <p className="text-3xl font-bold text-primary mb-1">40 Ideen</p>
                  <p className="text-muted-foreground">PDF Guide</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-primary text-primary-foreground animate-fade-in" id="kontakt">
          <div className="container-narrow mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
              Bereit für den ersten Schritt?
            </h2>
            <p className="text-primary-foreground/70 max-w-2xl mx-auto mb-10 text-lg animate-fade-in" style={{ animationDelay: "100ms" }}>
              In einem kostenlosen 15-Minuten-Gespräch besprechen wir Ihre Situation und finden heraus, wie ich Sie am besten unterstützen kann.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "200ms" }}>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary-foreground font-semibold rounded-full px-8 py-6 text-base transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95">
                <Calendar className="h-4 w-4 mr-2" />
                Kostenlose Erstberatung
              </Button>
              <a href="tel:+436645477490" className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-all duration-300 hover:scale-105 font-medium border border-primary-foreground/20 rounded-full px-8 py-3">
                <Phone className="h-4 w-4" />
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

export default Index;
