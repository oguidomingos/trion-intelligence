import { Bone, Dumbbell, Brain, CircleDot } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";

const CATEGORIES = [
  {
    icon: Bone,
    title: "Dores Osteoarticulares",
    conditions: [
      "Artrose (Joelho, Quadril, Ombro)",
      "Artrite Reumatoide",
      "Bursite e Tendinite",
      "Lesões de Cartilagem",
      "Dor Sacroilíaca",
    ],
  },
  {
    icon: Dumbbell,
    title: "Dores Musculoesqueléticas",
    conditions: [
      "Lombalgia Crônica",
      "Cervicalgia",
      "Fibromialgia",
      "Síndrome Miofascial",
      "Dor Pós-Operatória",
    ],
  },
  {
    icon: Brain,
    title: "Dores Neuropáticas",
    conditions: [
      "Hérnia de Disco",
      "Ciatalgia",
      "Neuralgia do Trigêmeo",
      "Neuropatia Diabética",
      "Síndrome do Túnel do Carpo",
    ],
  },
  {
    icon: CircleDot,
    title: "Dores Ósseas",
    conditions: [
      "Osteoporose",
      "Fraturas por Insuficiência",
      "Espondilolistese",
      "Estenose Espinal",
      "Dor Oncológica",
    ],
  },
];

export function Conditions() {
  return (
    <section id="condicoes" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <span className="text-sm font-semibold text-[#e6b25d] uppercase tracking-wider">
            Especialidades
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Condições Tratadas
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tratamento especializado para diversas condições que causam dor crônica, com
            abordagem individualizada para cada paciente.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {CATEGORIES.map(({ icon: Icon, title, conditions }) => (
            <div
              key={title}
              className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 bg-[#1565c0]/10 rounded-xl flex items-center justify-center">
                  <Icon className="w-6 h-6 text-[#1565c0]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{title}</h3>
              </div>
              <ul className="space-y-2">
                {conditions.map((c) => (
                  <li key={c} className="flex items-start gap-2 text-gray-600">
                    <span className="w-1.5 h-1.5 bg-[#e6b25d] rounded-full mt-2 shrink-0" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <WhatsAppButton label="Consulte Nossos Especialistas" variant="gold" size="lg" />
        </div>
      </div>
    </section>
  );
}
