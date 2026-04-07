import { CheckCircle, Droplets, Activity, Heart } from "lucide-react";
import { CONFIG } from "../config";
import { WhatsAppButton } from "./WhatsAppButton";

const BADGES = [
  { icon: Droplets, label: "Piscina Terapêutica" },
  { icon: Activity, label: "14+ Especialidades" },
  { icon: Heart, label: "Cuidado Humanizado" },
];

export function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center bg-gradient-to-br from-teal-800 via-teal-700 to-teal-900 pt-20 lg:pt-24 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-48 -left-32 w-[400px] h-[400px] bg-teal-400/8 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-amber-500/5 rounded-full blur-2xl" />
      </div>

      {/* Subtle wave pattern */}
      <div className="absolute inset-0 pattern-wave opacity-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
        <div className="max-w-3xl">
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-4">
            <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
            <span className="text-sm text-white/90 font-medium">
              Desde {CONFIG.foundedYear} — {CONFIG.yearsActive} anos de excelência
            </span>
          </div>

          {/* Accent line */}
          <div className="w-16 h-0.5 bg-gradient-to-r from-amber-400 to-transparent mb-6" />

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6">
            <span className="font-display">Sua Reabilitação</span>{" "}
            Começa no{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-amber-300">
              Maior Centro Privado do DF
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-2xl leading-relaxed">
            Equipe multidisciplinar, estrutura com 3 andares, piscina terapêutica
            e mais de 14 especialidades para devolver sua qualidade de vida.
          </p>

          {/* Differential badges */}
          <div className="flex flex-wrap gap-3 mb-10">
            {BADGES.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 glass rounded-xl px-4 py-3 border-t-2 border-amber-400/60"
              >
                <Icon className="w-5 h-5 text-amber-400" />
                <span className="text-sm font-medium text-white">{label}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <WhatsAppButton size="lg" label="Agendar Minha Avaliação" />

          {/* Social proof */}
          <div className="mt-6 inline-flex items-center gap-2 text-white/70">
            <CheckCircle className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-medium">
              Atendemos convênios — Geap Saúde e outros
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
