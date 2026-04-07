import { HeroLP } from "./components/HeroLP";
import { Problema } from "./components/Problema";
import { Solucao } from "./components/Solucao";
import { ServicosDestaque } from "./components/ServicosDestaque";
import { Diferenciais } from "./components/Diferenciais";
import { DepoimentosLP } from "./components/DepoimentosLP";
import { FAQLP } from "./components/FAQLP";
import { CTAFinalLP } from "./components/CTAFinalLP";
import { FooterLP } from "./components/FooterLP";
import { StickyMobileCTA } from "../santa-isabel/components/StickyMobileCTA";
import { ScrollReveal } from "../santa-isabel/components/ScrollReveal";

export function SantaIsabelLP() {
  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased">
      <HeroLP />

      <ScrollReveal>
        <Problema />
      </ScrollReveal>

      <ScrollReveal>
        <Solucao />
      </ScrollReveal>

      <ScrollReveal>
        <ServicosDestaque />
      </ScrollReveal>

      <ScrollReveal>
        <Diferenciais />
      </ScrollReveal>

      <ScrollReveal>
        <DepoimentosLP />
      </ScrollReveal>

      <ScrollReveal>
        <FAQLP />
      </ScrollReveal>

      <CTAFinalLP />
      <FooterLP />
      <StickyMobileCTA />

      <div className="h-16 lg:hidden" />
    </div>
  );
}
