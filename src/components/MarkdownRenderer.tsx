import { useState, useCallback, type ReactNode, type HTMLAttributes } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Copy, Check } from 'lucide-react';

interface MarkdownRendererProps {
  content: string;
  searchQuery: string;
}

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [text]);

  return (
    <button
      onClick={handleCopy}
      className="copy-button absolute top-3 right-3 p-1.5 rounded-md bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-cyan-400 transition-colors opacity-0 group-hover:opacity-100"
      title="Copiar"
    >
      {copied ? <Check size={14} /> : <Copy size={14} />}
    </button>
  );
}

function highlightText(text: string, query: string): ReactNode {
  if (!query || query.length < 2) return text;

  const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const parts = text.split(new RegExp(`(${escapedQuery})`, 'gi'));

  if (parts.length === 1) return text;

  return parts.map((part, i) =>
    part.toLowerCase() === query.toLowerCase() ? (
      <mark key={i} className="bg-cyan-500/30 text-cyan-200 rounded px-0.5">
        {part}
      </mark>
    ) : (
      part
    )
  );
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export function MarkdownRenderer({ content, searchQuery }: MarkdownRendererProps) {
  return (
    <div className="markdown-content">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        children={content}
        components={{
          h1: ({ children }) => {
            const text = getTextContent(children);
            const id = slugify(text);
            return (
              <h1 id={id} className="group">
                {highlightText(text, searchQuery)}
                <a href={`#${id}`} className="ml-2 opacity-0 group-hover:opacity-100 text-gray-600 hover:text-cyan-400 transition-opacity no-underline text-xl">
                  #
                </a>
              </h1>
            );
          },
          h2: ({ children }) => {
            const text = getTextContent(children);
            const id = slugify(text);
            return (
              <h2 id={id} className="group">
                {highlightText(text, searchQuery)}
                <a href={`#${id}`} className="ml-2 opacity-0 group-hover:opacity-100 text-gray-600 hover:text-cyan-400 transition-opacity no-underline text-lg">
                  #
                </a>
              </h2>
            );
          },
          h3: ({ children }) => {
            const text = getTextContent(children);
            const id = slugify(text);
            return (
              <h3 id={id} className="group">
                {highlightText(text, searchQuery)}
                <a href={`#${id}`} className="ml-2 opacity-0 group-hover:opacity-100 text-gray-600 hover:text-cyan-400 transition-opacity no-underline text-base">
                  #
                </a>
              </h3>
            );
          },
          p: ({ children }) => {
            if (typeof children === 'string') {
              return <p>{highlightText(children, searchQuery)}</p>;
            }
            return <p>{children}</p>;
          },
          blockquote: ({ children }) => {
            const text = getTextContent(children);
            return (
              <div className="relative group">
                <blockquote>{children}</blockquote>
                <CopyButton text={text} />
              </div>
            );
          },
          table: ({ children }) => (
            <div className="overflow-x-auto rounded-lg border border-gray-800 mb-6">
              <table>{children}</table>
            </div>
          ),
          input: (props: HTMLAttributes<HTMLInputElement> & { type?: string; checked?: boolean }) => {
            if (props.type === 'checkbox') {
              return (
                <InteractiveCheckbox defaultChecked={props.checked ?? false} />
              );
            }
            return <input {...props} />;
          },
          li: ({ children, ...props }) => {
            const className = props.className || '';
            if (className.includes('task-list-item')) {
              return (
                <li className="task-list-item list-none flex items-start gap-2 mb-1">
                  {children}
                </li>
              );
            }
            return <li>{children}</li>;
          },
        }}
      />
    </div>
  );
}

function InteractiveCheckbox({ defaultChecked }: { defaultChecked: boolean }) {
  const [checked, setChecked] = useState(defaultChecked);
  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={() => setChecked((c) => !c)}
      className="mt-1.5 h-4 w-4 rounded border-gray-600 bg-gray-800 text-cyan-500 accent-cyan-500 cursor-pointer flex-shrink-0"
    />
  );
}

function getTextContent(children: ReactNode): string {
  if (typeof children === 'string') return children;
  if (typeof children === 'number') return String(children);
  if (Array.isArray(children)) return children.map(getTextContent).join('');
  if (children && typeof children === 'object' && 'props' in children) {
    return getTextContent((children as { props: { children?: ReactNode } }).props.children);
  }
  return '';
}
