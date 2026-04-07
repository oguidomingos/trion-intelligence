export const CONFIG = {
  clinicName: "Clínica de Fisioterapia Santa Isabel",
  tagline: "Maior Centro de Reabilitação Privado do DF",
  foundedYear: 1980,
  yearsActive: new Date().getFullYear() - 1980,
  city: "Brasília",
  state: "DF",
  phone: "(61) 3301-7187",
  whatsappNumber: "556133017187",
  whatsappMessage:
    "Olá! Gostaria de agendar uma avaliação na Clínica de Fisioterapia Santa Isabel.",
  email: "fisiosig2@gmail.com",
  address:
    "Rua 15, Lote 26, Guará II SRIA II (Polo de Moda), Brasília-DF, 71070-515",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.8!2d-47.98!3d-15.83!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3b3e3!2sGuar%C3%A1+II!5e0!3m2!1spt-BR!2sbr!4v1",
  instagram: "https://www.instagram.com/fisiosantaisabel",
  facebook: "https://www.facebook.com/fisioterapiasanta.isabel",
  website: "fisiosantaisabel.com.br",
  openingHours: "Seg-Sex 8h às 20h",
  stats: {
    yearsFounded: "46",
    specialties: "14+",
    floors: "3",
    patients: "Milhares",
  },
  colors: {
    primary: "#0f766e",
    primaryLight: "#14b8a6",
    primaryDark: "#134e4a",
    accent: "#d4a24e",
    accentLight: "#f0d090",
  },
} as const;

export function getWhatsAppUrl(customMessage?: string): string {
  const msg = encodeURIComponent(customMessage ?? CONFIG.whatsappMessage);
  return `https://wa.me/${CONFIG.whatsappNumber}?text=${msg}`;
}
