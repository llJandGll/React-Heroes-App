import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: '/React-Heroes-App/',  // Añade esta línea
  build: {
    outDir: 'docs'  // Define la carpeta de salida
  }
})
