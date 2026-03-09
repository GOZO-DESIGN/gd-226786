import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageSquare } from "lucide-react";
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
    answer: "In einem kostenlosen 15-Minuten-Telefonat besprechen wir Ihre Situation und ich erkläre Ihnen, welche Unterstützung für Sie passend wäre.",
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

const contactInfo = [
  {
    icon: Phone,
    label: "Telefon",
    value: "+43 664 5477490",
    href: "tel:+436645477490",
    description: "Mo–Fr, 9:00–17:00 Uhr",
  },
  {
    icon: Mail,
    label: "E-Mail",
    value: "info@fokusdemenz.at",
    href: "mailto:info@fokusdemenz.at",
    description: "Antwort innerhalb von 24 Stunden",
  },
  {
    icon: MapPin,
    label: "Standort",
    value: "Österreich",
    href: undefined,
    description: "Online im DACH-Raum verfügbar",
  },
  {
    icon: Clock,
    label: "Erreichbarkeit",
    value: "Mo–Fr, 9–17 Uhr",
    href: undefined,
    description: "Terminvereinbarung auch außerhalb",
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

    // Simulate form submission (replace with actual backend later)
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
        description="Kontaktieren Sie Radka Eder für eine kostenlose Erstberatung zu Demenzbegleitung, 24h-Betreuung oder Schulungen. Telefon: +43 664 5477490"
        canonical="https://www.fokusdemenz.at/kontakt"
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-br from-secondary via-background to-gold-light animate-fade-in">
          <div className="container-narrow mx-auto px-4 md:px-8 text-center">
            <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
              Kontakt
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6">
              Sprechen wir darüber
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Ob Fragen, Erstberatung oder ein konkretes Anliegen – ich freue mich auf Ihre Nachricht.
            </p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="section-padding animate-fade-in">
          <div className="container-narrow mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, index) => (
                <Card
                  key={info.label}
                  className="bg-background border-border hover:border-accent/30 card-hover animate-fade-in"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-xl mx-auto mb-4">
                      <info.icon className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="font-semibold text-primary mb-1">{info.label}</h3>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-accent hover:underline font-medium block mb-1"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <span className="text-foreground font-medium block mb-1">{info.value}</span>
                    )}
                    <p className="text-sm text-muted-foreground">{info.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Form + Sidebar */}
        <section className="section-padding bg-secondary/30 animate-fade-in">
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
                        <div className="flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mx-auto mb-6">
                          <CheckCircle className="h-8 w-8 text-accent" />
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

                        {/* Honeypot field */}
                        <div className="hidden" aria-hidden="true">
                          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
                        </div>

                        <Button
                          type="submit"
                          size="lg"
                          disabled={isSubmitting}
                          className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-95"
                        >
                          {isSubmitting ? (
                            <span className="flex items-center gap-2">
                              <span className="h-4 w-4 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin" />
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
                {/* Direct Contact Card */}
                <Card className="bg-primary text-primary-foreground border-none">
                  <CardContent className="p-8">
                    <MessageSquare className="h-8 w-8 text-accent mb-4" />
                    <h3 className="font-display text-xl font-bold mb-3">
                      Lieber direkt sprechen?
                    </h3>
                    <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                      In einem kostenlosen 15-Minuten-Gespräch besprechen wir Ihre Situation persönlich.
                    </p>
                    <Button
                      asChild
                      size="lg"
                      className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold transition-all duration-300 hover:scale-105 active:scale-95"
                    >
                      <a href="tel:+436645477490">
                        <Phone className="h-5 w-5 mr-2" />
                        Jetzt anrufen
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                {/* Availability Info */}
                <Card className="bg-secondary border-none">
                  <CardContent className="p-8">
                    <Clock className="h-8 w-8 text-accent mb-4" />
                    <h3 className="font-display text-xl font-bold text-primary mb-3">
                      Antwortzeit
                    </h3>
                    <ul className="space-y-3 text-foreground/80">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span>E-Mails: innerhalb von 24 Stunden</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span>Telefonisch: Mo–Fr, 9–17 Uhr</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span>Erstberatung: kostenlos & unverbindlich</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding animate-fade-in">
          <div className="container-narrow mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
                Häufige Fragen
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary">
                Noch Fragen?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {faqs.map((faq, index) => (
                <Card
                  key={index}
                  className="bg-background border-border hover:border-accent/30 card-hover animate-fade-in"
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
