import { useState, useEffect, useCallback } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { ModulePage } from './components/ModulePage';
import { contentMap } from './data/content';
import { modules } from './data/modules';

function getSlugFromHash(): string {
  const hash = window.location.hash.replace('#/', '').split('#')[0];
  return hash || 'home';
}

function App() {
  const [currentSlug, setCurrentSlug] = useState(getSlugFromHash);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<string[]>([]);

  useEffect(() => {
    const handleHashChange = () => {
      const slug = getSlugFromHash();
      setCurrentSlug(slug);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = useCallback((slug: string) => {
    window.location.hash = `#/${slug}`;
    setCurrentSlug(slug);
  }, []);

  useEffect(() => {
    if (!searchQuery || searchQuery.length < 2) {
      setSearchResults([]);
      return;
    }

    const query = searchQuery.toLowerCase();
    const results: string[] = [];

    for (const mod of modules) {
      const content = contentMap[mod.slug];
      if (content && content.toLowerCase().includes(query)) {
        results.push(mod.slug);
      }
    }

    setSearchResults(results);
  }, [searchQuery]);

  const displaySlug =
    searchQuery.length >= 2 && searchResults.length > 0 && !searchResults.includes(currentSlug)
      ? searchResults[0]
      : currentSlug;

  return (
    <div className="min-h-screen bg-gray-950">
      <Header
        sidebarOpen={sidebarOpen}
        onToggleSidebar={() => setSidebarOpen((o) => !o)}
      />

      <Sidebar
        currentSlug={displaySlug}
        onNavigate={navigate}
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      <main className="pt-16 lg:pl-72 main-content">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Search results indicator */}
          {searchQuery.length >= 2 && (
            <div className="mb-6 px-4 py-3 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
              {searchResults.length > 0 ? (
                <div>
                  <p className="text-sm text-cyan-300">
                    Encontrado em {searchResults.length} módulo{searchResults.length > 1 ? 's' : ''}:
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {searchResults.map((slug) => {
                      const mod = modules.find((m) => m.slug === slug);
                      if (!mod) return null;
                      return (
                        <button
                          key={slug}
                          onClick={() => navigate(slug)}
                          className={`text-xs px-3 py-1.5 rounded-full transition-colors ${
                            displaySlug === slug
                              ? 'bg-cyan-500 text-white'
                              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                          }`}
                        >
                          {mod.icon} {mod.shortTitle}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <p className="text-sm text-gray-400">
                  Nenhum resultado encontrado para &quot;{searchQuery}&quot;
                </p>
              )}
            </div>
          )}

          <ModulePage
            slug={displaySlug}
            searchQuery={searchQuery}
            onNavigate={navigate}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
