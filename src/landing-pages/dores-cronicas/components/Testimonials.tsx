import { Star } from "lucide-react";
import { CONFIG } from "../config";
import { WhatsAppButton } from "./WhatsAppButton";

const REVIEWS = [
  {
    name: "Maria S.",
    rating: 5,
    text: "Sofria com dores na lombar há anos. Após o tratamento, minha qualidade de vida mudou completamente. Equipe incrível!",
    date: "Há 2 semanas",
  },
  {
    name: "João P.",
    rating: 5,
    text: "Profissionais excelentes e muito atenciosos. O bloqueio nervoso que fiz resolveu minha ciática em poucas sessões.",
    date: "Há 1 mês",
  },
  {
    name: "Ana C.",
    rating: 5,
    text: "Já passei por vários médicos sem resultado. Aqui finalmente encontrei um tratamento que realmente funciona para minha fibromialgia.",
    date: "Há 3 semanas",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < rating ? "fill-[#e6b25d] text-[#e6b25d]" : "text-gray-300"}`}
        />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section id="depoimentos" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <span className="text-sm font-semibold text-[#e6b25d] uppercase tracking-wider">
            Depoimentos
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-4">
            O Que Nossos Pacientes Dizem
          </h2>
        </div>

        {/* Google Reviews cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {REVIEWS.map((review) => (
            <div
              key={review.name}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="font-semibold text-gray-900">{review.name}</p>
                  <p className="text-xs text-gray-400">{review.date}</p>
                </div>
                <StarRating rating={review.rating} />
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{review.text}</p>
              {/* Google icon placeholder */}
              <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-100">
                <svg viewBox="0 0 24 24" className="w-4 h-4" aria-hidden="true">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                <span className="text-xs text-gray-400">Avaliação do Google</span>
              </div>
            </div>
          ))}
        </div>

        {/* Video testimonial */}
        <div className="max-w-3xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden bg-gray-900 aspect-video shadow-xl">
            <iframe
              src={`https://www.youtube.com/embed/${CONFIG.youtubeVideoId}`}
              title="Depoimento em vídeo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
              loading="lazy"
            />
          </div>
          <p className="text-center text-sm text-gray-500 mt-3">
            Veja o depoimento de nossos pacientes
          </p>
        </div>

        <div className="text-center mt-12">
          <WhatsAppButton label="Comece Seu Tratamento" variant="gold" size="lg" />
        </div>
      </div>
    </section>
  );
}
