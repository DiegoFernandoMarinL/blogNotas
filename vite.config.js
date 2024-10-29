import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://diegofernandomarinl.github.io/blogNotas/',
  server: {
    https: {
      key: fs.readFileSync('./server.key'),  // Ajusta la ruta a tu archivo .key
      cert: fs.readFileSync('./server.cert') // Ajusta la ruta a tu archivo .cert
    },
    host: 'localhost', // Opcional: Asegura que la configuración esté en el host correcto
    port: 3000, // Puerto para el servidor de desarrollo
  }
})
