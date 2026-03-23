import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import SEO from "@/components/SEO";

const Impressum = () => {
  return (
    <>
      <SEO
        title="Impressum – FokusDemenz | Radka Eder"
        description="Impressum von FokusDemenz – Radka Eder, Demenztrainerin in Vöcklabruck, Österreich."
        canonical="/impressum"
      />
      <Header />
      <main id="main-content" className="min-h-screen bg-background">
        <section className="section-padding">
          <div className="container-narrow mx-auto max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8">Impressum</h1>

            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <div>
                <p className="font-semibold text-foreground">Radka Eder</p>
                <p>Mühlbachgasse 25/3<br />4840 Vöcklabruck</p>
                <p>
                  E-Mail:{" "}
                  <a href="mailto:info@fokusdemenz.at" className="text-primary hover:underline">
                    info@fokusdemenz.at
                  </a>
                </p>
              </div>

              <div>
                <h2 className="text-xl font-display font-semibold text-foreground mt-8 mb-3">Redaktionell verantwortlich</h2>
                <p>Radka Eder</p>
              </div>

              <div>
                <h2 className="text-xl font-display font-semibold text-foreground mt-8 mb-3">EU-Streitschlichtung</h2>
                <p>
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
                  <a
                    href="https://ec.europa.eu/consumers/odr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline break-all"
                  >
                    https://ec.europa.eu/consumers/odr/
                  </a>
                </p>
                <p>Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
              </div>

              <div>
                <h2 className="text-xl font-display font-semibold text-foreground mt-8 mb-3">
                  Verbraucher­streit­beilegung / Universal­schlichtungs­stelle
                </h2>
                <p>
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                  Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Impressum;
