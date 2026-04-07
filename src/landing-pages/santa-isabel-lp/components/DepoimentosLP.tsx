import { Star, Quote } from "lucide-react";
import { WhatsAppButton } from "../../santa-isabel/components/WhatsAppButton";

const TESTIMONIALS = [
  {
    name: "Roberto M.",
    treatment: "Pós-operatório de joelho",
    text: "Depois da cirurgia, pensei que levaria meses para voltar a andar normalmente. Com a equipe da Santa Isabel, em poucas semanas já sentia uma melhora significativa. Profissionais incríveis!",
  },
  {
    name: "Cláudia S.",
    treatment: "Dores na coluna",
    text: "Sofria com dores na coluna há mais de 5 anos. O tratamento com RPG e Pilates mudou minha vida. Hoje consigo trabalhar e brincar com meus filhos sem dor.",
  },
  {
    name: "Marcos A.",
    treatment: "Reabilitação neurológica",
    text: "Após o AVC, a fisioterapia na Santa Isabel foi fundamental na minha recuperação. A estrutura é excelente e a equipe transmite muita confiança.",
  },
];

export function DepoimentosLP() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-teal-700 font-semibold text-sm uppercase tracking-wider mb-3">
            Histórias Reais
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
            Pacientes Que Recuperaram Sua Qualidade de Vida
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="p-6 rounded-2xl bg-gray-50 border border-gray-100"
            >
              <Quote className="w-6 h-6 text-teal-300 mb-3" />
              <div className="flex gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-5">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="border-t border-gray-200 pt-3">
                <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                <p className="text-teal-600 text-xs">{t.treatment}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <WhatsAppButton
            label="Quero o Mesmo Resultado"
            customMessage="Olá! Vi os depoimentos e gostaria de agendar minha avaliação na Clínica Santa Isabel."
          />
        </div>

        <p className="text-center text-gray-400 text-xs mt-4">
          * Depoimentos ilustrativos baseados em experiências comuns de pacientes.
        </p>
      </div>
    </section>
  );
}
