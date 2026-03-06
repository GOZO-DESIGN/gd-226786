import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Phone, Heart, Brain, ShieldAlert, Users, ArrowRight, CheckCircle2, Quote, ChevronDown, Zap, Target, Smile } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const challenges = [
  {
    icon: Zap,
    title: "Erschöpfung und Überforderung",
    description: "Die 24/7 Betreuung zehrt an Ihren Kräften. Sie fühlen sich ausgelaugt und wissen nicht, wie lange Sie das noch durchhalten können.",
  },
  {
    icon: Heart,
    title: "Schuldgefühle und emotionale Last",
    description: "Bin ich eine schlechte Tochter/Sohn? Diese Gedanken plagen Sie, besonders wenn Sie an Ihre Grenzen stoßen.",
  },
  {
    icon: ShieldAlert,
    title: "Aggression und Verhaltensänderungen",
    description: "Wut, Unruhe, Verweigerung – Sie wissen nicht, wie Sie damit umgehen sollen und fühlen sich hilflos.",
  },
  {
    icon: Users,
    title: "Isolation und fehlendes Verständnis",
    description: "Ihr soziales Umfeld versteht nicht, was Sie durchmachen. Freunde ziehen sich zurück, und Sie fühlen sich allein.",
  },
];

const steps = [
  { number: "1", title: "Verstehen", description: "Sie lernen, warum Ihr Angehöriger sich so verhält und was in seinem Gehirn passiert." },
  { number: "2", title: "Anwenden", description: "Sie bekommen konkrete Strategien, die Sie sofort im Alltag einsetzen können." },
  { number: "3", title: "Entlasten", description: "Sie gewinnen Sicherheit, reduzieren Stress und finden wieder Zeit für sich selbst." },
];

const angebote = [
  {
    title: "Online-Begleitprogramm",
    description: "Strukturierte Begleitung über mehrere Wochen mit praktischen Strategien, die Sie sofort anwenden können.",
    features: ["Wöchentliche Live-Sessions", "Praktische Übungen", "Persönliches Feedback", "Flexible Zeiten"],
  },
  {
    title: "Community für Angehörige",
    description: "Austausch mit anderen Betroffenen in einer geschützten Gruppe. Sie sind nicht allein.",
    features: ["Monatliche Treffen", "Erfahrungsaustausch", "Gegenseitige Unterstützung", "Expertenwissen"],
  },
];

const testimonials = [
  {
    quote: "Endlich jemand, der versteht, was wir durchmachen. Die praktischen Tipps haben unseren Alltag komplett verändert.",
    name: "Maria K.",
    role: "Tochter einer Demenzpatientin",
  },
  {
    quote: "Nach dem Begleitprogramm habe ich 80% weniger Konfliktsituationen mit meinem Vater. Ich weiß jetzt, wie ich reagieren muss.",
    name: "Thomas S.",
    role: "Sohn eines Demenzpatienten",
  },
];

const faqs = [
  {
    question: "Was hilft Angehörigen bei Demenz am meisten?",
    answer: "Am wichtigsten ist das Verständnis für die Erkrankung und praktische Strategien für den Alltag. In meiner Begleitung lernen Sie, Verhaltensweisen zu verstehen und angemessen zu reagieren.",
  },
  {
    question: "Ist Online-Begleitung genauso wirksam wie vor Ort?",
    answer: "Ja, oft sogar wirksamer. Sie können bequem von zu Hause teilnehmen, ohne zusätzlichen Stress durch Anfahrt. Die Inhalte sind genauso intensiv und persönlich.",
  },
  {
    question: "Wie schnell sehe ich Ergebnisse?",
    answer: "Viele Teilnehmer berichten bereits nach der ersten Woche von spürbaren Verbesserungen im Umgang mit herausfordernden Situationen.",
  },
  {
    question: "Kann ich auch nur einzelne Beratungen buchen?",
    answer: "Ja, ich biete auch Einzelberatungen an. Für nachhaltige Veränderungen empfehle ich jedoch das Begleitprogramm.",
  },
];

