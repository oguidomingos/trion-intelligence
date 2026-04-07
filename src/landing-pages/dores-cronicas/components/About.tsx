import { CONFIG } from "../config";
import { WhatsAppButton } from "./WhatsAppButton";

export function About() {
  return (
    <section id="sobre" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="text-sm font-semibold text-[#e6b25d] uppercase tracking-wider">
              Sobre Nós
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-6">
              Sobre a {CONFIG.clinicName}
            </h2>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                A {CONFIG.clinicName} é referência no tratamento de dores crônicas em{" "}
                {CONFIG.city}-{CONFIG.state}, reunindo uma equipe multidisciplinar de
                especialistas dedicados ao cuidado integral do paciente.
              </p>
              <p>
                Com infraestrutura moderna e tecnologia de ponta, oferecemos diagnósticos
                precisos e tratamentos personalizados que priorizam o bem-estar e a
                recuperação da qualidade de vida de cada paciente.
              </p>
              <p>
                Nossa abordagem combina medicina baseada em evidências com técnicas
                minimamente invasivas, garantindo resultados eficazes com menor tempo de
                recuperação e maior conforto durante todo o processo.
              </p>
              <p>
                Acreditamos que ninguém precisa conviver com a dor. Por isso, investimos
                continuamente na capacitação de nossa equipe e na atualização de nossos
                protocolos para oferecer o que há de mais avançado no tratamento da dor.
              </p>
            </div>

            <div className="mt-8">
              <WhatsAppButton label="Conheça Nossa Equipe" />
            </div>
          </div>

          {/* Image placeholder */}
          <div className="relative">
            <div className="bg-gradient-to-br from-[#1565c0]/10 to-[#e6b25d]/10 rounded-2xl aspect-[4/3] flex items-center justify-center border border-gray-100">
              <div className="text-center px-8">
                <div className="w-20 h-20 bg-[#1565c0]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-10 h-10 text-[#1565c0]"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z"
                    />
                  </svg>
                </div>
                <p className="text-gray-500 text-sm">Foto da equipe da clínica</p>
                <p className="text-gray-400 text-xs mt-1">Substitua por imagem real</p>
              </div>
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#e6b25d]/20 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
