import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    question: "Preciso de encaminhamento médico para iniciar o tratamento?",
    answer:
      "Na maioria dos casos, sim. Um encaminhamento médico ajuda a definir o diagnóstico e direcionar o tratamento. Porém, você pode agendar uma avaliação fisioterápica diretamente conosco para orientação inicial.",
  },
  {
    question: "Quais convênios vocês aceitam?",
    answer:
      "Atualmente aceitamos Geap Saúde e outros convênios. Entre em contato pelo WhatsApp para verificar se o seu plano é atendido. Também realizamos atendimento particular.",
  },
  {
    question: "Como funciona a fisioterapia aquática?",
    answer:
      "A fisioterapia aquática (hidroterapia) é realizada em nossa piscina terapêutica aquecida. A água reduz o impacto nas articulações, facilita os movimentos e acelera a recuperação. É ideal para pós-operatórios, dores articulares e condições neurológicas.",
  },
  {
    question: "Qual é o horário de funcionamento?",
    answer:
      "Funcionamos de segunda a sexta-feira, das 8h às 20h. Recomendamos agendar previamente para garantir o melhor horário para você.",
  },
  {
    question: "A clínica é adaptada para cadeirantes e pessoas com mobilidade reduzida?",
    answer:
      "Sim! Toda a nossa estrutura é adaptada para PCD (Pessoas com Deficiência), com rampas, elevador e banheiros acessíveis. Garantimos acesso seguro e confortável a todos os nossos pacientes.",
  },
  {
    question: "Quantas sessões de fisioterapia são necessárias?",
    answer:
      "O número de sessões varia conforme a condição de cada paciente. Na avaliação inicial, nosso fisioterapeuta elabora um plano de tratamento personalizado com a estimativa de sessões necessárias.",
  },
  {
    question: "Vocês oferecem Pilates? Qual a diferença do Pilates terapêutico?",
    answer:
      "Sim! Nosso Pilates é terapêutico, ou seja, é supervisionado por fisioterapeutas e tem foco na reabilitação e prevenção de lesões. Diferente do Pilates convencional, cada exercício é adaptado às necessidades clínicas do paciente.",
  },
  {
    question: "É possível fazer avaliação sem compromisso?",
    answer:
      "Sim. Você pode agendar uma avaliação inicial para que nossos profissionais analisem seu caso e recomendem o melhor tratamento. Entre em contato pelo WhatsApp para agendar.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-teal-700 font-semibold text-sm uppercase tracking-wider mb-3">
            Dúvidas Frequentes
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            <span className="font-display">Perguntas</span> Frequentes
          </h2>
          <div className="section-divider mb-8" />
        </div>

        <div className="space-y-3">
          {FAQ_DATA.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden transition-shadow hover:shadow-md"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex items-center justify-between w-full text-left px-6 py-5 gap-4"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-gray-900 text-sm sm:text-base">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-teal-600 flex-shrink-0 transition-transform duration-200 ${
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
                    <p className="px-6 pb-5 text-gray-600 text-sm leading-relaxed">
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
