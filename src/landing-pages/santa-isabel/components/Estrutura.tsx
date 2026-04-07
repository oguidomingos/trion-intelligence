import { Building2, Waves, Accessibility, Wind, Dumbbell, Stethoscope } from "lucide-react";

const FEATURES = [
  {
    icon: Building2,
    title: "3 Andares Completos",
    description:
      "Estrutura ampla com salas de atendimento individuais e coletivas, equipamentos de última geração.",
  },
  {
    icon: Waves,
    title: "Piscina Terapêutica",
    description:
      "Piscina aquecida para hidroterapia, proporcionando reabilitação com conforto e menor impacto articular.",
  },
  {
    icon: Wind,
    title: "Ventilação Natural",
    description:
      "Ambiente arejado e agradável que contribui para o bem-estar durante o tratamento.",
  },
  {
    icon: Accessibility,
    title: "Acessibilidade PCD",
    description:
      "Toda a clínica adaptada para pessoas com deficiência, garantindo acesso universal e seguro.",
  },
  {
    icon: Dumbbell,
    title: "Sala de Pilates",
    description:
      "Equipamentos profissionais de Pilates para fortalecimento e reabilitação funcional.",
  },
  {
    icon: Stethoscope,
    title: "Equipe Multidisciplinar",
    description:
      "Fisioterapeutas, nutricionistas e psicólogos trabalhando de forma integrada.",
  },
];

export function Estrutura() {
  return (
    <section id="estrutura" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-teal-700 font-semibold text-sm uppercase tracking-wider mb-3">
            Nossa Estrutura
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Um Espaço Pensado Para a{" "}
            <span className="font-display">Sua Recuperação</span>
          </h2>
          <div className="section-divider mb-8" />
          <p className="text-lg text-gray-600">
            Conheça a infraestrutura que nos tornou referência em reabilitação no DF.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map(({ icon: Icon, title, description }, i) => (
            <div
              key={title}
              className="group relative overflow-hidden p-6 rounded-2xl bg-gradient-to-br from-teal-50 to-white border border-teal-100/60 hover:border-teal-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Glassmorphism accent */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-teal-200/20 rounded-full blur-xl group-hover:bg-teal-200/30 transition-colors" />

              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-teal-700 text-white flex items-center justify-center mb-5 shadow-lg shadow-teal-700/20 group-hover:scale-105 transition-transform">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Photo placeholder strip */}
        <div className="mt-12 rounded-2xl overflow-hidden bg-gradient-to-r from-teal-800 via-teal-700 to-teal-800 p-8 lg:p-12 text-center">
          <div className="glass-dark inline-block rounded-xl px-6 py-3 mb-4">
            <span className="text-teal-200 text-sm font-medium">
              Fotos da Clínica — Em breve
            </span>
          </div>
          <p className="text-white/70 text-sm max-w-md mx-auto">
            Estamos preparando um tour virtual pela nossa estrutura.
            Enquanto isso, venha nos visitar pessoalmente!
          </p>
        </div>
      </div>
    </section>
  );
}
