import { useEffect } from 'react';
import { modules } from '../data/modules';
import { contentMap } from '../data/content';
import { MarkdownRenderer } from './MarkdownRenderer';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ModulePageProps {
  slug: string;
  searchQuery: string;
  onNavigate: (slug: string) => void;
}

export function ModulePage({ slug, searchQuery, onNavigate }: ModulePageProps) {
  const content = contentMap[slug];
  const currentIndex = modules.findIndex((m) => m.slug === slug);
  const prevModule = currentIndex > 0 ? modules[currentIndex - 1] : null;
  const nextModule = currentIndex < modules.length - 1 ? modules[currentIndex + 1] : null;

  useEffect(() => {
    // Scroll to top on navigation, unless there's a hash
    if (!window.location.hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [slug]);

  if (!content) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
        <div className="text-6xl mb-4">📄</div>
        <h2 className="text-2xl font-semibold text-white mb-2">Módulo não encontrado</h2>
        <p className="text-gray-400 mb-6">O conteúdo solicitado não está disponível.</p>
        <button
          onClick={() => onNavigate('home')}
          className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-colors"
        >
          Voltar ao início
        </button>
      </div>
    );
  }

  return (
    <div>
      {/* Breadcrumb */}
      {slug !== 'home' && (
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <button
            onClick={() => onNavigate('home')}
            className="hover:text-cyan-400 transition-colors"
          >
            Home
          </button>
          <span>/</span>
          <span className="text-gray-300">
            {modules[currentIndex]?.title}
          </span>
        </div>
      )}

      {/* Content */}
      <MarkdownRenderer content={content} searchQuery={searchQuery} />

      {/* Navigation */}
      <div className="flex items-stretch gap-4 mt-12 pt-8 border-t border-gray-800">
        {prevModule ? (
          <button
            onClick={() => onNavigate(prevModule.slug)}
            className="flex-1 flex items-center gap-3 p-4 rounded-lg border border-gray-800 hover:border-cyan-500/30 hover:bg-gray-900/50 transition-all text-left group"
          >
            <ChevronLeft size={20} className="text-gray-600 group-hover:text-cyan-400 flex-shrink-0" />
            <div>
              <p className="text-xs text-gray-500 mb-1">Anterior</p>
              <p className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                {prevModule.icon} {prevModule.shortTitle}
              </p>
            </div>
          </button>
        ) : (
          <div className="flex-1" />
        )}

        {nextModule && (
          <button
            onClick={() => onNavigate(nextModule.slug)}
            className="flex-1 flex items-center justify-end gap-3 p-4 rounded-lg border border-gray-800 hover:border-cyan-500/30 hover:bg-gray-900/50 transition-all text-right group"
          >
            <div>
              <p className="text-xs text-gray-500 mb-1">Próximo</p>
              <p className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                {nextModule.icon} {nextModule.shortTitle}
              </p>
            </div>
            <ChevronRight size={20} className="text-gray-600 group-hover:text-cyan-400 flex-shrink-0" />
          </button>
        )}
      </div>
    </div>
  );
}
