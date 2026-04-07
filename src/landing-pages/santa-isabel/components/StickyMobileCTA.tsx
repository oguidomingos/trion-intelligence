import { MessageCircle, Phone } from "lucide-react";
import { CONFIG, getWhatsAppUrl } from "../config";

export function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden safe-area-bottom">
      <div className="bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] px-4 py-3">
        <div className="flex gap-3 max-w-lg mx-auto">
          <a
            href={`tel:${CONFIG.phone.replace(/\D/g, "")}`}
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border-2 border-teal-700 text-teal-700 font-semibold text-sm transition-colors hover:bg-teal-50"
          >
            <Phone size={18} />
            Ligar
          </a>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-[2] flex items-center justify-center gap-2 py-3 rounded-xl bg-teal-700 text-white font-semibold text-sm shadow-md shadow-teal-700/20 transition-colors hover:bg-teal-600"
          >
            <MessageCircle size={18} />
            Agendar pelo WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
