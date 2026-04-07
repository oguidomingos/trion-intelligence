import { Armchair, Stethoscope, Syringe, HeartPulse, Building2, Building } from "lucide-react";

const GALLERY_ITEMS = [
  {
    name: "Recepção",
    description: "Ambiente acolhedor e confortável para nossos pacientes",
    icon: Armchair,
    gradient: "from-[#1565c0] to-[#0d47a1]",
  },
  {
    name: "Sala de Consulta",
    description: "Consultório equipado para avaliação completa",
    icon: Stethoscope,
    gradient: "from-[#0d47a1] to-[#0a3470]",
  },
  {
    name: "Sala de Procedimentos",
    description: "Tecnologia de ponta para tratamentos precisos",
    icon: Syringe,
    gradient: "from-[#1565c0] via-[#0d47a1] to-[#0a3470]",
  },
  {
    name: "Sala de Recuperação",
    description: "Espaço tranquilo para seu conforto pós-procedimento",
    icon: HeartPulse,
    gradient: "from-[#0a3470] to-[#1565c0]",
  },
  {
    name: "Corredor",
    description: "Circulação ampla e acessível",
    icon: Building2,
    gradient: "from-[#0d47a1] to-[#1565c0]",
  },
  {
    name: "Fachada",
    description: "Localização privilegiada e fácil acesso",
    icon: Building,
    gradient: "from-[#1565c0] to-[#0d47a1]",
  },
];

export function Gallery() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-[#e6b25d] uppercase tracking-wider">
            Estrutura
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Conheça Nossa Clínica
          </h2>
          <div className="section-divider mt-4" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {GALLERY_ITEMS.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={item.name}
                className={`relative rounded-2xl overflow-hidden bg-gradient-to-br ${item.gradient} group cursor-default ${
                  i === 0 ? "col-span-2 lg:col-span-1 aspect-[4/3]" : "aspect-square"
                }`}
              >
                {/* Subtle SVG pattern overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='20' cy='20' r='1' fill='%23ffffff' fill-opacity='0.06'/%3E%3C/svg%3E")`,
                  }}
                />

                {/* Gold top accent */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#e6b25d]/50 to-transparent" />

                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 lg:w-10 lg:h-10 text-[#e6b25d]" />
                  </div>
                  <h3 className="text-white font-bold text-sm lg:text-base mb-1">
                    {item.name}
                  </h3>
                  <p className="text-white/60 text-xs lg:text-sm max-w-[200px]">
                    {item.description}
                  </p>
                </div>

                {/* Bottom gradient fade */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
