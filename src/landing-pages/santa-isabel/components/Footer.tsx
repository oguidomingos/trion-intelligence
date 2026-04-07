import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";
import { CONFIG } from "../config";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-teal-700 text-white flex items-center justify-center font-display font-bold text-lg">
                SI
              </div>
              <div>
                <p className="font-display font-semibold text-white text-sm">
                  Fisioterapia
                </p>
                <p className="font-display font-bold text-teal-400 text-base">
                  Santa Isabel
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              Maior centro de reabilitação privado do Distrito Federal.
              Cuidando da sua saúde desde {CONFIG.foundedYear}.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm">
              {[
                ["#sobre", "Sobre Nós"],
                ["#servicos", "Serviços"],
                ["#estrutura", "Estrutura"],
                ["#convenios", "Convênios"],
                ["#depoimentos", "Depoimentos"],
                ["#faq", "FAQ"],
              ].map(([href, label]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="hover:text-teal-400 transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-teal-500" />
                <span>{CONFIG.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0 text-teal-500" />
                <a href={`tel:${CONFIG.phone.replace(/\D/g, "")}`} className="hover:text-teal-400 transition-colors">
                  {CONFIG.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0 text-teal-500" />
                <a href={`mailto:${CONFIG.email}`} className="hover:text-teal-400 transition-colors">
                  {CONFIG.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 flex-shrink-0 text-teal-500" />
                <span>{CONFIG.openingHours}</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold mb-4">Redes Sociais</h4>
            <div className="flex gap-3">
              <a
                href={CONFIG.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-gray-800 flex items-center justify-center hover:bg-pink-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={CONFIG.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-xs">
          <p>
            &copy; {new Date().getFullYear()} {CONFIG.clinicName}. Todos os direitos reservados.
          </p>
          <p className="mt-1 text-gray-600">
            CNPJ: 09.366.963/0001-88
          </p>
        </div>
      </div>
    </footer>
  );
}
