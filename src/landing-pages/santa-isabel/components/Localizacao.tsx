import { MapPin, Clock, Phone, Mail, Instagram, Facebook } from "lucide-react";
import { CONFIG } from "../config";

export function Localizacao() {
  return (
    <section id="localizacao" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-teal-700 font-semibold text-sm uppercase tracking-wider mb-3">
            Localização
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            <span className="font-display">Venha Nos</span> Visitar
          </h2>
          <div className="section-divider mb-8" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-[400px] lg:h-auto">
            <iframe
              src={CONFIG.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 400 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Clínica de Fisioterapia Santa Isabel"
            />
          </div>

          {/* Info cards */}
          <div className="flex flex-col gap-5">
            {/* Address */}
            <div className="p-6 rounded-2xl bg-teal-50 border border-teal-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-teal-700 text-white flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Endereço</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {CONFIG.address}
                  </p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-teal-700 text-white flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Horário de Funcionamento</h3>
                  <p className="text-gray-600 text-sm">{CONFIG.openingHours}</p>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-teal-700 text-white flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Contato</h3>
                  <p className="text-gray-600 text-sm mb-1">
                    <a href={`tel:${CONFIG.phone.replace(/\D/g, "")}`} className="hover:text-teal-700 transition-colors">
                      {CONFIG.phone}
                    </a>
                  </p>
                  <p className="text-gray-600 text-sm flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5" />
                    <a href={`mailto:${CONFIG.email}`} className="hover:text-teal-700 transition-colors">
                      {CONFIG.email}
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-teal-50 to-white border border-teal-100">
              <h3 className="font-bold text-gray-900 mb-3">Redes Sociais</h3>
              <div className="flex gap-3">
                <a
                  href={CONFIG.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-gray-200 text-gray-700 hover:border-pink-300 hover:text-pink-600 transition-all text-sm font-medium"
                >
                  <Instagram className="w-4 h-4" />
                  Instagram
                </a>
                <a
                  href={CONFIG.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-gray-200 text-gray-700 hover:border-blue-300 hover:text-blue-600 transition-all text-sm font-medium"
                >
                  <Facebook className="w-4 h-4" />
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
