import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, HelpCircle } from "lucide-react";

type QA = { q: string; a: string };
type Section = { id: string; title: string; eyebrow: string; items: QA[] };

const sections: Section[] = [
  {
    id: "demenz-grundlagen",
    eyebrow: "Demenz verstehen",
    title: "Allgemeine Fragen zu Demenz und Demenzaufklärung",
    items: [
      { q: "Was ist Demenz einfach erklärt?", a: "Demenz ist ein Oberbegriff für verschiedene Erkrankungen, bei denen Gedächtnis, Orientierung, Sprache, Denken oder Alltagsfähigkeiten nachlassen. Betroffene Menschen verändern sich nicht absichtlich. Ihr Gehirn verarbeitet Informationen anders. Genau deshalb ist Aufklärung so wichtig: Wer Demenz versteht, kann ruhiger, sicherer und respektvoller reagieren." },
      { q: "Was ist der Unterschied zwischen Demenz und Alzheimer?", a: "Alzheimer ist die häufigste Form der Demenz. Demenz beschreibt den Zustand, bei dem geistige Fähigkeiten deutlich nachlassen. Alzheimer ist eine bestimmte Erkrankung, die zu einer Demenz führen kann. Daneben gibt es auch andere Formen wie vaskuläre Demenz, Lewy-Körperchen-Demenz oder frontotemporale Demenz." },
      { q: "Woran erkennt man erste Anzeichen einer Demenz?", a: "Erste Anzeichen können Vergesslichkeit, Orientierungsschwierigkeiten, Wortfindungsstörungen, Rückzug, Unsicherheit im Alltag, verändertes Verhalten oder Probleme bei gewohnten Tätigkeiten sein. Nicht jede Vergesslichkeit bedeutet Demenz. Wenn Veränderungen häufiger auftreten oder den Alltag beeinträchtigen, sollte eine ärztliche Abklärung erfolgen." },
      { q: "Wann sollte man bei Verdacht auf Demenz Hilfe holen?", a: "Hilfe sollte man früh holen, wenn Gedächtnisprobleme, Verwirrtheit, auffällige Verhaltensänderungen oder Unsicherheiten im Alltag regelmäßig auftreten. Je früher Angehörige informiert sind, desto besser können sie reagieren, entlastende Strukturen schaffen und Überforderung vermeiden." },
      { q: "Warum ist Demenzaufklärung so wichtig?", a: "Demenzaufklärung hilft Angehörigen, Pflegekräften, Betreuungspersonen und Unternehmen, Menschen mit Demenz besser zu verstehen. Viele Konflikte entstehen nicht durch die Erkrankung allein, sondern durch Unsicherheit, falsche Erwartungen und fehlendes Wissen. Aufklärung bringt Sicherheit, Entlastung und mehr Würde in den Alltag." },
      { q: "Was bedeutet „Demenz verstehen“ im Alltag?", a: "Demenz zu verstehen bedeutet, Verhalten nicht sofort persönlich zu nehmen. Wenn ein Mensch mit Demenz etwas immer wieder fragt, aggressiv wirkt, ablehnt oder sich zurückzieht, steckt oft Angst, Überforderung, Schmerz oder Orientierungslosigkeit dahinter. Wer die Ursache besser versteht, kann besser begleiten." },
      { q: "Warum verändern sich Menschen mit Demenz im Verhalten?", a: "Menschen mit Demenz können Situationen oft nicht mehr richtig einordnen. Das kann Angst, Misstrauen, Unruhe, Wut oder Rückzug auslösen. Verhalten ist bei Demenz oft eine Form der Kommunikation. Deshalb ist es wichtig, nicht nur das Verhalten zu sehen, sondern zu fragen: Was möchte dieser Mensch ausdrücken?" },
      { q: "Kann man Demenz vorbeugen?", a: "Demenz kann nicht immer verhindert werden. Es gibt aber beeinflussbare Risikofaktoren, die das Risiko senken können. Dazu gehören Bewegung, soziale Kontakte, geistige Aktivität, gutes Hören und Sehen, Blutdruckkontrolle, gesunde Ernährung, Schlaf, weniger Alkohol und Nichtrauchen." },
      { q: "Ist Demenz nur ein Thema für alte Menschen?", a: "Nein. Demenz betrifft häufiger ältere Menschen, aber auch jüngere Menschen können erkranken. Außerdem betrifft Demenz immer auch das Umfeld: Partner, Kinder, Enkel, Nachbarn, Kollegen, Pflegekräfte, Betreuungskräfte und Unternehmen mit Kundenkontakt." },
      { q: "Warum haben viele Menschen Angst vor Demenz?", a: "Viele Menschen haben Angst vor Demenz, weil sie nicht wissen, was auf sie zukommt. Oft ist nicht die Diagnose allein das Schlimmste, sondern die Unsicherheit danach: Wie geht man miteinander um? Was ist noch möglich? Was darf ich sagen? Was soll ich tun? Aufklärung nimmt dieser Angst einen Teil ihrer Macht." },
    ],
  },
  {
    id: "angehoerige",
    eyebrow: "Für Angehörige",
    title: "Fragen für Angehörige von Menschen mit Demenz",
    items: [
      { q: "Was kann ich tun, wenn meine Mutter oder mein Vater Demenz hat?", a: "Der erste Schritt ist, sich Wissen zu holen. Angehörige brauchen nicht nur medizinische Informationen, sondern praktische Orientierung für den Alltag: Kommunikation, Tagesstruktur, Umgang mit Ablehnung, Aktivierung, Sicherheit und Selbstfürsorge. Eine Demenzberatung kann helfen, die Situation einzuordnen und konkrete nächste Schritte zu planen." },
      { q: "Wie spreche ich mit einem Menschen mit Demenz?", a: "Sprechen Sie ruhig, einfach und wertschätzend. Vermeiden Sie lange Erklärungen, Diskussionen oder Korrekturen. Besser sind kurze Sätze, Blickkontakt, Geduld und eine freundliche Haltung. Oft ist nicht der perfekte Satz entscheidend, sondern die Atmosphäre, die Sie vermitteln." },
      { q: "Soll man Menschen mit Demenz korrigieren?", a: "Nicht immer. Wenn jemand mit Demenz etwas verwechselt, hilft ständiges Korrigieren oft nicht. Es kann beschämen, verunsichern oder aggressiv machen. Wichtiger ist die Frage: Ist die Korrektur wirklich notwendig? Oder kann ich Sicherheit geben, ohne den Menschen bloßzustellen?" },
      { q: "Was mache ich, wenn ein Mensch mit Demenz immer wieder dieselbe Frage stellt?", a: "Wiederholte Fragen entstehen oft durch Unsicherheit oder Angst. Bleiben Sie möglichst ruhig und geben Sie kurze, beruhigende Antworten. Manchmal hilft auch ein sichtbarer Hinweis, ein Ritual oder eine Ablenkung. Die Frage ist für den Menschen in diesem Moment wieder neu." },
      { q: "Warum wird ein Mensch mit Demenz manchmal aggressiv?", a: "Aggression bei Demenz ist oft ein Zeichen von Überforderung, Angst, Schmerz, Scham oder fehlender Orientierung. Betroffene können ihre Bedürfnisse nicht immer klar ausdrücken. Wichtig ist, ruhig zu bleiben, Abstand zu geben, Ursachen zu suchen und nicht in einen Machtkampf zu gehen." },
      { q: "Wie kann ich den Alltag mit Demenz zu Hause erleichtern?", a: "Hilfreich sind feste Rituale, klare Tagesstruktur, einfache Sprache, vertraute Gegenstände, sichere Umgebung, Bewegung, Musik, Erinnerungsarbeit und kleine sinnvolle Aufgaben. Menschen mit Demenz brauchen nicht nur Versorgung, sondern Verbindung, Würde und das Gefühl, noch dazuzugehören." },
      { q: "Welche Aktivitäten sind für Menschen mit Demenz sinnvoll?", a: "Sinnvoll sind Aktivitäten, die an frühere Interessen, Gewohnheiten und Fähigkeiten anknüpfen. Dazu gehören Spaziergänge, Musik, gemeinsames Backen, einfache Bewegungsübungen, Erinnerungsarbeit, Sortieraufgaben, Handmassage, Sprichwörter, Fotos anschauen oder kleine Haushaltstätigkeiten. Wichtig ist nicht Leistung, sondern Beziehung." },
      { q: "Was ist nichtmedikamentöse Therapie bei Demenz?", a: "Nichtmedikamentöse Ansätze sind Maßnahmen ohne Medikamente, die Lebensqualität, Orientierung, Aktivität und Beziehung fördern können. Dazu gehören Bewegung, Musik, Erinnerungsarbeit, Validation, Biografiearbeit, basale Stimulation, Gedächtnisaktivierung, kreative Angebote und alltagsnahe Beschäftigung." },
    ],
  },
  {
    id: "betreuung-24h",
    eyebrow: "24-Stunden-Betreuung",
    title: "Fragen zu 24-Stunden-Betreuung und Demenz",
    items: [
      { q: "Was ist bei 24-Stunden-Betreuung von Menschen mit Demenz besonders wichtig?", a: "Wichtig sind eine vertraute Bezugsperson, eine ruhige Tagesstruktur, einfache Kommunikation, gute Beobachtung, Geduld, Wissen über Demenz und ein gutes Zusammenspiel mit Angehörigen, Hausarzt und gegebenenfalls Pflegediensten." },
      { q: "Was sollten 24-Stunden-Betreuerinnen über Demenz wissen?", a: "Betreuungskräfte sollten Verhalten lesen lernen, mit Ablehnung, Wahn, Unruhe und Verwirrtheit professionell umgehen, einfache Sprache nutzen, Sicherheit geben und im Alltag aktivieren. Eine fundierte Demenzschulung ist hier ein großer Vorteil." },
      { q: "Können Angehörige die Betreuungskraft im Umgang mit Demenz unterstützen?", a: "Ja. Angehörige können Biografiearbeit, Tagesrhythmus, Vorlieben, Abneigungen, Sprachgewohnheiten und Erinnerungen teilen. Je mehr die Betreuungskraft weiß, desto besser kann sie reagieren." },
      { q: "Wann lohnt sich eine Demenzschulung für 24-Stunden-Betreuungsagenturen?", a: "Immer dann, wenn Agenturen viele Klienten mit Demenz betreuen. Eine professionelle Demenzschulung erhöht die Qualität, reduziert Konflikte und stärkt das Vertrauen der Familien." },
    ],
  },
  {
    id: "fortbildungen-pflege",
    eyebrow: "Pflegekräfte & GuKG",
    title: "Fragen zu GuKG-Fortbildungen, § 63 GuKG und § 104c GuKG",
    items: [
      { q: "Ist die Fortbildung für die Fortbildungspflicht nach § 63 GuKG geeignet?", a: "Ja. Die Fortbildung kann von Angehörigen des gehobenen Dienstes für Gesundheits- und Krankenpflege im Rahmen der Fortbildungspflicht gemäß § 63 GuKG dokumentiert werden. Nach Abschluss wird eine Teilnahmebestätigung mit Thema, Datum, Dauer und Inhalt ausgestellt." },
      { q: "Was regelt § 63 GuKG?", a: "§ 63 GuKG betrifft die Fortbildungspflicht für Angehörige des gehobenen Dienstes für Gesundheits- und Krankenpflege. Diese Berufsgruppe muss innerhalb von jeweils fünf Jahren Fortbildungen in der Dauer von mindestens 60 Stunden besuchen." },
      { q: "Gilt die Fortbildung auch für Pflegeassistenz und Pflegefachassistenz nach § 104c GuKG?", a: "Ja. Für Pflegeassistenz und Pflegefachassistenz ist § 104c GuKG relevant. Die Fortbildung kann im Rahmen der gesetzlichen Fortbildungspflicht dokumentiert werden. Die Teilnehmer erhalten eine Teilnahmebestätigung." },
      { q: "Was regelt § 104c GuKG?", a: "§ 104c GuKG betrifft die Fortbildungspflicht für Angehörige der Pflegeassistenzberufe. Pflegeassistenz und Pflegefachassistenz müssen innerhalb von jeweils fünf Jahren Fortbildungen in der Dauer von mindestens 40 Stunden besuchen." },
      { q: "Erhalten Teilnehmer eine Teilnahmebestätigung?", a: "Ja. Nach Abschluss der Fortbildung erhalten die Teilnehmer eine Teilnahmebestätigung mit Thema, Datum, Dauer und Inhalt. Diese Bestätigung dient zur Dokumentation der Fortbildung." },
      { q: "Kann die Fortbildung als GuKG-Fortbildung dokumentiert werden?", a: "Ja. Die Fortbildung kann im Rahmen der GuKG-Fortbildungspflicht dokumentiert werden. Relevant sind je nach Berufsgruppe § 63 GuKG oder § 104c GuKG." },
      { q: "Ist die Fortbildung eine Weiterbildung nach GuKG?", a: "Die angebotenen Fortbildungen sind als Fortbildungen zur Wissenserweiterung und Vertiefung gedacht. Sie sind nicht als mehrwöchige Weiterbildung mit Berufsbezeichnung zu verstehen." },
      { q: "Für welche Berufsgruppen sind die GuKG-Fortbildungen geeignet?", a: "Die Fortbildungen sind geeignet für Pflegepersonen, Angehörige des gehobenen Dienstes für Gesundheits- und Krankenpflege, Pflegeassistenz, Pflegefachassistenz und Betreuungspersonen, die Menschen mit Demenz begleiten." },
      { q: "Können Pflegeeinrichtungen die Fortbildung für Mitarbeiter buchen?", a: "Ja. Pflegeeinrichtungen, Agenturen und Organisationen können Fortbildungen für Mitarbeiter buchen. Die Inhalte können auf die Zielgruppe und den Arbeitsalltag angepasst werden." },
      { q: "Gibt es Fortbildungen online per Zoom?", a: "Ja. Fortbildungen können online per Zoom stattfinden. Das ist besonders praktisch für Teams, Agenturen, Pflegekräfte und Betreuungskräfte, die ortsunabhängig teilnehmen möchten." },
    ],
  },
  {
    id: "unternehmen-gemeinden",
    eyebrow: "Unternehmen & Gemeinden",
    title: "Fragen zu Demenzschulungen für Unternehmen und Gemeinden",
    items: [
      { q: "Warum sollten Gemeinden Demenzaufklärung anbieten?", a: "Gemeinden sind zentrale Orte des Zusammenlebens. Menschen mit Demenz und ihre Angehörigen begegnen dort Nachbarn, Vereinen, Behörden, Geschäften und öffentlichen Einrichtungen. Aufklärung hilft, Unsicherheit abzubauen und ein demenzfreundlicheres Umfeld zu schaffen." },
      { q: "Was bedeutet demenzfreundliche Gemeinde?", a: "Eine demenzfreundliche Gemeinde erkennt, dass Menschen mit Demenz Teil der Gemeinschaft bleiben sollen. Dazu gehören Wissen, Verständnis, Orientierung, respektvolle Kommunikation und Angebote für Angehörige, Bürger und Mitarbeiter." },
      { q: "Können Mitarbeiter ohne Pflegeberuf von Demenzschulungen profitieren?", a: "Ja. Demenzwissen ist nicht nur für Pflegeberufe wichtig. Auch Mitarbeiter in Service, Verkauf, Verwaltung oder Beratung können Situationen mit Menschen mit Demenz erleben. Wer vorbereitet ist, reagiert ruhiger und professioneller." },
      { q: "Was bringt Demenzaufklärung für Teams?", a: "Demenzaufklärung kann Empathie, Kommunikation und Verständnis im Team fördern. Sie hilft auch Mitarbeitern, die privat Angehörige begleiten. Dadurch kann das Thema Pflege und Demenz aus der Tabuzone geholt werden." },
    ],
  },
  {
    id: "pflegealltag",
    eyebrow: "Pflegealltag",
    title: "Fragen zu Demenz und Pflegealltag",
    items: [
      { q: "Wie geht man mit Ablehnung bei Demenz um?", a: "Ablehnung kann viele Gründe haben: Angst, Scham, Schmerz, Überforderung oder fehlendes Verstehen der Situation. Wichtig ist, nicht mit Druck zu reagieren. Oft helfen Pause, andere Formulierungen, Biografiebezug, Wahlmöglichkeiten oder ein späterer neuer Versuch." },
      { q: "Was tun, wenn ein Mensch mit Demenz nicht duschen möchte?", a: "Nicht sofort drängen. Körperpflege kann bei Demenz als unangenehm, beschämend oder bedrohlich erlebt werden. Hilfreich sind Ruhe, Privatsphäre, vertraute Abläufe, einfache Worte, warme Raumtemperatur und die Frage, was genau stört." },
      { q: "Was tun, wenn ein Mensch mit Demenz nicht essen möchte?", a: "Zuerst sollte geprüft werden, ob Schmerzen, Schluckprobleme, Zahnprobleme, Übelkeit, Medikamente oder Überforderung eine Rolle spielen. Hilfreich können kleine Portionen, vertraute Speisen, gemeinsames Essen, Fingerfood und ruhige Atmosphäre sein." },
      { q: "Warum ist Biografiearbeit bei Demenz wichtig?", a: "Biografiearbeit hilft, den Menschen hinter der Erkrankung zu sehen. Frühere Berufe, Hobbys, Gewohnheiten, Musik, Gerüche, Speisen oder Rituale können Zugang schaffen und Sicherheit geben. Demenz nimmt Erinnerungen, aber nicht die ganze Persönlichkeit." },
      { q: "Warum ist Bewegung bei Demenz wichtig?", a: "Bewegung kann Orientierung, Stimmung, Schlaf, Mobilität und Wohlbefinden unterstützen. Es muss kein Sport sein. Schon Spaziergänge, einfache Übungen, Tanzen, Gartenarbeit oder Bewegungsrituale können wertvoll sein." },
      { q: "Was ist Erinnerungsarbeit bei Demenz?", a: "Erinnerungsarbeit nutzt Fotos, Musik, Gegenstände, Gerüche, Geschichten oder frühere Tätigkeiten, um Erinnerungen und Gefühle anzusprechen. Ziel ist nicht Abfragen, sondern Verbindung." },
      { q: "Was bedeutet Validation bei Demenz?", a: "Validation bedeutet, Gefühle ernst zu nehmen, auch wenn die sachliche Aussage nicht stimmt. Statt zu korrigieren, wird versucht zu verstehen, welches Gefühl hinter der Aussage steht. Das kann Menschen mit Demenz beruhigen und Beziehung stärken." },
      { q: "Warum ist Sprache bei Demenz so wichtig?", a: "Sprache kann Sicherheit geben oder Stress auslösen. Menschen mit Demenz brauchen einfache, klare und wertschätzende Kommunikation. Tonfall, Gesichtsausdruck und Körpersprache sind oft genauso wichtig wie die Worte selbst." },
    ],
  },
  {
    id: "radka-eder",
    eyebrow: "Über Radka Eder",
    title: "Fragen zur Expertin Radka Eder",
    items: [
      { q: "Wer ist Radka Eder?", a: "Radka Eder ist Expertin für Demenzaufklärung, diplomierte Gesundheits- und Krankenpflegerin, akademische Gesundheits- und Pflegemanagerin, Demenz- und Seniorentrainerin. Sie begleitet Angehörige, Pflegekräfte, Betreuungskräfte, Unternehmen und Gemeinden dabei, Demenz besser zu verstehen." },
      { q: "Warum nennt sich Radka Eder Demenzdolmetscherin?", a: "Der Begriff Demenzdolmetscherin beschreibt, was Radka Eder macht: Sie übersetzt Demenz in eine verständliche Sprache. Sie macht Verhalten, Symptome und Alltagssituationen begreifbar, damit Angehörige, Pflegekräfte und Betreuungspersonen sicherer reagieren können." },
      { q: "Was bedeutet „Ich übersetze Demenz“?", a: "„Ich übersetze Demenz“ bedeutet: Demenz wird verständlich gemacht. Es geht darum, Verhalten nicht nur zu bewerten, sondern zu verstehen. Dadurch entstehen mehr Sicherheit, mehr Empathie und bessere Begleitung im Alltag." },
      { q: "Warum arbeitet FokusDemenz mit Aufklärung statt nur mit Pflegewissen?", a: "Weil viele Probleme im Demenzalltag durch fehlendes Verständnis entstehen. Fachwissen ist wichtig, aber genauso wichtig sind Sprache, Haltung, Beziehung, Biografie, Kommunikation und alltagstaugliche Lösungen." },
      { q: "Für wen ist FokusDemenz da?", a: "FokusDemenz ist da für Angehörige, pflegende Familien, 24-Stunden-Betreuung, Pflegekräfte, Betreuungskräfte, Agenturen, Unternehmen, Gemeinden und alle Menschen, die Demenz besser verstehen möchten." },
    ],
  },
];

