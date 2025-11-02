import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // <-- Importa 'path' de Node.js

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // --- Añade esta sección ---
  resolve: {
    alias: {
      // Esto le dice a Vite: '@' es un atajo para 'src'
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // -------------------------
})