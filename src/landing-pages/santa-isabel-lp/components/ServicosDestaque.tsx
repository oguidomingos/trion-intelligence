import { Bone, Waves, Activity, Dumbbell } from "lucide-react";

const FEATURED = [
  {
    icon: Bone,
    name: "Traumato-Ortopédica",
    desc: "Tratamento especializado para lesões musculoesqueléticas, pós-operatórios e dores articulares.",
    tag: "Mais procurado",
  },
  {
    icon: Waves,
    name: "Fisioterapia Aquática",
    desc: "Reabilitação em piscina terapêutica aquecida com menor impacto e maior conforto.",
    tag: "Exclusivo",
  },
  {
    icon: Activity,
    name: "RPG / Escoliose",
    desc: "Correção postural global para dores crônicas nas costas, escoliose e desvios posturais.",
    tag: "Alta demanda",
  },
  {
    icon: Dumbbell,
    name: "Pilates Terapêutico",
    desc: "Fortalecimento e flexibilidade com supervisão fisioterápica para resultados duradouros.",
    tag: "Prevenção",
  },
];

export function ServicosDestaque() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-teal-700 font-semibold text-sm uppercase tracking-wider mb-3">
            Especialidades em Destaque
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
            Tratamentos Que Mais Transformam Vidas
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {FEATURED.map(({ icon: Icon, name, desc, tag }) => (
            <div
              key={name}
              className="group p-6 rounded-2xl bg-white border border-gray-100 hover:border-teal-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center group-hover:bg-teal-200 transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold text-teal-700 bg-teal-50 px-3 py-1 rounded-full">
                  {tag}
                </span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{name}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-500 text-sm mt-8">
          + 10 outras especialidades disponíveis. Consulte-nos pelo WhatsApp.
        </p>
      </div>
    </section>
  );
}
