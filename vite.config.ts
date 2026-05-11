import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/trion-intelligence/',
  assetsInclude: ['**/*.md'],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        'lp-dores-cronicas': 'lp-dores-cronicas.html',
        'lp-rafael-rocha': 'lp-rafael-rocha.html',
        'lp-rafael-rocha-v2': 'lp-rafael-rocha-v2.html',
        'site-santa-isabel': 'site-santa-isabel.html',
        'lp-santa-isabel': 'lp-santa-isabel.html',
        'miv-santa-isabel': 'miv-santa-isabel.html',
      },
    },
  },
})
