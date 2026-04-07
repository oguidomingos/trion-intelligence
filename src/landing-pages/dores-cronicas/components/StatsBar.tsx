import { Activity, Building2, Heart, UserCheck } from "lucide-react";
import { CONFIG } from "../config";

const STATS = [
  { icon: Activity, value: CONFIG.stats.procedures, label: "Procedimentos Realizados" },
  { icon: Building2, value: CONFIG.stats.insurances, label: "Convênios Atendidos" },
  { icon: Heart, value: CONFIG.stats.patients, label: "Pacientes Atendidos" },
  { icon: UserCheck, value: CONFIG.stats.professionals, label: "Profissionais Especializados" },
];

export function StatsBar() {
  return (
    <section className="relative bg-gradient-to-r from-[#1565c0] to-[#0d47a1] py-10 lg:py-14">
      {/* Gold top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#e6b25d]" />

      {/* Dot pattern overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='1.5' cy='1.5' r='1' fill='%23ffffff' fill-opacity='0.04'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {STATS.map(({ icon: Icon, value, label }) => (
            <div key={label} className="text-center">
              <Icon className="w-8 h-8 text-[#e6b25d] mx-auto mb-3" />
              <p className="text-3xl lg:text-4xl font-bold text-white">{value}</p>
              <p className="text-sm text-white/70 mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
