import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { CONFIG } from "../config";

const NAV_ITEMS = [
  { label: "Sobre", href: "#sobre" },
  { label: "Especialidades", href: "#condicoes" },
  { label: "Procedimentos", href: "#procedimentos" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#mapa" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Gold accent top bar */}
      <div className="h-[3px] bg-gradient-to-r from-[#1565c0] via-[#e6b25d] to-[#1565c0]" />

      <div className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo / clinic name */}
            <a href="#" className="flex items-center gap-2 shrink-0">
              <span className="text-lg lg:text-xl font-bold text-[#1565c0]">
                {CONFIG.clinicName}
              </span>
            </a>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-gray-700 hover:text-[#1565c0] transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Phone + mobile menu button */}
            <div className="flex items-center gap-4">
              <a
                href={`tel:${CONFIG.phone.replace(/\D/g, "")}`}
                className="hidden sm:flex items-center gap-2 text-sm font-semibold text-[#1565c0]"
              >
                <Phone className="w-4 h-4" />
                {CONFIG.phone}
              </a>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden p-2 text-gray-700"
                aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              >
                {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile nav */}
        {menuOpen && (
          <nav className="lg:hidden border-t border-gray-100 bg-white pb-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#1565c0] transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href={`tel:${CONFIG.phone.replace(/\D/g, "")}`}
              className="flex items-center gap-2 px-6 py-3 text-[#1565c0] font-semibold sm:hidden"
            >
              <Phone className="w-4 h-4" />
              {CONFIG.phone}
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
