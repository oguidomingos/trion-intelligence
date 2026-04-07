import { CheckCircle, Users, Target, Heart } from "lucide-react";
import { LP_CONFIG, getWhatsAppUrl } from "../config";

const STEPS = [
  {
    icon: Target,
    title: "Avaliação completa",
    description:
      "Entendemos a causa da sua dor com uma avaliação detalhada e personalizada.",
  },
  {
    icon: Users,
    title: "Tratamento multidisciplinar",
    description:
      "Fisioterapeutas, nutricionistas e psicólogos trabalhando juntos pelo seu bem-estar.",
  },
  {
    icon: Heart,
    title: "Recuperação real",
    description:
      "Protocolos modernos que devolvem sua mobilidade, força e qualidade de vida.",
  },
];

export function SolutionSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-teal-600 uppercase tracking-wide mb-2">
            A solução
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Tratamento personalizado no{" "}
            <span className="text-teal-700">
              maior centro de reabilitação do DF
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Há {LP_CONFIG.yearsActive} anos, a Clínica Santa Isabel transforma
            a vida de milhares de pacientes com um método que une ciência,
            cuidado e estrutura completa.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-8 mb-12">
          {STEPS.map((step, i) => (
            <div
              key={step.title}
              className="text-center animate-fade-in-up"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-teal-500 to-teal-700 rounded-2xl flex items-center justify-center mb-5 shadow-lg shadow-teal-700/20">
                <step.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-xs font-bold text-teal-500 mb-1">
                PASSO {i + 1}
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-pulse inline-flex items-center gap-2 bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-500 hover:to-teal-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all active:scale-95"
          >
            <CheckCircle className="w-5 h-5" />
            Quero Agendar Minha Avaliação
          </a>
          <p className="text-sm text-gray-400 mt-3">
            Resposta rápida pelo WhatsApp
          </p>
        </div>
      </div>
    </section>
  );
}
