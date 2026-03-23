import { useState } from "react";
import { Mail, MessageCircle, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Bitte geben Sie Ihren Namen ein.").max(100, "Name darf maximal 100 Zeichen haben."),
  email: z.string().trim().email("Bitte geben Sie eine gültige E-Mail-Adresse ein.").max(255),
  phone: z.string().trim().max(30, "Telefonnummer zu lang.").optional().or(z.literal("")),
  subject: z.string().trim().min(1, "Bitte wählen Sie einen Betreff.").max(200),
  message: z.string().trim().min(10, "Ihre Nachricht sollte mindestens 10 Zeichen haben.").max(2000, "Nachricht darf maximal 2000 Zeichen haben."),
});

type ContactFormData = z.infer<typeof contactSchema>;

const subjects = [
  "Erstberatung anfragen",
  "24h-Betreuung – Anfrage",
  "Schulung anfragen",
  "Frage zu einem Angebot",
  "Sonstiges",
];

const faqs = [
  {
    question: "Wie läuft die Erstberatung ab?",
    answer: "In einem kostenlosen Erstgespräch besprechen wir Ihre Situation und ich erkläre Ihnen, welche Unterstützung für Sie passend wäre. Der Erstkontakt erfolgt per E-Mail oder WhatsApp.",
  },
  {
    question: "Bieten Sie auch Online-Beratung an?",
    answer: "Ja, alle Beratungen und Schulungen sind auch online per Videocall möglich. So kann ich Familien im gesamten DACH-Raum unterstützen.",
  },
  {
    question: "Was kostet eine Beratung?",
    answer: "Die Erstberatung ist kostenlos. Danach richten sich die Kosten nach dem gewählten Angebot. Ich erstelle Ihnen gerne ein individuelles Angebot.",
  },
  {
    question: "Kommen Sie auch vor Ort?",
    answer: "Ja, in Österreich biete ich Vor-Ort-Besuche, Schulungen und Begleitung an. Für Deutschland und die Schweiz arbeite ich online.",
  },
];

