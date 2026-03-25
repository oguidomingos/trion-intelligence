#!/usr/bin/env node
/**
 * generate-base-template.js
 *
 * Generates the base carousel .fig template using OpenPencil MCP.
 * Run via: openpencil-mcp (stdio) or directly with Node.js.
 *
 * This script creates a multi-page .fig document with 5 pre-built
 * carousel slide templates that the Designer agent can clone and customize.
 *
 * Prerequisites:
 *   npm install -g @open-pencil/mcp
 *   npm install -g esbuild
 *
 * Usage:
 *   This script documents the MCP tool calls needed.
 *   The Designer agent should follow these steps via MCP.
 */

// ─────────────────────────────────────────────────────────
// STEP-BY-STEP MCP CALLS FOR GENERATING A CAROUSEL
// ─────────────────────────────────────────────────────────

const CAROUSEL_CONFIG = {
  // Dimensions
  width: 1080,
  height: 1080,

  // Default brand colors (override per client)
  colors: {
    trion: {
      primary: '#7B2CBF',      // Trion purple
      accent: '#c084fc',       // Lilás
      bg: '#272757',           // Midnight
      text: '#FFFFFF',
      textMuted: 'rgba(255,255,255,0.5)',
    },
    dark_luxury: {
      primary: '#b08d57',      // Gold
      accent: '#c9a96e',       // Light gold
      bg: '#1c1a17',           // Dark brown
      text: '#faf8f5',         // Off-white
      textMuted: 'rgba(250,248,245,0.5)',
    },
    clean_modern: {
      primary: '#2563EB',      // Blue
      accent: '#3B82F6',       // Light blue
      bg: '#FFFFFF',           // White
      text: '#1E293B',         // Slate
      textMuted: 'rgba(30,41,59,0.5)',
    },
  },

  // Typography
  fonts: {
    serif: 'Cormorant Garamond',
    sans: 'Inter',
    trion_primary: 'Geist',
    trion_secondary: 'Plus Jakarta Sans',
  },

  // Spacing
  padding: {
    outer: 50,
    inner: 30,
    top: 40,
  },
};

/**
 * MCP Tool Call Sequence for ONE carousel (5 slides):
 *
 * For each slide (i = 1..5):
 *
 *   1. new_document({ width: 1080, height: 1080, name: "slide-{i}" })
 *
 *   2. render({ jsx: "<CoverSlide ... />" })    // or ContentSlide, StatsSlide, etc.
 *      — Use the JSX templates from carousel-template.jsx
 *      — Replace all {{VARIABLES}} with actual content
 *
 *   3. export_image({ nodeId: "0:1", format: "PNG", scale: 2 })
 *      — Exports as 2160x2160 PNG (2x for retina)
 *      — Save to output directory
 *
 *   4. save_file({ path: "carousel-slide-{i}.fig" })
 *      — Optional: save the .fig for future editing
 *
 * After all slides:
 *   - Upload all PNGs to Google Drive
 *   - Post links in Paperclip comment
 */

// ─────────────────────────────────────────────────────────
// EXAMPLE: Full carousel for Trion Marketing client
// ─────────────────────────────────────────────────────────

const EXAMPLE_CAROUSEL = {
  brand: 'Trion Marketing',
  theme: 'trion',
  totalSlides: 5,
  slides: [
    {
      type: 'cover',
      data: {
        BRAND_NAME: 'Trion Marketing',
        HEADLINE: 'Transforme sua\nClínica em uma\nMáquina de Vendas',
        LOCATION: 'Brasil',
        PRIMARY_COLOR: '#7B2CBF',
      },
    },
    {
      type: 'content',
      data: {
        BRAND_NAME: 'Trion Marketing',
        SLIDE_NUM: '2',
        TOTAL_SLIDES: '5',
        CATEGORY: 'Problema',
        TAGLINE: 'Sua clínica depende de indicações?',
        DETAIL: 'A maioria dos negócios não tem previsibilidade de receita',
        PRIMARY_COLOR: '#7B2CBF',
      },
    },
    {
      type: 'stats',
      data: {
        BRAND_NAME: 'Trion Marketing',
        SLIDE_NUM: '3',
        TOTAL_SLIDES: '5',
        HEADLINE: 'Nossos Resultados',
        PRIMARY_COLOR: '#7B2CBF',
        STAT_1_VALUE: '7.2x',
        STAT_1_LABEL: 'ROI médio dos nossos clientes',
        STAT_2_VALUE: 'R$12',
        STAT_2_LABEL: 'CPC médio em campanhas',
        STAT_3_VALUE: '7.4%',
        STAT_3_LABEL: 'Taxa de conversão',
        STAT_4_VALUE: '30+',
        STAT_4_LABEL: 'Clientes atendidos',
      },
    },
    {
      type: 'list',
      data: {
        BRAND_NAME: 'Trion Marketing',
        SLIDE_NUM: '4',
        TOTAL_SLIDES: '5',
        HEADLINE: 'O que você recebe',
        PRIMARY_COLOR: '#7B2CBF',
        ITEM_1_TITLE: 'Diagnóstico completo',
        ITEM_1_DESC: 'Análise de presença digital, concorrência e oportunidades',
        ITEM_2_TITLE: 'Estratégia personalizada',
        ITEM_2_DESC: 'Plano de ação com metas, KPIs e cronograma',
        ITEM_3_TITLE: 'Tráfego pago otimizado',
        ITEM_3_DESC: 'Campanhas Meta Ads + Google Ads com ROI monitorado',
        ITEM_4_TITLE: 'Conteúdo estratégico',
        ITEM_4_DESC: 'Posts, carrosséis e stories com copy de conversão',
      },
    },
    {
      type: 'cta',
      data: {
        BRAND_NAME: 'Trion Marketing',
        TOTAL_SLIDES: '5',
        HEADLINE: 'Pronto para\ncrescer?',
        SUBHEADLINE: 'Agende uma análise gratuita da sua clínica',
        CTA_TEXT: 'Agendar Agora',
        PRIMARY_COLOR: '#7B2CBF',
      },
    },
  ],
};

// Export config for Designer agent reference
module.exports = { CAROUSEL_CONFIG, EXAMPLE_CAROUSEL };

console.log('Carousel template configuration loaded.');
console.log('Slide types available: cover, content, stats, list, cta');
console.log('Color themes: trion, dark_luxury, clean_modern');
console.log('\nSee carousel-template.jsx for JSX templates.');
console.log('See README.md for Designer agent workflow.');
