import { Phone, Clock, MapPin } from "lucide-react";
import { WhatsAppButton } from "../../santa-isabel/components/WhatsAppButton";
import { CONFIG } from "../../santa-isabel/config";

export function CTAFinalLP() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-teal-900 via-teal-800 to-teal-950 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute -top-32 left-1/2 w-[600px] h-[600px] bg-teal-600/8 rounded-full blur-3xl -translate-x-1/2" />
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 glass rounded-full px-5 py-2.5 mb-6">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-sm text-white/90 font-medium">
            Atendimento imediato pelo WhatsApp
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          Não Espere a Dor Piorar.{" "}
          <span className="font-display text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-amber-300">
            Aja Agora.
          </span>
        </h2>

        <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
          Quanto antes você iniciar o tratamento, mais rápida será sua recuperação.
          Agende sua avaliação hoje mesmo.
        </p>

        <WhatsAppButton
          size="lg"
          label="Agendar Minha Avaliação Agora"
          customMessage="Olá! Quero agendar minha avaliação o mais rápido possível na Clínica Santa Isabel."
          className="animate-pulse-ring"
        />

        {/* Quick info */}
        <div className="mt-10 flex flex-wrap justify-center gap-6 text-white/60 text-sm">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>{CONFIG.phone}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>{CONFIG.openingHours}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>Guará II, Brasília-DF</span>
          </div>
        </div>
      </div>
    </section>
  );
}
