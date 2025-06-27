import { useContext } from 'react';
import { LanguageContext } from '@contexts/LanguageContext';
import * as texts from '@data/texts';

export const useTexts = (section) => {
  const { language } = useContext(LanguageContext); // ej: 'es' o 'en'

  if (!texts[section]) {
    console.warn(`No se encontró la sección "${section}" en texts`);
    return {};
  }

  return texts[section][language] || {};
};
