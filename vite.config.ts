import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss(), react()],
  base: '/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        compoundPortfolio: resolve(__dirname, 'compound-portfolio.html'),
        tracker: resolve(__dirname, 'tracker.html'),
      },
    },
  },
})
