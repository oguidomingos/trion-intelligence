import { useState } from "react";
import {
  Bone,
  Brain,
  Droplets,
  Wind,
  Waves,
  Sparkles,
  Target,
  Dumbbell,
  Heart,
  Footprints,
  Activity,
  Leaf,
  Apple,
  SmilePlus,
} from "lucide-react";

interface Servico {
  icon: React.ElementType;
  name: string;
  description: string;
  category: "fisioterapia" | "terapias" | "saude";
}

const SERVICOS: Servico[] = [
  {
    icon: Bone,
    name: "Traumato-Ortopédica",
    description:
      "Tratamento de lesões musculoesqueléticas, fraturas, pós-operatórios ortopédicos e dores articulares.",
    category: "fisioterapia",
  },
  {
    icon: Heart,
    name: "Fisioterapia Pélvica",
    description:
      "Reabilitação do assoalho pélvico para incontinência, pré e pós-parto, e disfunções pélvicas.",
    category: "fisioterapia",
  },
  {
    icon: Brain,
    name: "Neurológica / Vestibular",
    description:
      "Reabilitação de AVC, Parkinson, esclerose múltipla, tonturas e distúrbios de equilíbrio.",
    category: "fisioterapia",
  },
  {
    icon: Waves,
    name: "Fisioterapia Aquática",
    description:
      "Hidroterapia em piscina terapêutica aquecida para reabilitação com menor impacto articular.",
    category: "fisioterapia",
  },
  {
    icon: Wind,
    name: "Cardiorrespiratória",
    description:
      "Reabilitação pulmonar e cardíaca para pós-COVID, DPOC, asma e pós-cirúrgico.",
    category: "fisioterapia",
  },
  {
    icon: Activity,
    name: "RPG / Escoliose",
    description:
      "Reeducação Postural Global para correção de desvios posturais, escoliose e dores crônicas.",
    category: "fisioterapia",
  },
  {
    icon: Sparkles,
    name: "Acupuntura",
    description:
      "Técnica milenar para alívio da dor, estresse, ansiedade e diversas condições de saúde.",
    category: "terapias",
  },
  {
    icon: Target,
    name: "Osteopatia",
    description:
      "Terapia manual para dores musculares, articulares e viscerais com abordagem global do corpo.",
    category: "terapias",
  },
  {
    icon: Dumbbell,
    name: "Pilates Terapêutico",
    description:
      "Fortalecimento, flexibilidade e consciência corporal com supervisão fisioterápica.",
    category: "terapias",
  },
  {
    icon: SmilePlus,
    name: "DTM (Articulação Temporomandibular)",
    description:
      "Tratamento de dores na mandíbula, bruxismo, estalos e dificuldade para abrir a boca.",
    category: "terapias",
  },
  {
    icon: Footprints,
    name: "Avaliação Biomecânica de Corrida",
    description:
      "Análise completa da pisada e movimento para prevenção de lesões em corredores.",
    category: "terapias",
  },
  {
    icon: Droplets,
    name: "Drenagem Linfática",
    description:
      "Técnica manual para redução de edema, melhora da circulação e recuperação pós-cirúrgica.",
    category: "terapias",
  },
  {
    icon: Apple,
    name: "Nutrição",
    description:
      "Acompanhamento nutricional personalizado para potencializar os resultados da reabilitação.",
    category: "saude",
  },
  {
    icon: Leaf,
    name: "Psicologia",
    description:
      "Suporte psicológico para pacientes em reabilitação, manejo da dor crônica e qualidade de vida.",
    category: "saude",
  },
];

const CATEGORIES = [
  { key: "all", label: "Todos" },
  { key: "fisioterapia", label: "Fisioterapia" },
  { key: "terapias", label: "Terapias" },
  { key: "saude", label: "Saúde Integral" },
] as const;

type CategoryKey = (typeof CATEGORIES)[number]["key"];

export function Servicos() {
  const [active, setActive] = useState<CategoryKey>("all");

  const filtered =
    active === "all"
      ? SERVICOS
      : SERVICOS.filter((s) => s.category === active);

  return (
    <section id="servicos" className="py-20 lg:py-28 bg-gray-50 pattern-wave">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block text-teal-700 font-semibold text-sm uppercase tracking-wider mb-3">
            Nossos Serviços
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            <span className="font-display">14+ Especialidades</span> Para Sua Recuperação
          </h2>
          <div className="section-divider mb-8" />
          <p className="text-lg text-gray-600">
            Uma equipe multidisciplinar completa para tratar cada aspecto da sua saúde.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {CATEGORIES.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                active === key
                  ? "bg-teal-700 text-white shadow-md shadow-teal-700/20"
                  : "bg-white text-gray-600 hover:bg-teal-50 hover:text-teal-700 border border-gray-200"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map(({ icon: Icon, name, description }, i) => (
            <div
              key={name}
              className="animate-card group p-5 rounded-2xl bg-white border border-gray-100 hover:border-teal-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <div className="w-11 h-11 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center mb-4 group-hover:bg-teal-100 transition-colors">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-gray-900 text-sm mb-2">{name}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
