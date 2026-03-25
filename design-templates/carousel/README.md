# Carousel Design Templates — OpenPencil MCP

Templates base para construção de carrosséis no Instagram e Meta Ads usando OpenPencil MCP.

## Arquivos

| Arquivo | Descrição |
|---------|-----------|
| `carousel-template.jsx` | Templates JSX para 5 tipos de slides |
| `generate-base-template.js` | Config + exemplos + constantes de design |
| `README.md` | Este guia de uso |

## Tipos de Slides

1. **Cover** — Capa com marca, headline e localização
2. **Content** — Foto de fundo + título + descrição (categoria/portfólio)
3. **Stats** — Métricas e números em grid 2x2
4. **List** — Lista numerada (educacional, benefícios, passos)
5. **CTA** — Slide final com botão de ação

## Workflow para o Designer Agent

### Passo 1: Receber o Brief

Ler a tarefa e extrair:
- Nome da marca (ex: "Trion Marketing", "Ornato Estudio")
- Tema de cores (trion / dark_luxury / clean_modern / custom)
- Número de slides (3-10, tipicamente 5)
- Conteúdo de cada slide (textos, dados, fotos)
- Tipo de cada slide (cover, content, stats, list, cta)

### Passo 2: Montar o JSX

Para cada slide, usar o template correspondente de `carousel-template.jsx`.

**Substituir variáveis:**
```
{{BRAND_NAME}}    → nome da marca
{{HEADLINE}}      → texto principal
{{PRIMARY_COLOR}} → cor primária da marca
... etc
```

### Passo 3: Gerar via OpenPencil MCP

Para CADA slide, executar esta sequência de MCP tools:

```
1. new_document  →  { width: 1080, height: 1080 }
2. render        →  JSX do slide (com variáveis substituídas)
3. export_image  →  { nodeId: "0:1", format: "PNG", scale: 2 }
4. save_file     →  { path: "carousel-slide-N.fig" }  (opcional)
```

**IMPORTANTE:** `export_image` usa format `"PNG"` (maiúsculo). O `nodeId` do frame raiz é tipicamente `"0:1"`.

### Passo 4: Upload e Entrega

1. Salvar PNGs no diretório de output
2. Upload para Google Drive via `gog drive upload`
3. Postar links no comentário da tarefa Paperclip

## Paletas de Cores

### Trion Marketing (padrão para clínicas)
```
Primary:    #7B2CBF (roxo)
Accent:     #c084fc (lilás)
Background: #272757 (midnight)
Text:       #FFFFFF
Text Muted: rgba(255,255,255,0.5)
Fonts:      Geist + Plus Jakarta Sans
```

### Dark Luxury (tatuadores, premium)
```
Primary:    #b08d57 (dourado)
Accent:     #c9a96e (dourado claro)
Background: #1c1a17 (marrom escuro)
Text:       #faf8f5 (off-white)
Text Muted: rgba(250,248,245,0.5)
Fonts:      Cormorant Garamond + Inter
```

### Clean Modern (tech, oficinas)
```
Primary:    #2563EB (azul)
Accent:     #3B82F6 (azul claro)
Background: #FFFFFF (branco)
Text:       #1E293B (slate)
Text Muted: rgba(30,41,59,0.5)
Fonts:      Inter + Inter
```

## Dimensões

- Feed/Carrossel: **1080 x 1080px**
- Stories: **1080 x 1920px**
- Export scale: **2x** (retina = 2160x2160)
- Margins: 50px outer, 30px inner
- Top bar height: ~100px

## Tipografia

| Uso | Fonte | Peso | Tamanho |
|-----|-------|------|---------|
| Brand name | Serif/Sans | 300 | 24-28px |
| Headline | Serif | 600 | 52-84px |
| Category | Serif | 600 | 72px |
| Tagline | Serif italic | 400 | 40px |
| Body | Sans | 300 | 22-24px |
| Slide num | Sans | 300 | 22px |
| CTA button | Sans | 600 | 24px |
| Stats value | Sans | 700 | 72px |

## Regras de Design

1. **Slide indicator** sempre no canto superior direito (ex: "2 / 5")
2. **Brand name** sempre presente (top-left ou bottom-center)
3. **CTA slide** sempre é o último
4. **Cover slide** sempre é o primeiro
5. **Máximo 4 linhas de texto** por slide (mobile-first)
6. **Fonte mínima 22px** para legibilidade no celular
7. **Gradientes** sobre fotos para garantir contraste do texto
8. **Border decorativa** no CTA slide (1px, cor primária com baixa opacidade)

## Fallback: HTML/CSS + Playwright

Se OpenPencil MCP não estiver disponível ou falhar, usar o método HTML/CSS:

```javascript
// Playwright headless rendering
const { chromium } = require('playwright-core');
// ... render HTML string to PNG via page.screenshot()
```

Ver `render-ads-v2.js` no workspace do Designer para exemplos completos.