const Angehoerige = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      <SEO
        title="Demenzbegleitung für Angehörige"
        description="Sie pflegen einen Menschen mit Demenz? Ich helfe Ihnen mit Verständnis, praktischen Strategien und echter Unterstützung den Alltag zu meistern."
        canonical="https://www.fokusdemenz.at/fuer-angehoerige"
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-secondary via-background to-gold-light relative overflow-hidden animate-fade-in">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          <div className="container-narrow mx-auto relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-center md:text-left">
                <span className="inline-block bg-primary/10 text-primary font-medium text-sm px-4 py-1.5 rounded-full mb-6 animate-fade-in">
                  Für Angehörige
                </span>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-2 animate-fade-in" style={{ animationDelay: "100ms" }}>
                  Demenzbegleitung für{" "}
                  <span className="relative">
                    Angehörige
                    <span className="absolute bottom-1 left-0 w-full h-3 bg-accent/30 -z-10 rounded" />
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0 mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: "200ms" }}>
                  Sie pflegen einen Menschen mit Demenz und fühlen sich überfordert? Ich helfe Ihnen, den Alltag zu meistern – mit Verständnis, praktischen Strategien und echter Unterstützung.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 animate-fade-in" style={{ animationDelay: "300ms" }}>
                  <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-full px-8 py-6 text-base transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95">
                    <a href="tel:+436645477490">
                      <Phone className="h-4 w-4 mr-2" />
                      Kostenlose Erstberatung
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="rounded-full px-8 py-6 text-base border-accent/30 text-accent-foreground hover:bg-accent hover:text-accent-foreground font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Angebote entdecken
                  </Button>
                </div>
              </div>
              <div className="flex justify-center animate-scale-in" style={{ animationDelay: "400ms" }}>
                <img
                  src="/images/homepage-alternative.webp"
                  alt="Einfühlsame Begleitung für Angehörige von Menschen mit Demenz"
                  className="rounded-3xl shadow-2xl w-full max-w-md object-cover aspect-[3/4]"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Herausforderungen */}
        <section className="section-padding bg-background animate-fade-in">
          <div className="container-narrow mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary text-center mb-4 animate-fade-in">
              Kennen Sie diese Herausforderungen?
            </h2>
            <p className="text-muted-foreground text-center mb-14 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "100ms" }}>
              Sie sind nicht allein. Viele pflegende Angehörige kämpfen mit denselben Problemen.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {challenges.map((item, index) => (
                <div key={item.title} className="group border border-border rounded-2xl p-6 card-hover bg-card animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                    <item.icon className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-primary mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mein Ansatz */}
        <section className="section-padding bg-secondary animate-fade-in">
          <div className="container-narrow mx-auto">
            <div className="text-center mb-14">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-2 animate-fade-in">
                Mein Ansatz
              </h2>
              <p className="font-display text-xl text-accent animate-fade-in" style={{ animationDelay: "100ms" }}>
                Wie ich Angehörige begleite
              </p>
              <p className="text-muted-foreground mt-4 max-w-xl mx-auto animate-fade-in" style={{ animationDelay: "150ms" }}>
                „Ich übersetze Demenz" – Ich mache komplexes Wissen verständlich und gebe Ihnen praktische Werkzeuge für den Alltag.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {steps.map((step, index) => (
                <div key={step.number} className="text-center animate-fade-in" style={{ animationDelay: `${index * 120}ms` }}>
                  <div className="w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center mx-auto mb-5 text-2xl font-bold font-display transition-transform duration-300 hover:scale-110">
                    {step.number}
                  </div>
                  <h3 className="font-display text-xl font-semibold text-primary mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Angebote */}
        <section className="section-padding bg-background animate-fade-in">
          <div className="container-narrow mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary text-center mb-4 animate-fade-in">
              Meine Angebote für Angehörige
            </h2>
            <p className="text-muted-foreground text-center mb-14 animate-fade-in" style={{ animationDelay: "100ms" }}>
              Wählen Sie das Format, das am besten zu Ihrer Situation passt.
            </p>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {angebote.map((angebot, index) => (
                <div key={angebot.title} className="group border border-border rounded-2xl p-8 card-hover bg-card animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <h3 className="font-display text-xl font-semibold text-primary mb-3">{angebot.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{angebot.description}</p>
                  <ul className="space-y-3 mb-8">
                    {angebot.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                  <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-full px-8 py-6 text-base transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95">
                    Mehr erfahren
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section-padding bg-secondary animate-fade-in">
          <div className="container-narrow mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary text-center mb-14 animate-fade-in">
              Was Angehörige sagen
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

        {/* FAQ */}
        <section className="section-padding bg-background animate-fade-in">
          <div className="container-narrow mx-auto max-w-3xl">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary text-center mb-2 animate-fade-in">
              Häufige Fragen
            </h2>
            <p className="text-muted-foreground text-center mb-12 animate-fade-in" style={{ animationDelay: "100ms" }}>
              FAQ für Angehörige
            </p>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-border rounded-2xl overflow-hidden bg-card animate-fade-in"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/50 transition-colors duration-200"
                  >
                    <span className="font-display text-base font-semibold text-primary pr-4">{faq.question}</span>
                    <ChevronDown className={`h-5 w-5 text-accent flex-shrink-0 transition-transform duration-300 ${openFaq === index ? "rotate-180" : ""}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openFaq === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                    <p className="px-6 pb-6 text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-primary/85 text-primary-foreground animate-fade-in">
          <div className="container-narrow mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
              Bereit für den ersten Schritt?
            </h2>
            <p className="text-primary-foreground/70 max-w-xl mx-auto mb-10 text-lg animate-fade-in" style={{ animationDelay: "100ms" }}>
              In einem kostenlosen 15-Minuten-Gespräch besprechen wir Ihre Situation und finden heraus, wie ich Sie am besten unterstützen kann.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "200ms" }}>
              <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-full px-8 py-6 text-base transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95">
                <a href="tel:+436645477490">
                  <Phone className="h-4 w-4 mr-2" />
                  Kostenlose Erstberatung
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="rounded-full px-8 py-6 text-base border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95">
                <a href="tel:+436645477490">
                  +43 664 5477490
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

export default Angehoerige;
