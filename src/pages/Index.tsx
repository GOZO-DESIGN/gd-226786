import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TargetGroups } from "@/components/TargetGroups";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Testimonials } from "@/components/Testimonials";
import { FreeResource } from "@/components/FreeResource";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <TargetGroups />
        <Services />
        <About />
        <Testimonials />
        <FreeResource />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
