import { Star, Quote } from "lucide-react";

interface Depoimento {
  name: string;
  treatment: string;
  text: string;
  rating: number;
}

const DEPOIMENTOS: Depoimento[] = [
  {
    name: "Maria C.",
    treatment: "Fisioterapia Aquática",
    text: "Após minha cirurgia no joelho, a hidroterapia foi essencial para minha recuperação. A equipe é muito atenciosa e profissional. Recomendo de olhos fechados!",
    rating: 5,
  },
  {
    name: "João P.",
    treatment: "RPG / Escoliose",
    text: "Sofria com dores nas costas há anos. Com o tratamento de RPG na Santa Isabel, finalmente consegui voltar às minhas atividades normais. Estrutura excelente!",
    rating: 5,
  },
  {
    name: "Ana L.",
    treatment: "Fisioterapia Pélvica",
    text: "Profissionais extremamente qualificados e ambiente acolhedor. O tratamento mudou minha qualidade de vida. Equipe toda muito cuidadosa e respeitosa.",
    rating: 5,
  },
];

export function Depoimentos() {
  return (
    <section
      id="depoimentos"
      className="py-20 lg:py-28 bg-gradient-to-br from-teal-800 via-teal-700 to-teal-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-teal-200 font-semibold text-sm uppercase tracking-wider mb-3">
            Depoimentos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            O Que Nossos{" "}
            <span className="font-display text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-amber-300">
              Pacientes Dizem
            </span>
          </h2>
          <div className="section-divider mb-8" style={{ background: "linear-gradient(90deg, transparent, #5eead4, #d4a24e, #5eead4, transparent)" }} />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {DEPOIMENTOS.map((dep, i) => (
            <div
              key={dep.name}
              className="group glass rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <Quote className="w-8 h-8 text-amber-400/60 mb-4" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: dep.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              <p className="text-white/90 text-sm leading-relaxed mb-6">
                &ldquo;{dep.text}&rdquo;
              </p>

              <div className="border-t border-white/10 pt-4">
                <p className="font-semibold text-white">{dep.name}</p>
                <p className="text-teal-200 text-xs">{dep.treatment}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-teal-200/60 text-xs mt-8">
          * Depoimentos ilustrativos baseados em experiências comuns de pacientes.
        </p>
      </div>
    </section>
  );
}
