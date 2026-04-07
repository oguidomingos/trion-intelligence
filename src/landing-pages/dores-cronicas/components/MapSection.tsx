import { MapPin, Clock, Phone as PhoneIcon } from "lucide-react";
import { CONFIG } from "../config";
import { WhatsAppButton } from "./WhatsAppButton";

export function MapSection() {
  return (
    <section id="mapa" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-[#e6b25d] uppercase tracking-wider">
            Localização
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Como Chegar
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#1565c0]/10 rounded-xl flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-[#1565c0]" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Endereço</h3>
                <p className="text-gray-600">{CONFIG.address}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#1565c0]/10 rounded-xl flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6 text-[#1565c0]" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Horário de Funcionamento</h3>
                <p className="text-gray-600">Segunda a Sexta: 8h às 18h</p>
                <p className="text-gray-600">Sábado: 8h às 12h</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#1565c0]/10 rounded-xl flex items-center justify-center shrink-0">
                <PhoneIcon className="w-6 h-6 text-[#1565c0]" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Telefone</h3>
                <a
                  href={`tel:${CONFIG.phone.replace(/\D/g, "")}`}
                  className="text-[#1565c0] font-semibold hover:underline"
                >
                  {CONFIG.phone}
                </a>
              </div>
            </div>

            <WhatsAppButton label="Agende Pelo WhatsApp" size="lg" />
          </div>

          {/* Map embed */}
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 aspect-[4/3]">
            <iframe
              src={CONFIG.mapEmbedUrl}
              title="Localização da clínica"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
