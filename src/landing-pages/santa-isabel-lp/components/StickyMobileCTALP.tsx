import { MessageCircle, Phone } from "lucide-react";
import { LP_CONFIG, getWhatsAppUrl } from "../config";

export function StickyMobileCTALP() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden safe-area-bottom">
      <div className="bg-white border-t border-gray-200 shadow-lg px-4 py-3">
        <div className="flex items-center gap-3 max-w-lg mx-auto">
          <a
            href={`tel:${LP_CONFIG.phone.replace(/\D/g, "")}`}
            className="flex-1 flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 rounded-lg transition-colors text-sm"
          >
            <Phone className="w-4 h-4" />
            Ligar
          </a>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-[2] flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white font-semibold py-3 rounded-lg transition-all text-sm"
          >
            <MessageCircle className="w-4 h-4" />
            Agendar pelo WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
