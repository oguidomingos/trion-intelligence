import { Shield, Award, Users, Clock } from "lucide-react";
import { CONFIG } from "../config";
import { WhatsAppButton } from "./WhatsAppButton";

const FEATURES = [
  { icon: Shield, title: "Equipe Certificada", description: "Profissionais com formação de excelência" },
  { icon: Award, title: "Tecnologia Avançada", description: "Equipamentos de última geração" },
  { icon: Users, title: "Atendimento Humanizado", description: "Cuidado integral e personalizado" },
  { icon: Clock, title: "Agilidade", description: "Diagnóstico e tratamento sem demora" },
];

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

          {/* Doctor profile card */}
          <div className="relative">
            <div className="bg-gradient-to-br from-[#1565c0] to-[#0a3470] rounded-2xl p-8 lg:p-10 shadow-xl relative overflow-hidden">
              {/* Dot pattern overlay */}
              <div
                className="absolute inset-0 opacity-100"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='1.5' cy='1.5' r='1' fill='%23ffffff' fill-opacity='0.05'/%3E%3C/svg%3E")`,
                }}
              />

              {/* Gold top border accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#e6b25d] to-transparent" />

              <div className="relative text-center">
                {/* Initials circle */}
                <div className="w-28 h-28 rounded-full bg-gradient-to-br from-[#e6b25d] to-[#c48d2a] mx-auto mb-6 flex items-center justify-center shadow-lg">
                  <span className="text-3xl font-bold text-white tracking-wider">LMD</span>
                </div>

                {/* Gold decorative line */}
                <div className="w-12 h-0.5 bg-[#e6b25d] mx-auto mb-4" />

                {/* Doctor name */}
                <h3 className="text-2xl font-bold text-white mb-1">
                  {CONFIG.doctorName}
                </h3>

                {/* Specialty */}
                <p className="text-[#e6b25d] font-medium mb-4">
                  Ortopedista | Medicina da Dor
                </p>

                {/* CRM/RQE */}
                <div className="inline-flex flex-col sm:flex-row gap-2 sm:gap-4 text-white/60 text-sm">
                  <span>{CONFIG.doctorCrm}</span>
                  <span className="hidden sm:inline">•</span>
                  <span>{CONFIG.doctorRqe}</span>
                </div>

                {/* Stats mini */}
                <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-2xl font-bold text-[#e6b25d]">{CONFIG.stats.procedures}</p>
                    <p className="text-xs text-white/50 mt-1">Procedimentos</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#e6b25d]">{CONFIG.stats.patients}</p>
                    <p className="text-xs text-white/50 mt-1">Pacientes</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#e6b25d]/20 rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#1565c0]/20 rounded-2xl -z-10" />
          </div>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mt-16">
          {FEATURES.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="bg-gray-50 rounded-xl p-5 text-center border border-gray-100 hover:shadow-md hover:border-[#e6b25d]/30 transition-all"
            >
              <div className="w-12 h-12 bg-[#1565c0]/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Icon className="w-6 h-6 text-[#1565c0]" />
              </div>
              <h4 className="font-bold text-gray-900 text-sm mb-1">{title}</h4>
              <p className="text-xs text-gray-500">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
