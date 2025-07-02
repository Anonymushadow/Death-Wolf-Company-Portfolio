import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['icons/PWA'],
      manifest: {
        name: 'Death Wolf Company',
        short_name: 'DWC',
        description: 'Portfolio Web de Death Wolf Company',
        start_url: '/',
        display: 'standalone',
        background_color: '#000000',
        theme_color: '#4e0789',
        icons: [
          {
            src: 'icons/PWA/DWC-Logo-Primario-192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'icons/PWA/DWC-Logo-Primario-512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
})
