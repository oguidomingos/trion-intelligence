import { CONFIG } from "../config";

export function Footer() {
  return (
    <footer className="bg-[#0d1b2a] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-3">{CONFIG.clinicName}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Referência em tratamento de dores crônicas em {CONFIG.city}-{CONFIG.state}.
              Equipe multidisciplinar dedicada ao seu bem-estar.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold mb-3 text-[#e6b25d]">Navegação</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#sobre" className="hover:text-white transition-colors">
                  Sobre a Clínica
                </a>
              </li>
              <li>
                <a href="#condicoes" className="hover:text-white transition-colors">
                  Especialidades
                </a>
              </li>
              <li>
                <a href="#procedimentos" className="hover:text-white transition-colors">
                  Procedimentos
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-white transition-colors">
                  Depoimentos
                </a>
              </li>
            </ul>
          </div>

          {/* Credentials */}
          <div>
            <h4 className="font-semibold mb-3 text-[#e6b25d]">Responsável Técnico</h4>
            <p className="text-sm text-gray-400">{CONFIG.doctorName}</p>
            <p className="text-sm text-gray-400">{CONFIG.doctorCrm}</p>
            <p className="text-sm text-gray-400">{CONFIG.doctorRqe}</p>
            <p className="text-sm text-gray-400 mt-3">{CONFIG.address}</p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center text-xs text-gray-500">
          <p>
            © {new Date().getFullYear()} {CONFIG.clinicName}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