const Kontakt = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof ContactFormData;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Nachricht gesendet!",
      description: "Vielen Dank. Ich melde mich innerhalb von 24 Stunden bei Ihnen.",
    });
  };

  return (
    <>
      <SEO
        title="Kontakt – Kostenlose Erstberatung"
        description="Kontaktieren Sie Radka Eder für eine kostenlose Erstberatung zu Demenzbegleitung, 24h-Betreuung oder Schulungen. E-Mail: info@fokusdemenz.at"
        canonical="https://www.fokusdemenz.at/kontakt"
        faqData={faqs}
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-secondary/60 via-background to-background animate-fade-in">
          <div className="container-narrow mx-auto px-4 md:px-8 text-center">
            <span className="eyebrow">Kontakt</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6">
              Sprechen wir darüber
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
              Ob Fragen, Erstberatung oder ein konkretes Anliegen – ich freue mich auf Ihre Nachricht.
            </p>
            <p className="text-base text-primary font-medium max-w-xl mx-auto">
              Der Erstkontakt erfolgt bitte per E-Mail oder WhatsApp-Nachricht. Ich melde mich in der Regel innerhalb von 24 Stunden zurück.
            </p>
          </div>
        </section>

        {/* Contact Info */}
        <section className="section-padding animate-fade-in">
          <div className="container-narrow mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-background border-border hover:border-primary/20 card-hover animate-fade-in">
                <CardContent className="p-6 text-center">
                  <Mail className="h-7 w-7 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-primary mb-1">E-Mail</h3>
                  <a href="mailto:info@fokusdemenz.at" className="text-primary hover:underline font-medium block mb-1">
                    info@fokusdemenz.at
                  </a>
                  <p className="text-sm text-muted-foreground">Antwort innerhalb von 24 Stunden</p>
                </CardContent>
              </Card>
              <Card className="bg-background border-border hover:border-primary/20 card-hover animate-fade-in" style={{ animationDelay: "80ms" }}>
                <CardContent className="p-6 text-center">
                  <MessageCircle className="h-7 w-7 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-primary mb-1">WhatsApp</h3>
                  <a href="https://wa.me/436645477490" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium block mb-1">
                    Nachricht senden
                  </a>
                  <p className="text-sm text-muted-foreground">Schnell und unkompliziert</p>
                </CardContent>
              </Card>
              <Card className="bg-background border-border hover:border-primary/20 card-hover animate-fade-in" style={{ animationDelay: "160ms" }}>
                <CardContent className="p-6 text-center">
                  <Clock className="h-7 w-7 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-primary mb-1">Erreichbarkeit</h3>
                  <span className="text-foreground font-medium block mb-1">Mo–Fr, 9:00–17:00 Uhr</span>
                  <p className="text-sm text-muted-foreground">Termine auch außerhalb möglich</p>
                </CardContent>
              </Card>
              <Card className="bg-background border-border hover:border-primary/20 card-hover animate-fade-in" style={{ animationDelay: "240ms" }}>
                <CardContent className="p-6 text-center">
                  <MapPin className="h-7 w-7 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-primary mb-1">Standort</h3>
                  <span className="text-foreground font-medium block mb-1">Österreich</span>
                  <p className="text-sm text-muted-foreground">Online im DACH-Raum verfügbar</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Form + Sidebar */}
        <section className="section-padding bg-section-soft animate-fade-in">
          <div className="container-narrow mx-auto">
            <div className="grid lg:grid-cols-5 gap-12">
              {/* Form */}
              <div className="lg:col-span-3">
                <Card className="bg-background border-border">
                  <CardContent className="p-8 md:p-10">
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-primary mb-2">
                      Nachricht senden
                    </h2>
                    <p className="text-muted-foreground mb-8">
                      Füllen Sie das Formular aus und ich melde mich innerhalb von 24 Stunden.
                    </p>

                    {isSubmitted ? (
                      <div className="text-center py-12 animate-fade-in">
                        <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-6">
                          <CheckCircle className="h-8 w-8 text-primary" />
                        </div>
                        <h3 className="font-display text-2xl font-bold text-primary mb-3">
                          Vielen Dank!
                        </h3>
                        <p className="text-muted-foreground mb-6">
                          Ihre Nachricht wurde gesendet. Ich melde mich so schnell wie möglich bei Ihnen.
                        </p>
                        <Button
                          variant="outline"
                          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95"
                          onClick={() => {
                            setIsSubmitted(false);
                            setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
                          }}
                        >
                          Weitere Nachricht senden
                        </Button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                        <div className="grid sm:grid-cols-2 gap-6">
                          <div>
                            <Label htmlFor="name" className="text-foreground font-medium">
                              Name <span className="text-destructive">*</span>
                            </Label>
                            <Input
                              id="name"
                              type="text"
                              autoComplete="name"
                              placeholder="Ihr vollständiger Name"
                              value={formData.name}
                              onChange={(e) => handleChange("name", e.target.value)}
                              className={errors.name ? "border-destructive" : ""}
                            />
                            {errors.name && (
                              <p className="text-sm text-destructive mt-1">{errors.name}</p>
                            )}
                          </div>
                          <div>
                            <Label htmlFor="email" className="text-foreground font-medium">
                              E-Mail <span className="text-destructive">*</span>
                            </Label>
                            <Input
                              id="email"
                              type="email"
                              autoComplete="email"
                              placeholder="ihre@email.at"
                              value={formData.email}
                              onChange={(e) => handleChange("email", e.target.value)}
                              className={errors.email ? "border-destructive" : ""}
                            />
                            {errors.email && (
                              <p className="text-sm text-destructive mt-1">{errors.email}</p>
                            )}
                          </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6">
                          <div>
                            <Label htmlFor="phone" className="text-foreground font-medium">
                              Telefon <span className="text-muted-foreground text-sm">(optional)</span>
                            </Label>
                            <Input
                              id="phone"
                              type="tel"
                              autoComplete="tel"
                              placeholder="+43 664 ..."
                              value={formData.phone}
                              onChange={(e) => handleChange("phone", e.target.value)}
                            />
                          </div>
                          <div>
                            <Label htmlFor="subject" className="text-foreground font-medium">
                              Betreff <span className="text-destructive">*</span>
                            </Label>
                            <select
                              id="subject"
                              value={formData.subject}
                              onChange={(e) => handleChange("subject", e.target.value)}
                              className={`flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                                errors.subject ? "border-destructive" : "border-input"
                              }`}
                            >
                              <option value="">Bitte wählen…</option>
                              {subjects.map((s) => (
                                <option key={s} value={s}>
                                  {s}
                                </option>
                              ))}
                            </select>
                            {errors.subject && (
                              <p className="text-sm text-destructive mt-1">{errors.subject}</p>
                            )}
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="message" className="text-foreground font-medium">
                            Nachricht <span className="text-destructive">*</span>
                          </Label>
                          <Textarea
                            id="message"
                            rows={5}
                            placeholder="Beschreiben Sie kurz Ihr Anliegen…"
                            value={formData.message}
                            onChange={(e) => handleChange("message", e.target.value)}
                            className={errors.message ? "border-destructive" : ""}
                          />
                          {errors.message && (
                            <p className="text-sm text-destructive mt-1">{errors.message}</p>
                          )}
                          <p className="text-xs text-muted-foreground mt-1 text-right">
                            {formData.message.length}/2000
                          </p>
                        </div>

                        {/* Honeypot */}
                        <div className="hidden" aria-hidden="true">
                          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
                        </div>

                        <Button
                          type="submit"
                          size="lg"
                          disabled={isSubmitting}
                          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-95"
                        >
                          {isSubmitting ? (
                            <span className="flex items-center gap-2">
                              <span className="h-4 w-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                              Wird gesendet…
                            </span>
                          ) : (
                            <span className="flex items-center gap-2">
                              <Send className="h-5 w-5" />
                              Nachricht senden
                            </span>
                          )}
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-2 space-y-8">
                {/* Direct Contact */}
                <Card className="bg-background border-border">
                  <CardContent className="p-8">
                    <Mail className="h-7 w-7 text-primary mb-4" />
                    <h3 className="font-display text-xl font-bold text-primary mb-3">
                      Direkter Kontakt
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Der Erstkontakt erfolgt bitte per E-Mail oder WhatsApp-Nachricht. Ich melde mich in der Regel innerhalb von 24 Stunden zurück.
                    </p>
                    <div className="space-y-3">
                      <Button
                        asChild
                        size="lg"
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-all duration-300 hover:scale-105 active:scale-95"
                      >
                        <a href="mailto:info@fokusdemenz.at">
                          <Mail className="h-5 w-5 mr-2" />
                          Per E-Mail anfragen
                        </a>
                      </Button>
                      <Button
                        asChild
                        size="lg"
                        variant="outline"
                        className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold transition-all duration-300 hover:scale-105 active:scale-95"
                      >
                        <a href="https://wa.me/436645477490" target="_blank" rel="noopener noreferrer">
                          <MessageCircle className="h-5 w-5 mr-2" />
                          Nachricht via WhatsApp
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Availability */}
                <Card className="bg-background border-border">
                  <CardContent className="p-8">
                    <Clock className="h-7 w-7 text-primary mb-4" />
                    <h3 className="font-display text-xl font-bold text-primary mb-3">
                      Erreichbarkeit
                    </h3>
                    <ul className="space-y-3 text-foreground/80">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary/60 flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="font-medium text-foreground">Montag – Freitag</span>
                          <br />
                          <span className="text-sm text-muted-foreground">9:00 – 17:00 Uhr</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary/60 flex-shrink-0 mt-0.5" />
                        <span>Antwort innerhalb von 24 Stunden</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary/60 flex-shrink-0 mt-0.5" />
                        <span>Erstberatung: kostenlos & unverbindlich</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary/60 flex-shrink-0 mt-0.5" />
                        <span>Termine nach Vereinbarung auch außerhalb der Bürozeiten</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding animate-fade-in">
          <div className="container-narrow mx-auto">
            <div className="text-center mb-12">
              <span className="eyebrow">Häufige Fragen</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary">
                Noch Fragen?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {faqs.map((faq, index) => (
                <Card
                  key={index}
                  className="bg-background border-border hover:border-primary/20 card-hover animate-fade-in"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <CardContent className="p-6">
                    <h3 className="font-display text-lg font-semibold text-primary mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Kontakt;
