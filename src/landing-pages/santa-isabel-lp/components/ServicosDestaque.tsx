import { Waves, Bone, Brain, Dumbbell } from "lucide-react";

interface Servico {
  icon: typeof Waves;
  title: string;
  description: string;
  tag: string;
}

const SERVICOS: Servico[] = [
  {
    icon: Bone,
    title: "Fisioterapia Traumato-Ortopédica",
    description:
      "Tratamento de dores articulares, pós-operatório, lesões esportivas e problemas de coluna com técnicas avançadas.",
    tag: "Mais procurado",
  },
  {
    icon: Waves,
    title: "Fisioterapia Aquática",
    description:
      "Reabilitação em piscina terapêutica aquecida. Ideal para dores crônicas, pós-cirúrgico e mobilidade reduzida.",
    tag: "Exclusivo",
  },
  {
    icon: Brain,
    title: "RPG / Reeducação Postural",
    description:
      "Correção postural global, tratamento de escoliose, hérnias de disco e dores crônicas na coluna.",
    tag: "Popular",
  },
  {
    icon: Dumbbell,
    title: "Pilates Terapêutico",
    description:
      "Fortalecimento muscular, flexibilidade e reabilitação funcional com acompanhamento individualizado.",
    tag: "Popular",
  },
];

export function ServicosDestaque() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-teal-600 uppercase tracking-wide mb-2">
            Especialidades
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
            Tratamentos que{" "}
            <span className="text-teal-700">transformam vidas</span>
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Conheça nossas especialidades mais procuradas — são 14+
            modalidades disponíveis.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {SERVICOS.map((servico, i) => (
            <div
              key={servico.title}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-teal-100 transition-all group animate-fade-in-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-50 group-hover:bg-teal-100 rounded-lg flex items-center justify-center transition-colors">
                  <servico.icon className="w-6 h-6 text-teal-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-gray-900">
                      {servico.title}
                    </h3>
                  </div>
                  <span className="inline-block text-xs font-semibold text-teal-600 bg-teal-50 px-2 py-0.5 rounded-full mb-2">
                    {servico.tag}
                  </span>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {servico.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
