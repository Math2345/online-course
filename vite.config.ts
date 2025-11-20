// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      // никаких лишних babel-плагинов, JSX будет работать
      jsxRuntime: 'automatic', // это для React 17+ (React 18 по умолчанию)
    }),
  ],
  resolve: {
    alias: {
      '@': '/src', // удобно для абсолютных импортов
    },
  },
  server: {
    port: 3000,
    open: true,
  },
})