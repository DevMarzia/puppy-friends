import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


export default defineConfig({
  plugins: [tailwindcss(), react()],
  
  
  server: {
    watch: {
    // Istruisce a ignorare le modifiche al file db.json.
    // Perchè ogni volta che json-server scrive su db.json (dopo un POST, PUT, etc.),
    // il watcher di Vite rileva la modifica e forza un ricaricamento completo della pagina,
    // interrompendo il comportamento di una SPA.
      ignored: ['**/db.json'],
    },
  },
})