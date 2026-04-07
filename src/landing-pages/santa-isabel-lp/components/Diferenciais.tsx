import { Calendar, Award, Building2, Waves, Stethoscope, Accessibility } from "lucide-react";

const DIFFS = [
  { icon: Calendar, value: "46+", label: "Anos de Experiência" },
  { icon: Award, value: "Maior", label: "Centro Privado do DF" },
  { icon: Stethoscope, value: "14+", label: "Especialidades" },
  { icon: Waves, value: "Piscina", label: "Terapêutica Aquecida" },
  { icon: Building2, value: "3", label: "Andares de Estrutura" },
  { icon: Accessibility, value: "100%", label: "Acessível PCD" },
];

export function Diferenciais() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-teal-800 via-teal-700 to-teal-900 text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-teal-200 font-semibold text-sm uppercase tracking-wider mb-3">
            Por Que Nos Escolher
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            Diferenciais Que Fazem a Diferença
          </h2>
          <p className="text-white/70 max-w-xl mx-auto">
            Números que comprovam nosso compromisso com a sua recuperação.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
          {DIFFS.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="glass rounded-2xl p-5 text-center hover:bg-white/20 transition-all duration-300 hover:-translate-y-1"
            >
              <Icon className="w-8 h-8 text-amber-400 mx-auto mb-3" />
              <p className="text-2xl lg:text-3xl font-bold text-white">{value}</p>
              <p className="text-sm text-teal-100 mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
