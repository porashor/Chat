import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   preview: {
    port: 4000,
    host: true,
    allowedHosts: ['chat-xuk2.onrender.com']
  }
})
