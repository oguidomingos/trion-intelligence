import { ArrowRight, Phone } from "lucide-react";
import { CONFIG } from "../config";
import { WhatsAppButton } from "./WhatsAppButton";

export function CTAFinal() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-teal-800 via-teal-700 to-teal-900 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0">
        <div className="absolute -top-24 -left-24 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-amber-500/8 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
          <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
          <span className="text-sm text-white/90 font-medium">
            Agende sua avaliação hoje
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          Recupere Sua{" "}
          <span className="font-display text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-amber-300">
            Qualidade de Vida
          </span>
        </h2>

        <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
          Há {CONFIG.yearsActive} anos ajudando pacientes a recuperarem seus movimentos
          e bem-estar. Venha conhecer o maior centro de reabilitação privado do DF.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <WhatsAppButton
            size="lg"
            label="Agendar Minha Avaliação"
            className="animate-pulse-ring"
          />

          <a
            href={`tel:${CONFIG.phone.replace(/\D/g, "")}`}
            className="inline-flex items-center gap-2 px-6 py-4 rounded-xl text-white border border-white/20 hover:bg-white/10 transition-all font-semibold"
          >
            <Phone className="w-5 h-5" />
            {CONFIG.phone}
          </a>
        </div>

        <div className="flex items-center justify-center gap-2 text-white/60 text-sm">
          <ArrowRight className="w-4 h-4" />
          <span>Resposta rápida pelo WhatsApp</span>
        </div>
      </div>
    </section>
  );
}
