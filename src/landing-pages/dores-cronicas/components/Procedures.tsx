import {
  Stethoscope,
  Syringe,
  Droplets,
  Sparkles,
  HeartPulse,
  Zap,
  Target,
} from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";

const PROCEDURES = [
  {
    icon: Stethoscope,
    title: "Consulta Especializada",
    description:
      "Avaliação completa com especialista em dor para diagnóstico preciso e plano de tratamento individualizado.",
  },
  {
    icon: Syringe,
    title: "Bloqueios e Infiltrações",
    description:
      "Procedimentos guiados por imagem para alívio rápido da dor em articulações, nervos e tecidos.",
  },
  {
    icon: Droplets,
    title: "Infusão Endovenosa",
    description:
      "Terapia intravenosa com medicamentos específicos para controle de dores neuropáticas e inflamatórias.",
  },
  {
    icon: Sparkles,
    title: "Mesoterapia",
    description:
      "Microinjeções de substâncias terapêuticas nas camadas superficiais para alívio localizado da dor.",
  },
  {
    icon: HeartPulse,
    title: "Medicina Regenerativa",
    description:
      "Terapias biológicas avançadas (PRP, células-tronco) para regeneração de tecidos danificados.",
  },
  {
    icon: Target,
    title: "Proloterapia",
    description:
      "Injeções de solução estimulante para fortalecer ligamentos e tendões enfraquecidos.",
  },
  {
    icon: Zap,
    title: "Neuromodulação",
    description:
      "Técnicas avançadas que utilizam estímulos elétricos para modular a transmissão da dor.",
  },
];

export function Procedures() {
  return (
    <section id="procedimentos" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <span className="text-sm font-semibold text-[#e6b25d] uppercase tracking-wider">
            Tratamentos
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Nossos Procedimentos
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Oferecemos uma gama completa de procedimentos minimamente invasivos para o
            tratamento eficaz da dor crônica.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {PROCEDURES.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group bg-gray-50 rounded-2xl p-6 hover:bg-[#1565c0] transition-all duration-300 border border-gray-100 hover:border-[#1565c0] hover:shadow-xl"
            >
              <div className="w-14 h-14 bg-[#1565c0]/10 group-hover:bg-white/20 rounded-xl flex items-center justify-center mb-4 transition-colors">
                <Icon className="w-7 h-7 text-[#1565c0] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-white mb-2 transition-colors">
                {title}
              </h3>
              <p className="text-sm text-gray-600 group-hover:text-white/80 leading-relaxed transition-colors">
                {description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <WhatsAppButton label="Saiba Mais Sobre os Tratamentos" />
        </div>
      </div>
    </section>
  );
}
