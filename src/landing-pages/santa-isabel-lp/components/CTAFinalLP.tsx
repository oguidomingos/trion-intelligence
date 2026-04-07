import { MessageCircle, Phone, ArrowRight } from "lucide-react";
import { LP_CONFIG, getWhatsAppUrl } from "../config";

export function CTAFinalLP() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-teal-800 via-teal-700 to-teal-900 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-4 py-2 mb-6">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-sm text-white/90 font-medium">
            Vagas limitadas esta semana
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
          Não deixe a dor decidir por você
        </h2>

        <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto leading-relaxed">
          Agende sua avaliação agora e dê o primeiro passo para recuperar sua
          qualidade de vida com quem entende do assunto.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-pulse inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg transition-all active:scale-95"
          >
            <MessageCircle className="w-6 h-6" />
            Agendar pelo WhatsApp
          </a>

          <a
            href={`tel:${LP_CONFIG.phone.replace(/\D/g, "")}`}
            className="inline-flex items-center gap-2 text-white/80 hover:text-white border border-white/20 hover:border-white/40 px-6 py-4 rounded-xl transition-all font-medium"
          >
            <Phone className="w-5 h-5" />
            Ligar Agora
          </a>
        </div>

        <div className="flex items-center justify-center gap-2 text-white/50 text-sm">
          <ArrowRight className="w-4 h-4" />
          <span>Atendimento de Seg a Sex, 8h às 20h</span>
        </div>
      </div>
    </section>
  );
}
