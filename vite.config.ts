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
      },
    },
  },
})
