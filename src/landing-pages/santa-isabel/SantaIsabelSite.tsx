import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { StatsBar } from "./components/StatsBar";
import { Sobre } from "./components/Sobre";
import { Servicos } from "./components/Servicos";
import { Estrutura } from "./components/Estrutura";
import { Convenios } from "./components/Convenios";
import { Depoimentos } from "./components/Depoimentos";
import { Localizacao } from "./components/Localizacao";
import { FAQ } from "./components/FAQ";
import { CTAFinal } from "./components/CTAFinal";
import { Footer } from "./components/Footer";
import { StickyMobileCTA } from "./components/StickyMobileCTA";
import { WhatsAppFloat } from "./components/WhatsAppFloat";
import { ScrollReveal } from "./components/ScrollReveal";

export function SantaIsabelSite() {
  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased">
      <Header />
      <Hero />
      <StatsBar />

      <ScrollReveal>
        <Sobre />
      </ScrollReveal>

      <ScrollReveal>
        <Servicos />
      </ScrollReveal>

      <ScrollReveal>
        <Estrutura />
      </ScrollReveal>

      <ScrollReveal>
        <Convenios />
      </ScrollReveal>

      <ScrollReveal>
        <Depoimentos />
      </ScrollReveal>

      <ScrollReveal>
        <Localizacao />
      </ScrollReveal>

      <ScrollReveal>
        <FAQ />
      </ScrollReveal>

      <CTAFinal />
      <Footer />
      <StickyMobileCTA />
      <WhatsAppFloat />

      <div className="h-16 lg:hidden" />
    </div>
  );
}
