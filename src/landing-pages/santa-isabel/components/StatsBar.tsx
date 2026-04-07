import { Calendar, Stethoscope, Building2, Users } from "lucide-react";
import { CONFIG } from "../config";

const STATS = [
  { icon: Calendar, value: CONFIG.stats.yearsFounded, label: "Anos de Experiência", suffix: "+" },
  { icon: Stethoscope, value: CONFIG.stats.specialties, label: "Especialidades", suffix: "" },
  { icon: Building2, value: CONFIG.stats.floors, label: "Andares de Estrutura", suffix: "" },
  { icon: Users, value: CONFIG.stats.patients, label: "de Pacientes Atendidos", suffix: "" },
];

export function StatsBar() {
  return (
    <section className="relative -mt-8 z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl shadow-xl shadow-gray-200/60 border border-gray-100 p-6 lg:p-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {STATS.map(({ icon: Icon, value, label, suffix }) => (
            <div key={label} className="text-center group">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-teal-50 text-teal-700 mb-3 group-hover:bg-teal-100 transition-colors">
                <Icon className="w-6 h-6" />
              </div>
              <p className="text-2xl lg:text-3xl font-bold text-teal-800">
                {value}{suffix}
              </p>
              <p className="text-sm text-gray-500 mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
