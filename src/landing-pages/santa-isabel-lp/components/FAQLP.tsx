import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQ_DATA = [
  {
    question: "Preciso de encaminhamento médico para agendar?",
    answer:
      "Não é obrigatório, mas se você tiver um encaminhamento ou exames recentes, traga na sua primeira consulta. Nossos fisioterapeutas realizam uma avaliação completa.",
  },
  {
    question: "Vocês atendem por convênio?",
    answer:
      "Sim! Atendemos a Geap Saúde e outros convênios. Entre em contato pelo WhatsApp para confirmar se o seu plano é aceito.",
  },
  {
    question: "Como funciona a fisioterapia aquática?",
    answer:
      "A reabilitação acontece em piscina terapêutica aquecida, sob supervisão profissional. É ideal para dores crônicas, pós-cirúrgico e pacientes com mobilidade reduzida.",
  },
  {
    question: "Quanto tempo dura cada sessão?",
    answer:
      "Em média, cada sessão dura de 40 a 60 minutos, dependendo do tipo de tratamento e da sua condição clínica.",
  },
  {
    question: "A clínica tem acessibilidade?",
    answer:
      "Sim! Nossa estrutura de 3 andares é totalmente adaptada para pessoas com deficiência, com rampas, elevador e banheiros acessíveis.",
  },
  {
    question: "Posso combinar mais de um tipo de tratamento?",
    answer:
      "Com certeza! Oferecemos abordagem multidisciplinar. Muitos pacientes combinam fisioterapia com Pilates, RPG, nutrição ou psicologia para resultados mais completos.",
  },
];

export function FAQLP() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-teal-600 uppercase tracking-wide mb-2">
            Dúvidas frequentes
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Perguntas e Respostas
          </h2>
        </div>

        <div className="space-y-3">
          {FAQ_DATA.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="bg-white rounded-xl border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left hover:bg-gray-50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-gray-900 text-sm sm:text-base">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className="grid transition-[grid-template-rows] duration-200"
                  style={{
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                  }}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-4 text-gray-600 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
