import {
  Calendar,
  Award,
  Stethoscope,
  Waves,
  Building2,
  Accessibility,
} from "lucide-react";
import { LP_CONFIG } from "../config";

const DIFERENCIAIS = [
  {
    icon: Calendar,
    value: LP_CONFIG.yearsActive + " anos",
    label: "de experiência e tradição",
  },
  {
    icon: Award,
    value: "Maior do DF",
    label: "centro de reabilitação privado",
  },
  {
    icon: Stethoscope,
    value: "14+ especialidades",
    label: "em um só lugar",
  },
  {
    icon: Waves,
    value: "Piscina terapêutica",
    label: "para reabilitação aquática",
  },
  {
    icon: Building2,
    value: "3 andares",
    label: "de estrutura completa",
  },
  {
    icon: Accessibility,
    value: "Acessibilidade",
    label: "adaptada para PCD",
  },
];

export function Diferenciais() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-teal-800 via-teal-700 to-teal-900 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-amber-500/8 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-teal-300 uppercase tracking-wide mb-2">
            Por que escolher a Santa Isabel?
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
            Diferenciais que fazem a diferença
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {DIFERENCIAIS.map((item, i) => (
            <div
              key={item.value}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 text-center hover:bg-white/10 transition-all animate-fade-in-up"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="w-12 h-12 mx-auto bg-teal-500/20 rounded-lg flex items-center justify-center mb-3">
                <item.icon className="w-6 h-6 text-teal-300" />
              </div>
              <div className="text-xl font-bold text-white mb-1">
                {item.value}
              </div>
              <div className="text-sm text-white/60">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
