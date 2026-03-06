import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Heart, Wrench, Handshake, GraduationCap, BookOpen, Award, Users, Building, ShieldCheck, ExternalLink } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const stats = [
  { value: "15+", label: "Jahre Erfahrung" },
  { value: "500+", label: "Begleitete Familien" },
  { value: "100+", label: "Schulungen durchgeführt" },
  { value: "3", label: "Länder (DACH)" },
];

const qualifications = [
  { icon: GraduationCap, title: "Diplomierte Gesundheits- und Krankenpflegerin", description: "Fundierte pflegerische Ausbildung als Basis meiner Arbeit" },
  { icon: Award, title: "Akademische Gesundheits- und Pflegemanagerin", description: "Wissenschaftlich fundiertes Wissen in Pflegemanagement" },
  { icon: ShieldCheck, title: "Demenztrainerin", description: "Spezialisierung auf Demenzaufklärung und -begleitung" },
  { icon: Users, title: "Seniorentrainerin", description: "Aktivierung und Betreuung von älteren Menschen" },
  { icon: Building, title: "Ehemalige Leiterin des Betreuungs- und Pflegedienstes", description: "Langjährige Führungserfahrung in der Altenpflege" },
];

const approach = [
  { icon: Heart, title: "Empathie", description: "Ich verstehe, was Sie durchmachen, und begegne Ihnen mit echtem Mitgefühl." },
  { icon: Wrench, title: "Praxisnähe", description: "Keine Theorie, sondern konkrete Strategien, die im Alltag funktionieren." },
  { icon: Handshake, title: "Partnerschaft", description: "Wir arbeiten gemeinsam an Lösungen, die zu Ihrer Situation passen." },
];

