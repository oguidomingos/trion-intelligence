import { Menu, X } from 'lucide-react';

interface HeaderProps {
  sidebarOpen: boolean;
  onToggleSidebar: () => void;
}

export function Header({ sidebarOpen, onToggleSidebar }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-gray-950/95 backdrop-blur-sm border-b border-gray-800">
      <div className="flex items-center h-full px-4 lg:px-6">
        <button
          onClick={onToggleSidebar}
          className="lg:hidden p-2 -ml-2 text-gray-400 hover:text-white transition-colors"
          aria-label={sidebarOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className="flex items-center gap-3 ml-2 lg:ml-0">
          <div className="w-8 h-8 rounded-lg bg-cyan-500 flex items-center justify-center text-white font-bold text-sm">
            T
          </div>
          <div>
            <h1 className="text-white font-semibold text-base leading-tight">
              Trion Marketing
            </h1>
            <p className="text-gray-500 text-xs leading-tight hidden sm:block">
              Central de Treinamento
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
