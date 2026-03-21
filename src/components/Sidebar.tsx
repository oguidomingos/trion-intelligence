import { modules } from '../data/modules';

interface SidebarProps {
  currentSlug: string;
  onNavigate: (slug: string) => void;
  open: boolean;
  onClose: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export function Sidebar({
  currentSlug,
  onNavigate,
  open,
  onClose,
  searchQuery,
  onSearchChange,
}: SidebarProps) {
  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 z-30 bg-black/60 lg:hidden mobile-overlay"
          onClick={onClose}
        />
      )}

      <aside
        className={`
          fixed top-16 left-0 z-40 h-[calc(100vh-4rem)] w-72 bg-gray-900 border-r border-gray-800
          transform transition-transform duration-300 ease-in-out overflow-y-auto
          lg:translate-x-0
          ${open ? 'translate-x-0' : '-translate-x-full'}
          sidebar
        `}
      >
        {/* Search */}
        <div className="p-4 search-container">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar nos módulos..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30 transition-colors search-bar"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M1 1l12 12M13 1L1 13" />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Navigation */}
        <nav className="px-3 pb-6">
          <ul className="space-y-1">
            {modules.map((mod) => {
              const isActive = currentSlug === mod.slug;
              return (
                <li key={mod.id}>
                  <button
                    onClick={() => {
                      onNavigate(mod.slug);
                      onClose();
                    }}
                    className={`
                      w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium
                      flex items-center gap-3 transition-all duration-150
                      ${
                        isActive
                          ? 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/20'
                          : 'text-gray-400 hover:bg-gray-800 hover:text-gray-200 border border-transparent'
                      }
                    `}
                  >
                    <span className="text-base w-6 text-center flex-shrink-0">{mod.icon}</span>
                    <span className="truncate">{mod.shortTitle}</span>
                    {mod.id !== '00' && (
                      <span className={`ml-auto text-xs ${isActive ? 'text-cyan-500/60' : 'text-gray-600'}`}>
                        {mod.id}
                      </span>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer */}
        <div className="px-4 py-4 border-t border-gray-800 mt-auto">
          <p className="text-gray-600 text-xs">
            Versão Março 2026
          </p>
          <p className="text-gray-600 text-xs">
            Trion Marketing
          </p>
        </div>
      </aside>
    </>
  );
}
