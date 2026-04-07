import { CheckCircle } from "lucide-react";
import { WhatsAppButton } from "../../santa-isabel/components/WhatsAppButton";
import { CONFIG } from "../../santa-isabel/config";

const BENEFITS = [
  "Avaliação completa por fisioterapeuta especialista",
  "Plano de tratamento 100% personalizado",
  "Equipe multidisciplinar integrada",
  "Estrutura com 3 andares e piscina terapêutica",
  "Acompanhamento nutricional e psicológico",
  "Técnicas modernas + 46 anos de experiência",
];

export function Solucao() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          {/* Left — Text */}
          <div>
            <span className="inline-block text-teal-700 font-semibold text-sm uppercase tracking-wider mb-3">
              A Solução
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Tratamento Personalizado Que{" "}
              <span className="font-display text-teal-700">Realmente Funciona</span>
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Na {CONFIG.clinicName}, cada paciente recebe um plano de tratamento
              desenvolvido sob medida. Nossa equipe combina a experiência de mais de
              quatro décadas com as técnicas mais atuais da fisioterapia.
            </p>

            <ul className="space-y-3 mb-8">
              {BENEFITS.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">{benefit}</span>
                </li>
              ))}
            </ul>

            <WhatsAppButton
              label="Agendar Minha Avaliação"
              customMessage="Olá! Gostaria de agendar uma avaliação personalizada na Clínica Santa Isabel."
            />
          </div>

          {/* Right — Process steps */}
          <div className="mt-10 lg:mt-0">
            <div className="bg-gradient-to-br from-teal-50 to-white rounded-2xl border border-teal-100 p-6 lg:p-8">
              <h3 className="font-bold text-gray-900 mb-6 text-lg">
                Como Funciona
              </h3>
              {[
                {
                  step: "1",
                  title: "Agende pelo WhatsApp",
                  desc: "Entre em contato e escolha o melhor horário para você.",
                },
                {
                  step: "2",
                  title: "Avaliação Completa",
                  desc: "Nosso especialista avalia sua condição de forma detalhada.",
                },
                {
                  step: "3",
                  title: "Plano Personalizado",
                  desc: "Receba um plano de tratamento sob medida para seu caso.",
                },
                {
                  step: "4",
                  title: "Recuperação Real",
                  desc: "Acompanhamento contínuo até sua total recuperação.",
                },
              ].map(({ step, title, desc }, i, arr) => (
                <div key={step} className="flex gap-4 mb-6 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-teal-700 text-white flex items-center justify-center font-bold text-sm">
                      {step}
                    </div>
                    {i < arr.length - 1 && (
                      <div className="w-0.5 h-full bg-teal-200 mt-2" />
                    )}
                  </div>
                  <div className="pb-2">
                    <h4 className="font-bold text-gray-900 text-sm">{title}</h4>
                    <p className="text-gray-500 text-xs mt-1">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
