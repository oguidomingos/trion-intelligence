import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQ_ITEMS = [
  {
    question: "Preciso de encaminhamento para agendar uma consulta?",
    answer:
      "Não é necessário encaminhamento médico. Você pode agendar diretamente pelo nosso WhatsApp. Na primeira consulta, nosso especialista realizará uma avaliação completa e indicará o melhor tratamento para o seu caso.",
  },
  {
    question: "A clínica atende por convênio?",
    answer:
      "Sim, atendemos diversos convênios médicos. Entre em contato pelo WhatsApp para verificar se o seu plano de saúde está em nossa lista de convênios aceitos. Também oferecemos atendimento particular com condições especiais.",
  },
  {
    question: "Por que devo procurar um especialista em dor?",
    answer:
      "O especialista em dor possui formação específica para diagnóstico e tratamento de quadros dolorosos crônicos. Diferente de uma abordagem generalista, o tratamento é focado na causa raiz da dor, utilizando técnicas avançadas e minimamente invasivas que proporcionam resultados mais rápidos e duradouros.",
  },
  {
    question: "Como faço para agendar minha consulta?",
    answer:
      "O agendamento é simples e rápido! Basta clicar em qualquer botão 'Agende pelo WhatsApp' nesta página. Nossa equipe responderá em poucos minutos para encontrar o melhor horário para você.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-[#e6b25d] uppercase tracking-wider">
            Dúvidas
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Perguntas Frequentes
          </h2>
        </div>

        <div className="space-y-3">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="bg-white rounded-xl border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-gray-900 pr-4">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#1565c0] shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-200 ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-gray-600 leading-relaxed">
                      {item.answer}
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
