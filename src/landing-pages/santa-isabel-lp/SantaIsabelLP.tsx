import { HeroLP } from "./components/HeroLP";
import { ProblemSection } from "./components/ProblemSection";
import { SolutionSection } from "./components/SolutionSection";
import { ServicosDestaque } from "./components/ServicosDestaque";
import { Diferenciais } from "./components/Diferenciais";
import { DepoimentosLP } from "./components/DepoimentosLP";
import { FAQLP } from "./components/FAQLP";
import { CTAFinalLP } from "./components/CTAFinalLP";
import { StickyMobileCTALP } from "./components/StickyMobileCTALP";

export function SantaIsabelLP() {
  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased">
      <HeroLP />
      <ProblemSection />
      <SolutionSection />
      <ServicosDestaque />
      <Diferenciais />
      <DepoimentosLP />
      <FAQLP />
      <CTAFinalLP />
      <StickyMobileCTALP />
      <div className="h-16 lg:hidden" />
    </div>
  );
}
