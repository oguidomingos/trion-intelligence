import { Shield, Zap, Users } from "lucide-react";
import { CONFIG } from "../config";
import { WhatsAppButton } from "./WhatsAppButton";

const DIFFERENTIALS = [
  { icon: Shield, label: "Controle da Dor" },
  { icon: Zap, label: "Medicina Regenerativa" },
  { icon: Users, label: "Tratamento Multidisciplinar" },
];

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-[#1565c0] via-[#0d47a1] to-[#0a3470] pt-20 lg:pt-24">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#e6b25d]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-[#e6b25d] rounded-full animate-pulse" />
            <span className="text-sm text-white/90 font-medium">
              Referência em Tratamento da Dor
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6">
            Tratamento Especializado Para{" "}
            <span className="text-[#e6b25d]">Dores Crônicas</span>{" "}
            em {CONFIG.city}-{CONFIG.state}
          </h1>

          <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-2xl leading-relaxed">
            Equipe multidisciplinar dedicada ao alívio da dor e à recuperação da sua
            qualidade de vida, com técnicas avançadas e atendimento humanizado.
          </p>

          {/* Differentials */}
          <div className="flex flex-wrap gap-4 mb-10">
            {DIFFERENTIALS.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3"
              >
                <Icon className="w-5 h-5 text-[#e6b25d]" />
                <span className="text-sm font-medium text-white">{label}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <WhatsAppButton size="lg" label="Agende Sua Consulta" />
        </div>
      </div>
    </section>
  );
}
