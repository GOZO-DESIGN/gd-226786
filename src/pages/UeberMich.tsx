import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MessageCircle, Heart, Wrench, Handshake, GraduationCap, BookOpen, Award, Users, Building, ShieldCheck, Download, ShoppingCart } from "lucide-react";
import radkaGlasses from "@/assets/radka-glasses.webp";
import buchCover from "@/assets/buch-cover.webp";

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
              <span className="eyebrow">Über mich</span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-primary mb-2 leading-tight animate-fade-in" style={{ animationDelay: "100ms" }}>
                Radka Eder
              </h1>
              <p className="text-primary/70 font-semibold text-lg mb-6 animate-fade-in" style={{ animationDelay: "150ms" }}>Demenzexpertin & Trainerin</p>
              <div className="bg-section-soft rounded-xl px-6 py-3 mb-6 inline-block animate-fade-in" style={{ animationDelay: "200ms" }}>
                <p className="font-display text-lg text-primary italic">„Ich übersetze Demenz"</p>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-8 animate-fade-in" style={{ animationDelay: "250ms" }}>
                Demenz ist komplex. Ich übersetze medizinisches und pflegerisches Wissen in verständliche, alltagstaugliche Lösungen, die entlasten und Sicherheit geben.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 animate-fade-in" style={{ animationDelay: "300ms" }}>
                <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95">
                  <a href="mailto:info@fokusdemenz.at">
                    <Mail className="mr-2 h-4 w-4" />
                    Per E-Mail anfragen
                  </a>
                </Button>
                <Button variant="outline" asChild className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95">
                  <a href="https://wa.me/436645477490" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Nachricht via WhatsApp
                  </a>
                </Button>
              </div>
            </div>
            <div className="flex justify-center animate-scale-in" style={{ animationDelay: "200ms" }}>
              <img
                src={radkaGlasses}
                alt="Radka Eder – Demenzexpertin und Trainerin"
                className="w-64 h-80 md:w-80 md:h-96 rounded-3xl object-cover object-top shadow-lg"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-section-soft animate-fade-in">
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
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
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
      <section className="section-padding bg-section-soft animate-fade-in">
        <div className="container-narrow mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
            Qualifikationen & Erfahrung
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {qualifications.slice(0, 3).map((q, index) => (
              <Card key={q.title} className="group bg-background border-border card-hover animate-fade-in" style={{ animationDelay: `${index * 80}ms` }}>
                <CardContent className="p-6">
                  <q.icon className="h-7 w-7 text-primary mb-4" />
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
                  <q.icon className="h-7 w-7 text-primary mb-4" />
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
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-5 gap-10 items-center">
              <div className="md:col-span-2 flex justify-center">
                <img
                  src={buchCover}
                  alt='Kinderbuch "Oma hat den Montag vergessen" – zehn Geschichten über Demenz für Kinder ab 5 Jahren, mit liebevollen Illustrationen für Familie, Kita und Schule'
                  className="w-48 md:w-56 h-auto rounded-xl shadow-lg"
                  loading="lazy"
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
                    <a href="#leseprobe" target="_blank" rel="noopener noreferrer">
                      <Download className="h-4 w-4 mr-2" />
                      Leseprobe herunterladen
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="border-accent text-accent hover:bg-accent hover:text-accent-foreground font-semibold px-6 py-5 transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95">
                    <a href="https://www.amazon.de/dp/B0DZ2Q19VG" target="_blank" rel="noopener noreferrer">
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

      {/* Approach */}
      <section className="section-padding bg-section-soft animate-fade-in">
        <div className="container-narrow mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
            Mein Ansatz
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto text-center">
            {approach.map((a, index) => (
              <div key={a.title} className="group animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <a.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-display text-lg font-semibold text-primary mb-2">{a.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{a.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding animate-fade-in">
        <div className="container-narrow mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4">
            Lassen Sie uns ins Gespräch kommen
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Schreiben Sie mir – ich melde mich in der Regel innerhalb von 24 Stunden persönlich bei Ihnen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base px-8 py-6 transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95">
              <a href="mailto:info@fokusdemenz.at">
                <Mail className="mr-2 h-5 w-5" />
                Per E-Mail anfragen
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

export default UeberMich;
