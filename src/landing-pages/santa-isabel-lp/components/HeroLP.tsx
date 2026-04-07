import { CheckCircle, ArrowDown } from "lucide-react";
import { LP_CONFIG, getWhatsAppUrl } from "../config";

const TRUST_POINTS = [
  "Desde 1980 — há " + LP_CONFIG.yearsActive + " anos",
  "14+ especialidades",
  "Piscina terapêutica",
];

export function HeroLP() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-teal-900 via-teal-800 to-teal-900 overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-24 w-72 h-72 bg-amber-500/8 rounded-full blur-3xl" />
      </div>

      <div className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 text-center">
        {/* Trust badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-5 py-2 mb-8 animate-fade-in-up">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-sm text-white/90 font-medium">
            Maior centro de reabilitação privado do DF
          </span>
        </div>

        {/* Headline — addresses pain */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight mb-6 animate-fade-in-up delay-100">
          Dor limita sua vida?
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-amber-300">
            Nós devolvemos seus movimentos.
          </span>
        </h1>

        {/* Sub-headline */}
        <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed animate-fade-in-up delay-200">
          Equipe multidisciplinar, estrutura completa com piscina terapêutica e{" "}
          {LP_CONFIG.yearsActive} anos de experiência cuidando de você.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 animate-fade-in-up delay-300">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-pulse inline-flex items-center gap-3 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-400 hover:to-teal-500 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg shadow-teal-900/30 transition-all active:scale-95"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.75.75 0 00.917.918l4.462-1.494A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.94 9.94 0 01-5.39-1.585l-.386-.238-2.65.887.886-2.649-.238-.386A9.94 9.94 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
            </svg>
            Agendar Minha Avaliação
          </a>

          <a
            href={`tel:${LP_CONFIG.phone.replace(/\D/g, "")}`}
            className="inline-flex items-center gap-2 text-white/80 hover:text-white border border-white/20 hover:border-white/40 px-6 py-4 rounded-xl transition-all font-medium"
          >
            📞 {LP_CONFIG.phone}
          </a>
        </div>

        {/* Trust points */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 animate-fade-in-up delay-400">
          {TRUST_POINTS.map((point) => (
            <div
              key={point}
              className="flex items-center gap-2 text-white/70 text-sm"
            >
              <CheckCircle className="w-4 h-4 text-teal-300" />
              <span>{point}</span>
            </div>
          ))}
        </div>

        {/* Scroll hint */}
        <div className="mt-12 animate-bounce">
          <ArrowDown className="w-5 h-5 text-white/40 mx-auto" />
        </div>
      </div>
    </section>
  );
}
