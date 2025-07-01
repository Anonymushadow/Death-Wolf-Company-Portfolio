import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
        includeAssets: [
          'icons/PWA/DWC-Logo-Primario-192.png',
          'icons/PWA/DWC-Logo-Primario-512.png'
        ],
      manifest: {
        name: 'Death Wolf Company',
        short_name: 'DWC',
        description: 'Portfolio Web de Death Wolf Company',
        theme_color: '#4e0789',
        icons: [
          {
            src: '/icons/PWA/DWC-Logo-Primario-912.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/icons/PWA/DWC-Logo-Primario-512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ],
      },
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
