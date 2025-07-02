import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { registerSW } from 'virtual:pwa-register'

import { ThemeTransitionProvider } from '@contexts/TransitionThemeContext.jsx';
import { LanguageProvider } from '@contexts/LanguageContext.jsx';
import '@styles/base/styles.main.js';
import { styles } from '@config/styles.js';

const updateSW = registerSW({
  onNeedRefresh() {},
  onOfflineReady() {},
})

styles.forEach((stylePath) => {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = stylePath;
  document.head.appendChild(link);
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LanguageProvider>
      <ThemeTransitionProvider>
        <App />
      </ThemeTransitionProvider>
    </LanguageProvider>
  </StrictMode>,
);
