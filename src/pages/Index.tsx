import { Phone, Mail, Construction } from "lucide-react";
import Logo from "@/assets/logo.svg";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary via-background to-gold-light flex items-center justify-center p-6">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="relative max-w-2xl w-full text-center">
        {/* Logo */}
        <div className="mb-10 animate-fade-in">
          <img 
            src={Logo} 
            alt="FokusDemenz" 
            className="h-28 md:h-36 w-auto mx-auto"
          />
        </div>

        {/* Construction Icon */}
        <div className="flex justify-center mb-8 animate-fade-in" style={{ animationDelay: "100ms" }}>
          <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center">
            <Construction className="h-10 w-10 text-accent" />
          </div>
        </div>

        {/* Headline */}
        <h1 
          className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 animate-fade-in"
          style={{ animationDelay: "200ms" }}
        >
          Wir befinden uns im Aufbau
        </h1>

        {/* Subtext */}
        <p 
          className="text-lg md:text-xl text-muted-foreground mb-12 max-w-lg mx-auto leading-relaxed animate-fade-in"
          style={{ animationDelay: "300ms" }}
        >
          Unsere neue Website entsteht gerade. Bald finden Sie hier alles rund um professionelle Demenzbegleitung.
        </p>

        {/* Contact Card */}
        <div 
          className="bg-background/80 backdrop-blur-sm rounded-2xl border border-border p-8 shadow-lg animate-fade-in"
          style={{ animationDelay: "400ms" }}
        >
          <h2 className="font-display text-xl font-semibold text-primary mb-6">
            Kontaktieren Sie mich gerne
          </h2>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {/* Phone */}
            <a 
              href="tel:+436645477490" 
              className="flex items-center gap-3 text-foreground hover:text-accent transition-colors group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <Phone className="h-5 w-5 text-primary group-hover:text-accent transition-colors" />
              </div>
              <span className="font-medium">+43 (0) 664 5477490</span>
            </a>

            {/* Email */}
            <a 
              href="mailto:info@fokusdemenz.at" 
              className="flex items-center gap-3 text-foreground hover:text-accent transition-colors group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <Mail className="h-5 w-5 text-primary group-hover:text-accent transition-colors" />
              </div>
              <span className="font-medium">info@fokusdemenz.at</span>
            </a>
          </div>
        </div>

        {/* Tagline */}
        <p 
          className="mt-10 text-accent font-display text-lg italic animate-fade-in"
          style={{ animationDelay: "500ms" }}
        >
          „Ich übersetze Demenz"
        </p>
        <p 
          className="mt-2 text-muted-foreground text-sm animate-fade-in"
          style={{ animationDelay: "600ms" }}
        >
          Radka Eder · Demenzexpertin
        </p>
      </div>
    </div>
  );
};

export default Index;
