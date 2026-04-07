import { Shield, CheckCircle } from "lucide-react";
import { CONFIG, getWhatsAppUrl } from "../config";

const CONVENIOS = [
  "Geap Saúde",
  "Consulte outros convênios",
];

export function Convenios() {
  return (
    <section id="convenios" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-teal-700 font-semibold text-sm uppercase tracking-wider mb-3">
              Convênios
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              <span className="font-display">Convênios</span> Aceitos
            </h2>
            <div className="section-divider mb-8" />
            <p className="text-lg text-gray-600">
              Trabalhamos com os principais convênios de saúde para facilitar o seu acesso
              ao tratamento.
            </p>
          </div>

          {/* Main card */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-teal-700 to-teal-600 px-8 py-6">
              <div className="flex items-center gap-3">
                <Shield className="w-8 h-8 text-white" />
                <div>
                  <h3 className="text-white font-bold text-lg">Planos de Saúde</h3>
                  <p className="text-teal-100 text-sm">
                    Atendemos convênios e também particular
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {CONVENIOS.map((name) => (
                  <div
                    key={name}
                    className="flex items-center gap-3 p-4 rounded-xl bg-teal-50 border border-teal-100"
                  >
                    <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0" />
                    <span className="font-medium text-gray-900">{name}</span>
                  </div>
                ))}
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 text-center">
                <p className="text-amber-800 font-medium mb-3">
                  Não encontrou o seu convênio?
                </p>
                <p className="text-amber-700 text-sm mb-4">
                  Entre em contato para verificar se aceitamos o seu plano de saúde.
                  Também atendemos pacientes particulares.
                </p>
                <a
                  href={getWhatsAppUrl(
                    `Olá! Gostaria de saber se a ${CONFIG.clinicName} aceita o meu convênio.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-700 text-white font-semibold text-sm hover:bg-teal-600 transition-colors"
                >
                  Consultar Convênio
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
