import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQ_DATA = [
  {
    q: "A avaliação inicial é gratuita?",
    a: "Entre em contato pelo WhatsApp para agendar e saber as condições da sua primeira avaliação. Queremos entender seu caso antes de iniciar qualquer tratamento.",
  },
  {
    q: "Quais convênios são aceitos?",
    a: "Atendemos Geap Saúde e outros convênios. Também realizamos atendimento particular. Entre em contato para verificar seu plano.",
  },
  {
    q: "Preciso de encaminhamento médico?",
    a: "Na maioria dos casos sim, mas você pode agendar uma avaliação fisioterápica diretamente para orientação inicial.",
  },
  {
    q: "Qual é o horário de atendimento?",
    a: "Funcionamos de segunda a sexta, das 8h às 20h. Agende pelo WhatsApp para garantir o melhor horário.",
  },
  {
    q: "Onde fica a clínica?",
    a: "Rua 15, Lote 26, Guará II (Polo de Moda), Brasília-DF. Estrutura com 3 andares, fácil acesso e estacionamento nas proximidades.",
  },
];

export function FAQLP() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Dúvidas Frequentes
          </h2>
        </div>

        <div className="space-y-3">
          {FAQ_DATA.map(({ q, a }, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex items-center justify-between w-full text-left px-5 py-4 gap-3"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-gray-900 text-sm">{q}</span>
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
                    <p className="px-5 pb-4 text-gray-600 text-sm leading-relaxed">
                      {a}
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
