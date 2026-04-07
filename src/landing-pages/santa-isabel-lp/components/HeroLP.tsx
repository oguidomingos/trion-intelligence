import { CheckCircle, ArrowDown } from "lucide-react";
import { WhatsAppButton } from "../../santa-isabel/components/WhatsAppButton";
import { CONFIG } from "../../santa-isabel/config";

export function HeroLP() {
  return (
    <section className="relative min-h-[95vh] flex items-center bg-gradient-to-br from-teal-900 via-teal-800 to-teal-950 overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-teal-600/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Urgency badge */}
        <div className="inline-flex items-center gap-2 glass rounded-full px-5 py-2.5 mb-6">
          <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
          <span className="text-sm text-white/90 font-medium">
            Vagas limitadas esta semana
          </span>
        </div>

        {/* Headline — pain-focused */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6">
          As Dores Estão{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-300 to-amber-300">
            Limitando Sua Vida?
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
          Agende uma avaliação gratuita com especialistas que há{" "}
          <strong className="text-white">{CONFIG.yearsActive} anos</strong>{" "}
          devolvem qualidade de vida a milhares de pacientes em Brasília.
        </p>

        {/* Trust points */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-10">
          {[
            "14+ Especialidades",
            "Piscina Terapêutica",
            "Aceitamos Convênios",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2 text-white/90">
              <CheckCircle className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-medium">{item}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <WhatsAppButton
          size="lg"
          label="Quero Agendar Minha Avaliação"
          customMessage="Olá! Vi a landing page e gostaria de agendar uma avaliação gratuita na Clínica Santa Isabel."
          className="animate-pulse-ring text-lg"
        />

        <p className="mt-4 text-white/50 text-xs">
          Resposta em menos de 2 horas pelo WhatsApp
        </p>

        {/* Scroll indicator */}
        <div className="mt-12 animate-bounce">
          <ArrowDown className="w-5 h-5 text-white/40 mx-auto" />
        </div>
      </div>
    </section>
  );
}
