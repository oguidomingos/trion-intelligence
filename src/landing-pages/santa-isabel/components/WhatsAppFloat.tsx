import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "../config";

export function WhatsAppFloat() {
  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="hidden lg:flex fixed bottom-8 right-8 z-40 items-center gap-2 bg-green-500 hover:bg-green-600 text-white rounded-full px-5 py-3.5 shadow-xl shadow-green-500/30 hover:shadow-2xl hover:shadow-green-500/40 transition-all hover:-translate-y-0.5 group"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="font-semibold text-sm">WhatsApp</span>
    </a>
  );
}