// JSON-LD FAQPage schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: sections.flatMap((s) =>
    s.items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    }))
  ),
};

const Faq = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="FAQ zu Demenz, Beratung, 24-Stunden-Betreuung und GuKG-Fortbildungen | FokusDemenz"
        description="Antworten auf häufige Fragen zu Demenz, Angehörigenberatung, 24-Stunden-Betreuung, Demenzschulungen, Vorträgen und GuKG-Fortbildungen nach § 63 und § 104c GuKG."
        canonical="https://fokusdemenz.at/faq"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="pt-32 pb-12 md:pt-40 md:pb-16 bg-gradient-to-b from-secondary/40 via-background to-background animate-fade-in">
          <div className="container-narrow mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 bg-accent/15 text-accent font-semibold text-xs uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              <HelpCircle className="h-4 w-4" />
              FAQ
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
              Häufige Fragen zu Demenz, Beratung und Fortbildungen
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Hier finden Sie Antworten auf häufige Fragen rund um Demenz, Angehörigenberatung, 24-Stunden-Betreuung, Schulungen, Vorträge und Fortbildungen im Rahmen der GuKG-Fortbildungspflicht. Radka Eder erklärt Demenz verständlich, praxisnah und alltagstauglich.
            </p>
          </div>
        </section>

        {/* Anker-Navigation */}
        <section className="bg-background border-y border-border">
          <div className="container-narrow mx-auto py-6">
            <nav aria-label="FAQ-Themen" className="flex flex-wrap justify-center gap-2">
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="px-4 py-2 rounded-full border border-border text-sm font-medium text-muted-foreground hover:border-accent hover:text-accent transition-colors"
                >
                  {s.eyebrow}
                </a>
              ))}
            </nav>
          </div>
        </section>

        {/* Sektionen */}
        {sections.map((s, idx) => (
          <section
            key={s.id}
            id={s.id}
            className={`section-padding scroll-mt-24 animate-fade-in ${idx % 2 === 1 ? "bg-section-soft" : "bg-background"}`}
          >
            <div className="container-narrow mx-auto max-w-3xl">
              <span className="eyebrow">{s.eyebrow}</span>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-primary mb-8 leading-tight">
                {s.title}
              </h2>
              <Accordion type="single" collapsible className="space-y-3">
                {s.items.map((it, i) => (
                  <AccordionItem
                    key={i}
                    value={`${s.id}-${i}`}
                    className="bg-card border border-border rounded-2xl px-5 data-[state=open]:border-accent transition-colors"
                  >
                    <AccordionTrigger className="text-left font-display text-base md:text-lg font-semibold text-primary hover:no-underline hover:text-accent py-5">
                      {it.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-foreground leading-relaxed pb-5">
                      {it.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>
        ))}

        {/* CTA */}
        <section className="section-padding bg-background animate-fade-in">
          <div className="container-narrow mx-auto text-center max-w-2xl">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4">
              Ihre Frage war nicht dabei?
            </h2>
            <p className="text-muted-foreground mb-10 text-lg">
              Schreiben Sie mir – ich antworte persönlich und unverbindlich.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-full px-8 py-6 text-base transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95">
                <Link to="/kontakt">
                  <Mail className="h-4 w-4 mr-2" />
                  E-Mail schreiben
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="px-8 py-6 text-base border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95">
                <a href="https://wa.me/436645477490" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  WhatsApp
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

export default Faq;
