import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { CONFIG, getWhatsAppUrl } from "../config";

const NAV_LINKS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#estrutura", label: "Estrutura" },
  { href: "#convenios", label: "Convênios" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#localizacao", label: "Localização" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo / Name */}
          <a href="#" className="flex items-center gap-3 group">
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center font-display font-bold text-lg transition-colors ${
                scrolled
                  ? "bg-teal-700 text-white"
                  : "bg-white/20 backdrop-blur-sm text-white"
              }`}
            >
              SI
            </div>
            <div className="hidden sm:block">
              <p
                className={`font-display font-semibold text-sm leading-tight transition-colors ${
                  scrolled ? "text-teal-800" : "text-white"
                }`}
              >
                Fisioterapia
              </p>
              <p
                className={`font-display font-bold text-base leading-tight transition-colors ${
                  scrolled ? "text-teal-700" : "text-white"
                }`}
              >
                Santa Isabel
              </p>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  scrolled
                    ? "text-gray-600 hover:text-teal-700 hover:bg-teal-50"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                scrolled
                  ? "bg-teal-700 text-white hover:bg-teal-600 shadow-sm"
                  : "bg-white/15 backdrop-blur-sm text-white border border-white/25 hover:bg-white/25"
              }`}
            >
              <Phone size={16} />
              {CONFIG.phone}
            </a>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                scrolled
                  ? "text-gray-700 hover:bg-gray-100"
                  : "text-white hover:bg-white/10"
              }`}
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 rounded-lg text-gray-700 hover:bg-teal-50 hover:text-teal-700 font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-teal-700 text-white font-semibold"
            >
              <Phone size={18} />
              Agendar Avaliação
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
