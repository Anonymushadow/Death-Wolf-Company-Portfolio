import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Death Wolf Company",
        short_name: "DWC",
        description: "Portfolio Web de Death Wolf Company",
        theme_color: "#4e0789",
        background_color: "#000000",
        display: "standalone",
        start_url: "/",
        icons: [
          {
            src: "/dwc-logo-primario-192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/dwc-logo-primario-512.png",
            sizes: "512x512",
            type: "image/png"
          }
        ]
      },
      devOptions: {
        enabled: false, // No usar PWA en modo dev
      },
    })
  ],
  resolve: {
    alias: {
      "@components": "/src/components",  /* Cuando vite vean @components, lo va a reemplazar por /src/components */
      "@styles": "/src/styles",
      "@config": "/src/config",
      "@pages": "/src/pages",
      "@hooks": "/src/hooks",
      "@modules": "/src/modules",
      "@contexts": "/src/contexts",
      "@data": "/src/data"
    }
  }
})