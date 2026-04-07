export const LP_CONFIG = {
  clinicName: "Clínica de Fisioterapia Santa Isabel",
  tagline: "Recupere seus movimentos. Recupere sua vida.",
  foundedYear: 1980,
  yearsActive: new Date().getFullYear() - 1980,
  phone: "(61) 3301-7187",
  whatsappNumber: "556133017187",
  whatsappMessage:
    "Olá! Quero agendar uma avaliação na Clínica Santa Isabel.",
  email: "fisiosig2@gmail.com",
  address: "Rua 15, Lote 26, Guará II, Brasília-DF",
  openingHours: "Seg-Sex 8h às 20h",
  instagram: "https://www.instagram.com/fisiosantaisabel",
  colors: {
    primary: "#0f766e",
    primaryLight: "#14b8a6",
    accent: "#d4a24e",
  },
} as const;

export function getWhatsAppUrl(customMessage?: string): string {
  const msg = encodeURIComponent(customMessage ?? LP_CONFIG.whatsappMessage);
  return `https://wa.me/${LP_CONFIG.whatsappNumber}?text=${msg}`;
}
