import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Mail, MessageCircle, Heart, Brain, ShieldAlert, Users, ArrowRight, CheckCircle2, Quote, ChevronDown, Zap, Target, Smile } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import homepageAlternative from "@/assets/homepage-alternative.webp";

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
        faqData={faqs}
      />
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-secondary/60 via-background to-background relative overflow-hidden animate-fade-in">
          <div className="container-narrow mx-auto relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-center md:text-left">
                <span className="eyebrow">Für Angehörige</span>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 animate-fade-in" style={{ animationDelay: "100ms" }}>
                  Demenzbegleitung für Angehörige
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0 mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: "200ms" }}>
                  Sie pflegen einen Menschen mit Demenz und fühlen sich überfordert? Ich helfe Ihnen, den Alltag zu meistern – mit Verständnis, praktischen Strategien und echter Unterstützung.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 animate-fade-in" style={{ animationDelay: "300ms" }}>
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
              <div className="flex justify-center animate-scale-in" style={{ animationDelay: "400ms" }}>
                <img
                  src={homepageAlternative}
                  alt="Einfühlsame Begleitung für Angehörige von Menschen mit Demenz"
                  className="rounded-3xl shadow-xl w-full max-w-md object-cover aspect-[3/4]"
                  loading="eager"
                  fetchPriority="high"
                  width={448}
                  height={597}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Herausforderungen */}
        <section className="section-padding bg-background animate-fade-in">
          <div className="container-narrow mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary text-center mb-4">
              Kennen Sie diese Herausforderungen?
            </h2>
            <p className="text-muted-foreground text-center mb-14 max-w-2xl mx-auto">
              Sie sind nicht allein. Viele pflegende Angehörige kämpfen mit denselben Problemen.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {challenges.map((item, index) => (
                <div key={item.title} className="group border border-border rounded-2xl p-6 card-hover bg-card animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <item.icon className="h-7 w-7 text-primary mb-5" />
                  <h3 className="font-display text-lg font-semibold text-primary mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mein Ansatz */}
        <section className="section-padding bg-section-soft animate-fade-in">
          <div className="container-narrow mx-auto">
            <div className="text-center mb-14">
              <span className="eyebrow">Mein Ansatz</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-2">
                Wie ich Angehörige begleite
              </h2>
              <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
                „Ich übersetze Demenz" – Ich mache komplexes Wissen verständlich und gebe Ihnen praktische Werkzeuge für den Alltag.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {steps.map((step, index) => (
                <div key={step.number} className="text-center animate-fade-in" style={{ animationDelay: `${index * 120}ms` }}>
                  <div className="w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center mx-auto mb-5 text-2xl font-bold font-display">
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
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary text-center mb-4">
              Meine Angebote für Angehörige
            </h2>
            <p className="text-muted-foreground text-center mb-14">
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
                  <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full px-8 py-6 text-base transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95">
                    <a href="mailto:info@fokusdemenz.at">
                      Mehr erfahren
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </a>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section-padding bg-section-soft animate-fade-in">
          <div className="container-narrow mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary text-center mb-14">
              Was Angehörige sagen
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {testimonials.map((t, i) => (
                <div key={i} className="bg-background border border-border rounded-2xl p-8 relative card-hover animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
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

        {/* FAQ */}
        <section className="section-padding bg-background animate-fade-in">
          <div className="container-narrow mx-auto max-w-3xl">
            <span className="eyebrow text-center">Häufige Fragen</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary text-center mb-12">
              FAQ für Angehörige
            </h2>
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
                    <ChevronDown className={`h-5 w-5 text-primary/40 flex-shrink-0 transition-transform duration-300 ${openFaq === index ? "rotate-180" : ""}`} />
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
        <section className="section-padding bg-section-soft animate-fade-in">
          <div className="container-narrow mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4">
              Bereit für den ersten Schritt?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-10 text-lg">
              Schreiben Sie mir – ich melde mich in der Regel innerhalb von 24 Stunden persönlich bei Ihnen.
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

export default Angehoerige;
