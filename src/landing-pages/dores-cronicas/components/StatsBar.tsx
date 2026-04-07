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
    <section className="bg-white py-10 lg:py-14 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {STATS.map(({ icon: Icon, value, label }) => (
            <div key={label} className="text-center">
              <Icon className="w-8 h-8 text-[#1565c0] mx-auto mb-3" />
              <p className="text-2xl lg:text-3xl font-bold text-[#1565c0]">{value}</p>
              <p className="text-sm text-gray-500 mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
