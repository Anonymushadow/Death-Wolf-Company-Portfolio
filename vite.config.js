import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
     registerType: 'autoUpdate',
      includeAssets: ['icons/PWA'], // Copia toda la carpeta directamente
      manifest: false,
      start_url: '/',
      display: 'standalone',
      background_color: '#000000',
    })
  ],
  resolve: {
    alias: {
      '@components': '/src/components',  /* Cuando vite vean @components, lo va a reemplazar por /src/components */
      '@styles': '/src/styles',
      '@config': '/src/config',
      '@pages': '/src/pages',
      '@hooks': '/src/hooks',
      '@modules': '/src/modules',
      '@contexts': "/src/contexts",
      '@data': "/src/data"
    }
  }
})
