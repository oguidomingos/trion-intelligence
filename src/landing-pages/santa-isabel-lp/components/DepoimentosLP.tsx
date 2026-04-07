import { Star, Quote } from "lucide-react";

interface Depoimento {
  name: string;
  treatment: string;
  text: string;
  stars: number;
}

const DEPOIMENTOS: Depoimento[] = [
  {
    name: "Maria Fernanda S.",
    treatment: "Fisioterapia Aquática",
    text: "Depois de meses com dores no joelho, a hidroterapia mudou minha vida. Consegui voltar a caminhar sem dor. Equipe maravilhosa!",
    stars: 5,
  },
  {
    name: "Carlos Eduardo M.",
    treatment: "RPG e Pilates",
    text: "Tinha hérnia de disco e já não conseguia trabalhar direito. Com o tratamento integrado da Santa Isabel, recuperei meus movimentos completamente.",
    stars: 5,
  },
  {
    name: "Ana Paula R.",
    treatment: "Fisioterapia Ortopédica",
    text: "Após a cirurgia no ombro, a recuperação foi muito mais rápida do que o esperado. Profissionais excelentes e estrutura de primeiro mundo.",
    stars: 5,
  },
];

export function DepoimentosLP() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-teal-600 uppercase tracking-wide mb-2">
            Depoimentos
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
            Quem confia na Santa Isabel{" "}
            <span className="text-teal-700">recomenda</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {DEPOIMENTOS.map((dep, i) => (
            <div
              key={dep.name}
              className="bg-gray-50 rounded-xl p-6 border border-gray-100 animate-fade-in-up"
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              <Quote className="w-8 h-8 text-teal-200 mb-3" />
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                &ldquo;{dep.text}&rdquo;
              </p>
              <div className="flex items-center gap-1 mb-2">
                {Array.from({ length: dep.stars }).map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <div className="font-bold text-gray-900 text-sm">{dep.name}</div>
              <div className="text-xs text-teal-600">{dep.treatment}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
