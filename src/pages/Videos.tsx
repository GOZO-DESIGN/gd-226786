import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SEO } from "@/components/SEO";
import { YouTubeEmbed } from "@/components/YouTubeEmbed";

const videos = [
  {
    id: "QOlQwOHs8Tg",
    title: "Die Geschichte von Alzheimer und Auguste Deter 1901",
    quote: "„Ich habe mich sozusagen verloren“",
    description:
      "Die Geschichte hinter der Alzheimer-Krankheit und der Patientin Auguste Deter – verständlich erzählt von Radka Eder.",
  },
];

const Videos = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Videos über Demenz | FokusDemenz"
        description="Videos von Radka Eder über Demenz, Alzheimer, Kommunikation und einen verständnisvollen Umgang im Alltag."
        canonical="https://fokusdemenz.at/videos"
      />
      <Header />
      <main id="main-content">
        <section className="pt-32 pb-12 md:pt-40 md:pb-16 bg-section-soft animate-fade-in">
          <div className="container-narrow mx-auto text-center">
            <span className="eyebrow">Wissen verständlich erklärt</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary mb-5">
              Videos
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Geschichten, Wissen und praktische Impulse rund um Demenz – verständlich und nah am Leben erklärt.
            </p>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container-narrow mx-auto">
            <div className="grid gap-12 md:grid-cols-2">
              {videos.map((video) => (
                <article key={video.id} className="space-y-5">
                  <YouTubeEmbed videoId={video.id} title={`${video.title}: ${video.quote}`} />
                  <div>
                    <h2 className="font-display text-2xl font-bold text-primary mb-2">
                      {video.title}
                    </h2>
                    <p className="font-display text-lg font-medium text-accent mb-3">
                      {video.quote}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {video.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Videos;