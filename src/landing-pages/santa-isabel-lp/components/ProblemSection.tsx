import { AlertCircle, Frown, TrendingDown, Ban } from "lucide-react";

const PROBLEMS = [
  {
    icon: "alert",
    title: "Dores constantes",
    description:
      "Dores nas costas, joelhos, ombros ou pescoço que não passam e atrapalham seu dia a dia.",
  },
  {
    icon: "frown",
    title: "Limitação de movimentos",
    description:
      "Dificuldade para agachar, subir escadas, dormir bem ou realizar atividades simples.",
  },
  {
    icon: "trending",
    title: "Perda de qualidade de vida",
    description:
      "Deixar de fazer o que gosta — exercícios, passeios, brincar com os filhos — por causa da dor.",
  },
  {
    icon: "ban",
    title: "Tratamentos sem resultado",
    description:
      "Já tentou remédios, pomadas e até outros profissionais, mas o problema persiste.",
  },
];

const ICON_MAP = {
  alert: AlertCircle,
  frown: Frown,
  trending: TrendingDown,
  ban: Ban,
};

export function ProblemSection() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-red-500 uppercase tracking-wide mb-2">
            Você se identifica?
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
            A dor está controlando{" "}
            <span className="text-red-500">sua rotina?</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {PROBLEMS.map((problem, i) => {
            const IconComponent =
              ICON_MAP[problem.icon as keyof typeof ICON_MAP];
            return (
              <div
                key={problem.title}
                className="flex gap-4 bg-white rounded-xl p-6 shadow-sm border border-gray-100 animate-fade-in-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center">
                  <IconComponent className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">
                    {problem.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-center mt-10 text-gray-500 text-lg">
          Se você vive essa realidade,{" "}
          <strong className="text-gray-900">
            existe um caminho para mudar isso.
          </strong>
        </p>
      </div>
    </section>
  );
}
