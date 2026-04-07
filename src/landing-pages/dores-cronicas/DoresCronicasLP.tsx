import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { StatsBar } from "./components/StatsBar";
import { Conditions } from "./components/Conditions";
import { Procedures } from "./components/Procedures";
import { Testimonials } from "./components/Testimonials";
import { GoogleReviewsBadge } from "./components/GoogleReviewsBadge";
import { About } from "./components/About";
import { Gallery } from "./components/Gallery";
import { MapSection } from "./components/MapSection";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { StickyMobileCTA } from "./components/StickyMobileCTA";

export function DoresCronicasLP() {
  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased">
      {/* 1. Header */}
      <Header />

      {/* 2. Hero */}
      <Hero />

      {/* 3. Stats Bar */}
      <StatsBar />

      {/* 4. Condições Tratadas */}
      <Conditions />

      {/* 5. Procedimentos */}
      <Procedures />

      {/* 6. Depoimentos */}
      <Testimonials />

      {/* 7. Badge Google Reviews */}
      <GoogleReviewsBadge />

      {/* 8. Sobre a Clínica */}
      <About />

      {/* 9. Fotos da Clínica */}
      <Gallery />

      {/* 10. Mapa + Endereço */}
      <MapSection />

      {/* 11. FAQ */}
      <FAQ />

      {/* 12. Footer com CRM/RQE */}
      <Footer />

      {/* 13. CTA Fixo Mobile */}
      <StickyMobileCTA />

      {/* Bottom padding for sticky CTA on mobile */}
      <div className="h-16 lg:hidden" />
    </div>
  );
}
