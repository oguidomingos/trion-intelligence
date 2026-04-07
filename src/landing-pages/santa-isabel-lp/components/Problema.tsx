import { XCircle } from "lucide-react";

const PROBLEMS = [
  {
    title: "Dores que não passam",
    text: "Você já tentou de tudo, mas as dores nas costas, joelhos ou ombros insistem em voltar.",
  },
  {
    title: "Limitações no dia a dia",
    text: "Subir escadas, carregar peso ou até dormir bem se tornaram um desafio constante.",
  },
  {
    title: "Medo de piorar",
    text: "A cada dia sem tratamento adequado, a condição pode progredir e comprometer ainda mais sua mobilidade.",
  },
  {
    title: "Tratamentos genéricos",
    text: "Já passou por profissionais que não entenderam de fato o seu problema e ofereceram soluções superficiais.",
  },
];

export function Problema() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-red-600 font-semibold text-sm uppercase tracking-wider mb-3">
            Você se identifica?
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Quando a Dor Toma Conta da Sua Rotina...
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Milhares de pessoas convivem com dores e limitações todos os dias — sem saber
            que existe um caminho de volta para a vida plena.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {PROBLEMS.map(({ title, text }) => (
            <div
              key={title}
              className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-red-100 shadow-sm"
            >
              <XCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-gray-900 mb-1 text-sm">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
