import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { PressLogos } from "@/components/PressLogos";
import { NachtunruheLeadMagnet } from "@/components/NachtunruheLeadMagnet";
import { Mail, MessageCircle, Heart, Home, Building, ArrowRight, GraduationCap, CheckCircle2, Quote, Download, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const publicAsset = (path: string) => `${import.meta.env.BASE_URL}${path}`;
const homepageEinleitung = publicAsset("assets/homepage-einleitung.webp");
const radkaPortrait = publicAsset("assets/radka-portrait.webp");
const buchCover = publicAsset("assets/buch-cover.webp");

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
    href: "/fuer-angehoerige",
  },
  {
    icon: Home,
    title: "Familien mit 24h-Betreuung",
    description: "Ihre Betreuungsperson hat wenig Demenz-Expertise? Ich schule und berate.",
    href: "/24h-betreuung",
  },
  {
    icon: Building,
    title: "Pflegeeinrichtungen",
    description: "Sie möchten Ihr Team im Umgang mit Demenz schulen? Ich komme zu Ihnen.",
    href: "/demenz-schulungen",
  },
];

const services = [
  {
    icon: Heart,
    title: "Für Angehörige",
    description: "Begleitung und Coaching für pflegende Angehörige – damit Sie den Alltag mit Demenz meistern.",
    features: ["Online-Begleitprogramm", "Einzelberatung", "Community"],
    href: "/fuer-angehoerige",
  },
  {
    icon: Home,
    title: "24h-Betreuung",
    description: "Schulung und Beratung für 24-Stunden-Betreuung bei Menschen mit Demenz.",
    features: ["Schulung der Betreuungsperson", "Aktivierungskonzept", "Qualitätssicherung"],
    href: "/24h-betreuung",
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
      <main id="main-content">
        {/* Hero Section */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-secondary/60 via-background to-background relative overflow-hidden animate-fade-in">
          <div className="container-narrow mx-auto relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-center md:text-left">
                <h1 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-foreground leading-[1.15] mb-6 animate-fade-in" style={{ animationDelay: "100ms" }}>
                  Demenz verstehen.
                  <br />
                  <span className="text-primary">Alltag meistern.</span>
                  <br />
                  <span className="text-muted-foreground font-medium text-3xl md:text-4xl lg:text-[2.5rem]">Orientierung finden.</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto md:mx-0 mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: "200ms" }}>
                  Ich helfe Angehörigen, Betreuungspersonen und Pflegeteams, Demenz besser zu verstehen und den Alltag spürbar zu entlasten.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in" style={{ animationDelay: "300ms" }}>
                  <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full px-8 py-6 text-base transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95">
                    <Link to="/kontakt">
                      <Mail className="h-4 w-4 mr-2" />
                      Per Kontaktformular
                    </Link>
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
                  src={homepageEinleitung}
                  alt="Radka Eder bei der Demenzbegleitung mit Senioren"
                  className="rounded-3xl shadow-xl w-full max-w-md object-cover aspect-[4/3]"
                  loading="eager"
                  fetchPriority="high"
                  width={448}
                  height={336}
                />
              </div>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 mt-16 animate-fade-in" style={{ animationDelay: "400ms" }}>
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-accent">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Für wen ist FokusDemenz? */}
        <section className="section-padding bg-section-soft animate-fade-in" id="zielgruppen">
          <div className="container-narrow mx-auto">
            <div className="text-center mb-12 md:mb-16">
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
                  className="group bg-background border-border hover:border-primary/20 card-hover animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-8">
                    <group.icon className="h-8 w-8 text-primary mb-6" />
                    <h3 className="font-display text-xl font-semibold text-primary mb-3">
                      {group.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {group.description}
                    </p>
                    <Button asChild variant="ghost" className="group/btn text-primary hover:text-primary p-0 h-auto font-semibold">
                      <Link to={group.href}>
                        Mehr erfahren
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
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
            <div className="text-center mb-12 md:mb-16">
              <span className="eyebrow">Meine Angebote</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary">
                Wie ich Sie unterstütze
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {services.map((service, index) => (
                <Card key={service.title} className="group bg-card border-border hover:border-primary/20 card-hover animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardContent className="p-8">
                    <service.icon className="h-8 w-8 text-primary mb-6" />
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
                    <Button asChild variant="ghost" className="group/btn text-primary hover:text-primary p-0 h-auto font-semibold">
                      <Link to={service.href}>
                        Mehr erfahren
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Über mich */}
        <section className="section-padding bg-section-soft animate-fade-in" id="ueber-mich">
          <div className="container-narrow mx-auto">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
              <div>
                <span className="eyebrow">Über mich</span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-2 animate-fade-in" style={{ animationDelay: "100ms" }}>
                  Radka Eder
                </h2>
                <p className="text-muted-foreground font-medium mb-6 animate-fade-in" style={{ animationDelay: "150ms" }}>Demenzexpertin & Trainerin</p>
                <blockquote className="font-display text-xl italic text-primary/80 mb-6 border-l-4 border-gold pl-4 animate-fade-in" style={{ animationDelay: "200ms" }}>
                  „Ich übersetze Demenz"
                </blockquote>
                <p className="text-muted-foreground leading-relaxed mb-6 animate-fade-in" style={{ animationDelay: "250ms" }}>
                  Als diplomierte Gesundheits- und Krankenpflegerin mit über 15 Jahren Erfahrung in der Altenpflege habe ich mich auf Demenzbegleitung spezialisiert. Ich mache komplexes Wissen verständlich und gebe praktische Werkzeuge an die Hand.
                </p>
                <div className="flex flex-wrap gap-3 mb-8 animate-fade-in" style={{ animationDelay: "300ms" }}>
                  {["Dipl. Gesundheits- und Krankenpflegerin", "Demenztrainerin", "Buchautorin"].map((tag) => (
                    <span key={tag} className="bg-primary/8 text-primary text-sm font-medium px-3 py-1.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="animate-fade-in" style={{ animationDelay: "350ms" }}>
                  <Button asChild variant="ghost" className="group/btn text-primary hover:text-primary p-0 h-auto font-semibold">
                    <Link to="/ueber-mich">
                      Mehr über mich
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="flex justify-center animate-scale-in" style={{ animationDelay: "200ms" }}>
                <img
                  src={radkaPortrait}
                  alt="Radka Eder – Demenzexpertin und Trainerin"
                  className="w-64 h-80 md:w-80 md:h-96 rounded-3xl object-cover object-top shadow-lg"
                  loading="lazy"
                  width={320}
                  height={384}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section-padding bg-background animate-fade-in" id="referenzen">
          <div className="container-narrow mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary text-center mb-14">
              Was Kunden sagen
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {testimonials.map((t, i) => (
                <div key={i} className="bg-card border border-border rounded-2xl p-8 relative card-hover animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
                  <Quote className="h-8 w-8 text-accent/40 mb-4" />
                  <p className="text-foreground leading-relaxed mb-6 italic">„{t.quote}"</p>
                  <div>
                    <p className="font-semibold text-primary">{t.name}</p>
                    <p className="text-sm text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mein Buch */}
        <section className="section-padding bg-section-soft animate-fade-in" id="buch">
          <div className="container-narrow mx-auto">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-5 gap-10 items-center">
                <div className="md:col-span-2 flex justify-center">
                  <img
                    src={buchCover}
                    alt='Kinderbuch "Oma hat den Montag vergessen" – zehn Geschichten über Demenz für Kinder ab 5 Jahren'
                    className="w-48 md:w-56 h-auto rounded-xl shadow-lg"
                    loading="lazy"
                    width={224}
                    height={320}
                  />
                </div>
                <div className="md:col-span-3">
                  <span className="eyebrow text-accent">Mein Buch</span>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-primary mb-2">
                    Oma hat den Montag vergessen
                  </h2>
                  <p className="text-muted-foreground font-medium mb-4">
                    Zehn Geschichten über Demenz für Kinder und Familien.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <em>Oma hat den Montag vergessen</em> begleitet Kinder ab 5 Jahren mit zehn liebevoll illustrierten Geschichten durch die Welt der Demenz: einfühlsam, kindgerecht und ohne falsche Schönfärberei. Das Buch fördert Empathie, gibt Eltern einen sanften Einstieg in schwierige Gespräche und eignet sich zum Vorlesen zuhause wie auch in Kita und Schule.
                  </p>
                  <p className="text-accent font-medium italic mb-4">
                    Weil Verstehen der erste Schritt zum Mitgefühl ist.
                  </p>
                  <p className="text-muted-foreground mb-6">
                    Lernen Sie das Buch kennen — ganz ohne Risiko. Laden Sie sich jetzt zwei Geschichten kostenlos herunter oder bestellen Sie das Buch direkt auf Amazon.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-6 py-5 transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95">
                    <a href="https://alfima.com/radka/leseprobe-oma-hat-den-montag-vergessen" target="_blank" rel="noopener noreferrer">
                      <Download className="h-4 w-4 mr-2" />
                      Leseprobe herunterladen
                    </a>
                    </Button>
                    <Button size="lg" variant="outline" asChild className="border-accent text-accent hover:bg-accent hover:text-accent-foreground font-semibold px-6 py-5 transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95">
                      <a href="https://www.amazon.de/Oma-hat-den-Montag-vergessen/dp/B0FRXZZK5Z" target="_blank" rel="noopener noreferrer">
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Jetzt auf Amazon bestellen
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lead Magnet: Nachtunruhe */}
        <NachtunruheLeadMagnet />

        {/* Presse */}
        <PressLogos />

        {/* CTA */}
        <section className="section-padding bg-section-soft animate-fade-in" id="kontakt">
          <div className="container-narrow mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4">
              Bereit für den ersten Schritt?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-10 text-lg">
              Schreiben Sie mir – ich melde mich in der Regel innerhalb von 24 Stunden persönlich bei Ihnen.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full px-8 py-6 text-base transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95">
                <Link to="/kontakt">
                  <Mail className="h-4 w-4 mr-2" />
                  Per Kontaktformular
                </Link>
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

export default Index;
