import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "Nach dem Begleitprogramm habe ich 80% weniger Konfliktsituationen mit meinem Vater. Ich weiß jetzt, wie ich reagieren muss.",
    author: "Thomas S.",
    role: "Sohn eines Demenzpatienten",
  },
  {
    quote: "Frau Eder hat unser gesamtes Team geschult. Die Zusammenarbeit mit unseren Demenz-Bewohnern hat sich spürbar verbessert.",
    author: "Pflegedienstleitung",
    role: "Seniorenheim Niederösterreich",
  },
];

export const Testimonials = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-narrow mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4">
            Was Kunden sagen
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-background border-border hover:border-accent/30 transition-colors"
            >
              <CardContent className="p-8">
                <Quote className="h-10 w-10 text-accent/30 mb-4" />
                <blockquote className="text-lg text-foreground leading-relaxed mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold">
                      {testimonial.author.split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-primary">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
