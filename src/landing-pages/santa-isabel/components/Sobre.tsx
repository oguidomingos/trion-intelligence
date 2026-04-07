import { Award, Heart, Shield, TrendingUp } from "lucide-react";
import { CONFIG } from "../config";

const PILLARS = [
  {
    icon: Award,
    title: "Tradição",
    description: `Desde ${CONFIG.foundedYear}, somos referência em reabilitação no Distrito Federal.`,
  },
  {
    icon: Heart,
    title: "Cuidado Integral",
    description:
      "Abordagem multidisciplinar que trata a pessoa como um todo, não apenas o sintoma.",
  },
  {
    icon: Shield,
    title: "Confiança",
    description:
      "Milhares de pacientes já recuperaram sua qualidade de vida conosco.",
  },
  {
    icon: TrendingUp,
    title: "Inovação",
    description:
      "Técnicas modernas combinadas com a experiência de mais de quatro décadas.",
  },
];

export function Sobre() {
  return (
    <section id="sobre" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-teal-700 font-semibold text-sm uppercase tracking-wider mb-3">
            Nossa História
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            <span className="font-display">{CONFIG.yearsActive} Anos</span>{" "}
            Cuidando da Sua Saúde
          </h2>
          <div className="section-divider mb-8" />
          <p className="text-lg text-gray-600 leading-relaxed">
            Fundada em {CONFIG.foundedYear}, a Clínica de Fisioterapia Santa Isabel
            se consolidou como o maior centro de reabilitação privado do Distrito
            Federal. Com uma estrutura de 3 andares, piscina terapêutica e equipe
            altamente qualificada, oferecemos um atendimento completo e humanizado.
          </p>
        </div>

        {/* Pillars grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map(({ icon: Icon, title, description }, i) => (
            <div
              key={title}
              className="group p-6 rounded-2xl bg-gray-50 hover:bg-teal-50 border border-gray-100 hover:border-teal-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center mb-4 group-hover:bg-teal-200 transition-colors">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
