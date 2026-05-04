// ─── Configuração da Landing Page ────────────────────────────────
// Altere os valores abaixo para personalizar para cada cliente.

export const CONFIG = {
  clinicName: "Dr. Leandro Marques Dutra",
  tagline: "Especialista em Tratamento de Dores Crônicas e Medicina da Dor",
  city: "Brasília",
  state: "DF",
  phone: "(61) 99999-9999",
  whatsappNumber: "5561999999999",
  whatsappMessage: "Olá! Gostaria de agendar uma consulta com o Dr. Leandro Marques Dutra para tratamento de dores crônicas.",
  address: "SGAS 610, Conjunto A, Sala 200, Asa Sul, Brasília - DF, 70200-700",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.4!2d-47.9!3d-15.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDQ4JzAwLjAiUyA0N8KwNTQnMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1",
  googleReviewsScore: "4.9",
  googleReviewsCount: "347",
  stats: {
    procedures: "12.000+",
    insurances: "30+",
    patients: "8.000+",
    professionals: "15+",
  },
  doctorCrm: "CRM/DF 12345",
  doctorRqe: "RQE/DF 6789",
  doctorName: "Dr. Rafael Rocha",
  doctorSpecialties: "Médico da Dor e Ortopedista",
  doctorBio: "Com mais de 15 anos de experiência em medicina da dor e ortopedia, o Dr. Rafael Rocha é reconhecido por sua abordagem humanizada e inovadora. Dedicado ao alívio do sofrimento dos pacientes, utiliza as mais avançadas técnicas de tratamento minimamente invasivo. Sua formação contínua e expertise em procedimentos regenerativos o posicionam como referência na região.",
  youtubeVideoId: "dQw4w9WgXcQ",
} as const;

export function getWhatsAppUrl(customMessage?: string): string {
  const msg = encodeURIComponent(customMessage ?? CONFIG.whatsappMessage);
  return `https://wa.me/${CONFIG.whatsappNumber}?text=${msg}`;
}
