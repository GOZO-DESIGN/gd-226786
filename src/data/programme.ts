import { BookOpen, BookMarked, Library, Presentation, Headphones, Laptop, LucideIcon } from "lucide-react";

export type Programm = {
  slug: string;
  n: string;
  group: "Pflegeheim" | "Gemeinden" | "Unternehmen" | "24h-Betreuung" | "Personalvermittlung";
  tag: string;
  name: string;
  shortName: string;
  desc: string;
  format: string;
  icon: LucideIcon;
  highlights: string[];
  zielgruppe: string;
  ergebnis: string;
  gukg?: boolean;
  altText?: string;
};

export const programme: Programm[] = [
  {
    slug: "fliessend-demenz",
    n: "01",
    group: "Pflegeheim",
    tag: "Pflege- & Betreuungsberufe",
    name: "Fließend Demenz",
    shortName: "Fließend Demenz",
    desc: "Die Demenz-Dolmetscher-Fortbildung für Ihr ganzes Haus – mit Vertiefung für Heimhilfe, Pflegeassistenz und Fachsozialbetreuung.",
    format: "Fortbildung, 1 oder 2 Tage · Präsenz, auf Wunsch hybrid",
    icon: BookOpen,
    zielgruppe: "Pflegeheime, Tageszentren und betreute Wohneinrichtungen – für Heimhilfe, Pflegeassistenz, Pflegefachassistenz und Fachsozialbetreuung.",
    ergebnis: "Ihr gesamtes Pflegeteam spricht eine gemeinsame Sprache im Umgang mit Demenz – fachlich fundiert und sofort anwendbar.",
    highlights: [
      "Demenzformen verstehen – Alzheimer, vaskulär, frontotemporal, Lewy-Body",
      "Verhalten als Sprache lesen lernen",
      "Validation und Biografiearbeit in der Praxis",
      "Umgang mit herausforderndem Verhalten",
      "Kommunikationswerkzeuge für den Pflegealltag",
      "Arbeitsheft „Fließend Demenz“ für jede:n Teilnehmer:in",
    ],
    gukg: true,
    altText: "Demenzschulung „Fließend Demenz“ für Pflege- und Betreuungsberufe als Buchmockup von Radka Eder.",
  },
  {
    slug: "wenn-verhalten-eine-sprache-ist",
    n: "02",
    group: "Pflegeheim",
    tag: "Pflegeferne Berufe im Heim",
    name: "Wenn Verhalten eine Sprache ist",
    shortName: "Verhalten als Sprache",
    desc: "Die Schulung für Reinigung, Küche, Verwaltung, Haustechnik und Ehrenamt – speziell für Berufsgruppen ohne Pflegeausbildung.",
    format: "Inhouse-Schulung 4–6 Stunden + Arbeitsheft-Paket",
    icon: BookMarked,
    zielgruppe: "Reinigungspersonal, Küchenteam, Verwaltung, Haustechnik, Empfang und Ehrenamtliche in Pflegeeinrichtungen.",
    ergebnis: "Alle Berufsgruppen im Haus fühlen sich im Kontakt mit Bewohner:innen mit Demenz sicher – ohne Pflegevorwissen.",
    highlights: [
      "Was Demenz ist – verständlich und ohne Fachchinesisch",
      "5-Schritte-SOS für schwierige Situationen",
      "Sichere Begegnung im Flur, in der Küche, beim Putzen",
      "Was sage ich? Was sage ich besser nicht?",
      "Praktische Übungen mit Alltagsbeispielen",
      "Arbeitsheft „Wenn Verhalten eine Sprache ist“",
    ],
  },
  {
    slug: "demenz-woerterbuch-gemeinden",
    n: "03",
    group: "Gemeinden",
    tag: "Gemeinden & Regionen",
    name: "Das Demenz-Wörterbuch für Gemeinden",
    shortName: "Demenz-Wörterbuch",
    desc: "Das modulare Programm. Ihre Gemeinde schlägt nach, was sie gerade braucht – vom Bürgervortrag bis zum Aktionstag.",
    format: "Modular: Vortrag · Aktionstag · Schulung",
    icon: Library,
    zielgruppe: "Gemeinden, Städte und Regionen, die demenzfreundlich werden wollen – Bürgermeisterämter, Sozialreferate, Pfarrgemeinderäte.",
    ergebnis: "Eine demenzfreundliche Gemeinde, in der Bürger:innen wissen, was Demenz ist und wie sie helfen können.",
    highlights: [
      "Modul A: Bürgervortrag „Demenz verstehen“",
      "Modul B: Aktionstag mit Infoständen und Begegnung",
      "Modul C: Schulung für Gemeindemitarbeiter:innen",
      "Modul D: Schulung für Einzelhandel, Banken, Post",
      "Modul E: Angehörigenabend",
      "Frei kombinierbar nach Bedarf Ihrer Gemeinde",
    ],
  },
  {
    slug: "sprachkurs-demenz",
    n: "04",
    group: "Unternehmen",
    tag: "Unternehmen",
    name: "Sprachkurs Demenz",
    shortName: "Sprachkurs Demenz",
    desc: "Demenzkompetenz für Teams mit Kundenkontakt und für Mitarbeiter, die zu Hause Angehörige pflegen.",
    format: "Impulsvortrag · Workshop · Bühnenformat",
    icon: Presentation,
    zielgruppe: "Unternehmen mit Kundenkontakt (Banken, Versicherungen, Handel, Verkehr) und Unternehmen, die pflegende Angehörige unterstützen.",
    ergebnis: "Mitarbeiter:innen erkennen Demenz im Kund:innenkontakt und finden Halt, wenn Demenz sie zu Hause selbst betrifft.",
    highlights: [
      "Impulsvortrag (60–90 Min) für große Runden",
      "Workshop (halb- oder ganztägig) zum Vertiefen",
      "Bühnenformat für Firmenveranstaltungen",
      "Modul „Pflegende Angehörige am Arbeitsplatz“",
      "Branchenspezifische Beispiele",
      "BGM-fähig (Betriebliches Gesundheitsmanagement)",
    ],
  },
  {
    slug: "fliessend-demenz-zuhause",
    n: "05",
    group: "24h-Betreuung",
    tag: "Agenturen 24-Stunden-Betreuung",
    name: "Fließend Demenz Zuhause",
    shortName: "Fließend Demenz Zuhause",
    desc: "Das laufende Online-Programm für Ihre Betreuerinnen und Betreuer. Lernen dort, wo die Sprache gesprochen wird: beim Klienten.",
    format: "Online-Akademie + monatlicher Live-Community-Call",
    icon: Headphones,
    zielgruppe: "24-Stunden-Betreuungsagenturen, die ihre Betreuer:innen kontinuierlich in Demenzkompetenz weiterbilden möchten.",
    ergebnis: "Ihre Betreuer:innen bleiben fachlich up-to-date, fühlen sich begleitet und reduzieren Krisen beim Klienten.",
    highlights: [
      "Online-Akademie mit Modulen in einfacher Sprache",
      "Monatlicher Live-Community-Call mit Radka Eder",
      "Materialien zum Mitnehmen zum Klienten",
      "Krisenintervention auf Abruf",
      "Mehrsprachige Begleitmaterialien (DE/SK/HU auf Anfrage)",
      "Skalierbar für die ganze Agentur",
    ],
  },
  {
    slug: "fliessend-demenz-online",
    n: "06",
    group: "Personalvermittlung",
    tag: "Personalagenturen Pflege",
    name: "Fließend Demenz Online",
    shortName: "Fließend Demenz Online",
    desc: "Das 8-Stunden-Programm für vermitteltes Pflegepersonal. Rein online, dienstplantauglich, mit Zertifikat.",
    format: "8 Stunden online · 4 Blöcke à 2 Stunden",
    icon: Laptop,
    zielgruppe: "Personalagenturen, die Pflegekräfte vermitteln und ihnen eine zertifizierte Demenz-Fortbildung mitgeben wollen.",
    ergebnis: "Vermitteltes Personal startet mit einem fundierten Demenz-Zertifikat und hebt sich am Markt ab.",
    highlights: [
      "4 Live-Blöcke à 2 Stunden – dienstplantauglich",
      "Block 1: Demenz verstehen",
      "Block 2: Verhalten lesen lernen",
      "Block 3: Kommunikation & Validation",
      "Block 4: Krisen, Selbstfürsorge, Praxistransfer",
      "Anerkanntes Zertifikat „Fließend Demenz Online“",
    ],
  },
];

export const groupLabels = ["Alle", "Pflegeheim", "Gemeinden", "Unternehmen", "24h-Betreuung", "Personalvermittlung"] as const;

export const getProgramm = (slug: string) => programme.find((p) => p.slug === slug);
