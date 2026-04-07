import { CONFIG } from "../../santa-isabel/config";

export function FooterLP() {
  return (
    <footer className="bg-gray-900 text-gray-500 py-8">
      <div className="max-w-4xl mx-auto px-4 text-center text-xs space-y-2">
        <p className="text-gray-400">
          {CONFIG.clinicName} — Desde {CONFIG.foundedYear}
        </p>
        <p>{CONFIG.address}</p>
        <p>CNPJ: 09.366.963/0001-88</p>
        <p className="text-gray-600 mt-4">
          &copy; {new Date().getFullYear()} Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
