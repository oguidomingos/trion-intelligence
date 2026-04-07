import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "../config";

interface WhatsAppButtonProps {
  size?: "sm" | "md" | "lg";
  label?: string;
  customMessage?: string;
  className?: string;
}

export function WhatsAppButton({
  size = "md",
  label = "Agendar Avaliação",
  customMessage,
  className = "",
}: WhatsAppButtonProps) {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm gap-2",
    md: "px-6 py-3 text-base gap-2",
    lg: "px-8 py-4 text-lg gap-3",
  };

  const iconSizes = { sm: 16, md: 20, lg: 24 };

  return (
    <a
      href={getWhatsAppUrl(customMessage)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center font-semibold rounded-xl
        bg-gradient-to-r from-teal-600 to-teal-500 text-white
        shadow-lg shadow-teal-600/25
        hover:from-teal-500 hover:to-teal-400 hover:shadow-xl hover:shadow-teal-600/30
        hover:-translate-y-0.5
        active:translate-y-0 active:shadow-md
        transition-all duration-200
        ${sizeClasses[size]} ${className}`}
    >
      <MessageCircle size={iconSizes[size]} />
      {label}
    </a>
  );
}
