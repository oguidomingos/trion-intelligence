import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "../config";

export function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-[#1565c0] shadow-[0_-4px_20px_rgba(0,0,0,0.15)] safe-area-bottom">
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 py-4 px-6 text-white font-bold text-base"
      >
        <MessageCircle className="w-5 h-5" />
        Agende Agora
      </a>
    </div>
  );
}
