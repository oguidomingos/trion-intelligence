import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "../config";

interface WhatsAppButtonProps {
  label?: string;
  className?: string;
  variant?: "primary" | "outline" | "gold";
  size?: "sm" | "md" | "lg";
}

const variants = {
  primary: "bg-green-500 hover:bg-green-600 text-white",
  outline: "border-2 border-white text-white hover:bg-white/10",
  gold: "bg-[#e6b25d] hover:bg-[#d4a24e] text-white",
};

const sizes = {
  sm: "px-4 py-2 text-sm gap-2",
  md: "px-6 py-3 text-base gap-2",
  lg: "px-8 py-4 text-lg gap-3",
};

export function WhatsAppButton({
  label = "Agende pelo WhatsApp",
  className = "",
  variant = "primary",
  size = "md",
}: WhatsAppButtonProps) {
  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center font-semibold rounded-full shadow-lg transition-all duration-300 hover:scale-105 ${variants[variant]} ${sizes[size]} ${className}`}
    >
      <MessageCircle className={size === "lg" ? "w-6 h-6" : "w-5 h-5"} />
      {label}
    </a>
  );
}