const UeberMich = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Über mich – Radka Eder, Demenzexpertin"
        description="Diplomierte Gesundheits- und Krankenpflegerin mit über 15 Jahren Erfahrung. Demenztrainerin, Buchautorin und Beraterin im DACH-Raum."
        canonical="https://www.fokusdemenz.at/ueber-mich"
      />
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 animate-fade-in">
        <div className="container-narrow mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4 animate-fade-in">
                Über mich
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-primary mb-2 leading-tight animate-fade-in" style={{ animationDelay: "100ms" }}>
                Radka Eder
              </h1>
              <p className="text-accent font-semibold text-lg mb-6 animate-fade-in" style={{ animationDelay: "150ms" }}>Demenzexpertin & Trainerin</p>
              <div className="bg-secondary/50 rounded-xl px-6 py-3 mb-6 inline-block animate-fade-in" style={{ animationDelay: "200ms" }}>
                <p className="font-display text-lg text-primary italic">„Ich übersetze Demenz"</p>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-8 animate-fade-in" style={{ animationDelay: "250ms" }}>
                Demenz ist komplex. Ich übersetze medizinisches und pflegerisches Wissen in verständliche, alltagstaugliche Lösungen, die entlasten und Sicherheit geben.
              </p>
              <div className="animate-fade-in" style={{ animationDelay: "300ms" }}>
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-xl px-6 transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95">
                  <Phone className="mr-2 h-4 w-4" />
                  Kontakt aufnehmen
                </Button>
              </div>
            </div>
            <div className="flex justify-center animate-scale-in" style={{ animationDelay: "200ms" }}>
              <img
                src="/images/radka-glasses.webp"
                alt="Radka Eder – Demenzexpertin & Trainerin"
                className="w-64 h-80 md:w-80 md:h-96 rounded-3xl object-cover object-top shadow-xl transition-transform duration-300 hover:scale-105"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-secondary/30 animate-fade-in">
        <div className="container-narrow mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={stat.label} className="animate-fade-in" style={{ animationDelay: `${index * 80}ms` }}>
                <p className="font-display text-4xl font-bold text-accent">{stat.value}</p>
                <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="section-padding animate-fade-in">
        <div className="container-narrow mx-auto max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-8 text-center animate-fade-in">
            Mein Weg zur Demenzexpertin
          </h2>
          <div className="prose prose-lg text-muted-foreground space-y-6">
            <p className="leading-relaxed animate-fade-in" style={{ animationDelay: "100ms" }}>
              Meine Reise in die Welt der Demenzbegleitung begann vor über 15 Jahren in der Altenpflege. Als diplomierte Gesundheits- und Krankenpflegerin erlebte ich täglich, wie Familien mit der Diagnose Demenz kämpften – überfordert, verunsichert und oft allein gelassen.
            </p>
            <p className="leading-relaxed animate-fade-in" style={{ animationDelay: "200ms" }}>
              Als Leiterin des Betreuungs- und Pflegedienstes sah ich, dass es nicht nur an Wissen mangelte, sondern vor allem an verständlicher Kommunikation. Medizinische Fachbegriffe und komplexe Pflegekonzepte erreichten die Angehörigen nicht.
            </p>
            <p className="leading-relaxed animate-fade-in" style={{ animationDelay: "300ms" }}>
              <strong className="text-primary">Daraus entstand meine Mission: Ich übersetze Demenz.</strong> Ich mache komplexes Wissen verständlich und gebe Familien praktische Werkzeuge an die Hand, die im Alltag wirklich funktionieren.
            </p>
            <p className="leading-relaxed animate-fade-in" style={{ animationDelay: "400ms" }}>
              Heute begleite ich Angehörige im gesamten DACH-Raum – online und vor Ort in Österreich. Ich schule Pflegepersonal, berate Einrichtungen und unterstütze Familien dabei, die Herausforderungen der Demenz zu meistern.
            </p>
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="section-padding bg-secondary/30 animate-fade-in">
        <div className="container-narrow mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-12 text-center animate-fade-in">
            Qualifikationen & Erfahrung
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {qualifications.slice(0, 3).map((q, index) => (
              <Card key={q.title} className="group bg-background border-border card-hover animate-fade-in" style={{ animationDelay: `${index * 80}ms` }}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-xl mb-4 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                    <q.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-display text-base font-semibold text-primary mb-2">{q.title}</h3>
                  <p className="text-muted-foreground text-sm">{q.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mt-6">
            {qualifications.slice(3).map((q, index) => (
              <Card key={q.title} className="group bg-background border-border card-hover animate-fade-in" style={{ animationDelay: `${(index + 3) * 80}ms` }}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-xl mb-4 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                    <q.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-display text-base font-semibold text-primary mb-2">{q.title}</h3>
                  <p className="text-muted-foreground text-sm">{q.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Book */}
      <section className="section-padding animate-fade-in">
        <div className="container-narrow mx-auto">
          <Card className="max-w-3xl mx-auto bg-gradient-to-r from-accent/5 to-primary/5 border-accent/20 overflow-hidden card-hover animate-fade-in">
            <CardContent className="p-8 md:p-10 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="inline-block text-xs font-semibold text-accent uppercase tracking-wider mb-3">
                  Mein Buch
                </span>
                <h3 className="font-display text-2xl font-bold text-primary mb-4">
                  "Oma hat den Montag vergessen"
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Ein praxisnaher Ratgeber für Angehörige von Menschen mit Demenz, basierend auf meiner langjährigen Erfahrung in der Altenpflege. Mit konkreten Tipps und Strategien für den Alltag.
                </p>
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Auf Amazon kaufen
                </Button>
              </div>
              <div className="flex justify-center">
                <div className="w-40 h-52 bg-gradient-to-br from-accent/20 to-primary/10 rounded-xl flex items-center justify-center transition-transform duration-300 hover:scale-105 hover:rotate-2">
                  <BookOpen className="h-16 w-16 text-accent/60" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Approach */}
      <section className="section-padding bg-secondary/30 animate-fade-in">
        <div className="container-narrow mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-12 text-center animate-fade-in">
            Mein Ansatz
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto text-center">
            {approach.map((a, index) => (
              <div key={a.title} className="group animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="flex items-center justify-center w-14 h-14 bg-accent/10 rounded-full mb-4 mx-auto group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                  <a.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="font-display text-lg font-semibold text-primary mb-2">{a.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{a.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground animate-fade-in">
        <div className="container-narrow mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
            Lassen Sie uns sprechen
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: "100ms" }}>
            In einem kostenlosen Erstgespräch lernen wir uns kennen und besprechen, wie ich Sie am besten unterstützen kann.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "200ms" }}>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95">
              Erstgespräch vereinbaren
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 py-6 rounded-xl transition-all duration-300 hover:scale-105">
              <Phone className="mr-2 h-5 w-5" />
              +43 664 5477490
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UeberMich;
