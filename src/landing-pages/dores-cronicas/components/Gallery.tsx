const GALLERY_ITEMS = [
  "Recepção",
  "Sala de Consulta",
  "Sala de Procedimentos",
  "Sala de Recuperação",
  "Corredor",
  "Fachada",
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
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {GALLERY_ITEMS.map((item, i) => (
            <div
              key={item}
              className={`relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#1565c0]/5 to-[#e6b25d]/5 border border-gray-100 ${
                i === 0 ? "col-span-2 lg:col-span-1 aspect-[4/3]" : "aspect-square"
              }`}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <svg
                    className="w-8 h-8 text-gray-300 mx-auto mb-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z"
                    />
                  </svg>
                  <p className="text-sm text-gray-400">{item}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
